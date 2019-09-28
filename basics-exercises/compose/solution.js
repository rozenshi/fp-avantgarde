function compose(...fns) {
  const fnReducer = (acc, fn) => fn(acc);
  return arg => fns.reduceRight(fnReducer, arg);
}

function pipe(...fns) {
  const fnReducer = (acc, fn) => fn(acc);
  return arg => fns.reduce(fnReducer, arg);
}

function composeAsync(...fns) {
  const fnReducer = (promise, fn) => promise.then(fn);
  return arg => fns.reduceRight(fnReducer, Promise.resolve(arg));
}







