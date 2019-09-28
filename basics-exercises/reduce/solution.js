// filter: (a -> Boolean) -> Array a -> Array a
const filter = predicate => arr =>
  arr.reduce((acc, elem) => (predicate(elem) ? [...acc, elem] : acc), []);

// map :: (a -> b) -> Array a -> Array b
const map = transformer => arr =>
  arr.reduce((acc, elem) => [...acc, transformer(elem)]);

// some :: (a -> Boolean) -> Array a -> Boolean
const some = predicate => arr =>
  arr.reduce((acc, elem) => predicate(elem) || acc, false);

// every :: (a -> Boolean) -> Array a -> Boolean
const every = predicate => arr =>
  arr.reduce((acc, elem) => predicate(elem) && acc, true);

// includes :: a -> Array a -> Boolean
const includes = a => arr =>
  arr.reduce((acc, elem) => a === elem || acc, false);
