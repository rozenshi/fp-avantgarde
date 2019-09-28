const { pathOr, map } = require("ramda");

const State = require("crocks/State");

const employees = [
  {
    name: "Luigi",
    surname: "Di Maria",
    economic: {
      incomes: 20000,
      currency: "€"
    }
  },
  {
    name: "Mario",
    surname: "Di Mama",
    economic: {
      incomes: 25000,
      currency: "€"
    }
  }
];

// State.get :: () -> State s s
// State.get :: (s -> a) -> State a s
// State.modify :: (s -> s) -> State () s
// State.put :: s -> State () s
// State.of :: a -> State a s
// TODO:

const stringify = val => JSON.stringify(val, null, 2);

console.log(x.toString());
console.log("Computed:", stringify(x.fst()));
console.log("State:", stringify(x.snd()));
