const memoize = fn => {
  const cache = {};
  return (...args) => {
    // Does not work with fns
    const hash = JSON.stringify(args);
    if (hash in cache) return cache[hash];

    const result = fn(...args);
    cache[hash] = result;
    return result;
  };
};

const memoizeWith = hashFn => fn => {
  const cache = {};
  return (...args) => {
    const hash = hashFn(args);
    if (hash in cache) return cache[hash];

    const result = fn(...args);
    cache[hash] = result;
    return result;
  };
};