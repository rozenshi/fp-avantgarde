const { Just, Nothing } = require("crocks/Maybe");
const { curry } = require("ramda");

// liftA2 :: (a -> b -> c) -> Maybe a -> Maybe b -> Maybe c
const liftA2 = curry((f, ma, mb) => ma.map(f).ap(mb));

// liftA4 :: (a -> b -> c -> d -> e) -> Maybe a -> Maybe b -> Maybe c -> Maybe d -> Maybe e
const liftA4 = curry((f, ma, mb, mc, md) =>
  ma
    .map(f)
    .ap(mb)
    .ap(mc)
    .ap(md)
);