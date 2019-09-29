// not :: a -> Boolean
const not = elem => !elem

// add :: Number -> Number -> Number
// add :: String -> String -> String
const add = a => b => a + b

// includes :: a -> Array a -> Boolean
// includes :: a -> [a] -> Boolean
const includes = elem => list => list.includes(elem)

// keys :: Object v -> v
// keys :: {k: v} -> v
const keys = obj => Object.keys(obj)

// some :: (a -> Boolean) -> [a] -> Boolean
const some = pred => list => list.some(pred)

// sort :: ((a, a) => Number) -> [a] -> [a]
const sort = fn => arr => list.sort(fn)