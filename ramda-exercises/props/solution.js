const R = require("ramda");
const { prop, assoc, pipe, __, converge, identity, dissocPath } = R;

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
const removeSecondCar = dissocPath(['cars', '1'])

/**
 * Create a new person with alias field
 * DON'T mutate person
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
// Imperative (mutate structure)
const aliasPerson = person => {
  const name = person.name;
  person.alias = `One Leg ${name}`;
  return person;
};

// Functional
const sayAlias = name => `One Leg ${name}`;
const aliasPerson2 = person =>
  pipe(
    propOr("Anonymous", "name"),
    sayAlias,
    assoc("alias", __, person)
  )(person);

// Functional & Pointfree
const sayAlias = name => `One Leg ${name}`;
const getAliasFromPerson = pipe(propOr("Anonymous", "name"), sayAlias);
const aliasPerson3 = converge(assoc("alias"), [getAliasFromPerson, identity]);

/**
 * @example 
 * const mean = converge(divide, [sum, length])
 */
