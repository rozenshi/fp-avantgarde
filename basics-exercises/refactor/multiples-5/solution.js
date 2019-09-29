const { pipe } = require("ramda");

// and :: ((a -> Boolean), ...) -> a -> Boolean
const and = (...preds) => val =>
  preds.reduce((acc, pred) => pred(val) && acc, true);
// map :: (a -> b) -> Array a -> Array b
const map = transformer => list => list.map(transformer);
// range :: Number -> Array Number
const range = n => Array.from({ length: n }, (_, i) => i + 1);
// multOf :: Number -> Number -> Boolean
const multOf = m => n => n % m === 0;
// mult4 :: Number -> Boolean
const mult4 = multOf(4);
// mult3 :: Number -> Boolean
const mult3 = multOf(3);
// mult3 :: Number -> Boolean
const mult3A4 = and(mult4, mult3);

// sayMultiple :: Number -> String
const sayMultiple = n => {
  if (mult3A4(n)) {
    return `${n} is multiple of 3 and 4`;
  } else if (mult3(n)) {
    return `${n} is multiple of 3`;
  } else if (mult4(n)) {
    return `${n} is multiple of 4`;
  }
  return `${n}, nothing to say about`;
};

// multsFunct : Number -> Array String
const multsFunct = pipe(
  range,
  map(sayMultiple)
);

const stringify = val => JSON.stringify(val, null, 2);
console.log(stringify(multsFunct(12)));