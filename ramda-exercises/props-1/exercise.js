const R = require("ramda");
const { prop, assoc, pipe } = R;

const person = {
  name: "George",
  lastName: "Washington",
  cars: [
    "Ford",
    "BMW",
    "FIAT"
  ],
};

/**
 * Create a new person with second car removed
 * DON'T mutate person
 * removeSecondCar :: person -> person
 * @example 
 * // {
 * //   name: 'George',
 * //   lastName: 'Washington',
 * //   cars: [
 * //     'Ford',
 * //     'FIAT'
 * //   ]
 * // }
 * removeSecondCar(person)
 */
const removeSecondCar = () => { /* TODO */}

/**
 * Create a new person with alias field
 * DON'T mutate person
 * if name is not present 'Anonymous' as default
 * aliasPerson :: person -> person
 * @example 
 * // {
 * //   name: 'George',
 * //   lastName: 'Washington',
 * //   alias: 'One Leg George',
 * //   cars: [
 * //     'Ford',
 * //     "BMW",
 * //     'FIAT'
 * //   ]
 * // }
 * aliasPerson(person)
 */
const aliasPerson = () => { /* TODO */ }