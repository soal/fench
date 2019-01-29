import AbortablePromise from "./abortablePromise";
import createResponse from "./fResponse";

class Interceptor {
  constructor(API, interceptableMethods = []) {
    this.interceptors = [];

    if (!API) {
      throw new Error("API should be passed to the Interceptor");
    }
    this.API = API;

    if (interceptableMethods.length === 0) {
      throw new Error("no methods were added to interceptableMethods");
    }

    interceptableMethods.forEach(methodName => {
      const methodFn = API[methodName];
      API[methodName] = (...args) => this.interceptedMethod(methodFn, ...args);
    });
  }

  register(interceptor) {
    this.interceptors.push(interceptor);
    return () => this.unregister(interceptor);
  }

  unregister(interceptor) {
    const index = this.interceptors.indexOf(interceptor);
    if (index >= 0) {
      this.interceptors.splice(index, 1);
    }
  }

  clear() {
    this.interceptors = [];
  }

  interceptedMethod(methodFn, ...args) {
    // const { interceptors, API } = this;
    const reversedInterceptors = this.interceptors.slice().reverse();

    const abortController = new AbortController();
    let promise = AbortablePromise.resolve(abortController, ...args);

    // Register request interceptors
    this.interceptors.forEach(({ request, requestError }) => {
      if (typeof request === "function") {
        promise = promise.then((...args) =>
          request(promise.abortController.signal, ...args)
        );
      }
      if (typeof requestError === "function") {
        promise = promise.catch(requestError);
      }
    });

    // Register methodFn call
    if (typeof methodFn === "function") {
      promise = promise.then((...args) =>
        methodFn(promise.abortController.signal, ...args)
      );
    }

    // Register response interceptors
    reversedInterceptors.forEach(({ response, responseError }) => {
      if (typeof response === "function") {
        promise = promise.then(response);
      }
      if (typeof responseError === "function") {
        promise = promise.catch(responseError);
      }
    });

    let timeout = 0;

    if (
      typeof args[args.length - 1] === "object" &&
      typeof args[args.length - 1].timeout === "number"
    ) {
      timeout = args[args.length - 1].timeout;
    } else {
      timeout = this.API.timeout;
    }

    if (timeout > 0) {
      const timer = new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("Timeout exceeded"));
        }, timeout);
      });

      return AbortablePromise.race(abortController, [promise, timer]).then(
        value => value,
        err => {
          if (err && err.message === "Timeout exceeded") {
            promise.abort();
          }
          return Promise.reject(err);
        }
      );
    }
    return promise;
  }
}

export default Interceptor;