const R = require("ramda");
const { pipe, trim, toUpper, concat, prop, split, evolve, __ } = R;

const user = {
  name: "  Lucas  ",
  birthYear: "2018",
  telephone: "666543111",
  gender: "true",
  observations: "tricky|good"
};

/**
 * For a given user make the following transformations
 * @example
 * // returns 
 * // {
 * //   name: 'LUCAS',
 * //   birthYera: 2018,
 * //   gender: 'M',
 * //   observations: ['tricky', 'good']
 * // }
 * proccessUser(user)
 */
const proccessUser = user => { /* TODO */ }
