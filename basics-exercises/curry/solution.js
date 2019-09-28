function curry(fn) {
  const arity = fn.length;
  return function curried(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      return (...args2) => curried(...args, ...args2);
    }
  };
}