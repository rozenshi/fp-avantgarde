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
// Imperative approach
const proccessUser = user => ({
  name: user.name.trim().toUpperCase(),
  birthYear: Number(user.birthYear),
  telephone: "+34" + user.telephone,
  gender: { false: "F", true: "M" }[user.gender],
  observations: user.observations.split("|")
});

// Secure imperative approach
const proccessUser2 =  user => ({
  name: user.name && user.name.trim().toUpperCase(),
  birthYear: user.birthYear && Number(user.birthYear),
  telephone: user.telephone && "+34" + user.telephone,
  gender: user.gender && { false: "F", true: "M" }[user.gender],
  observations: user.observations && user.observations.split("|")
});

// Functional approach
const transformations = {
  name: pipe(
    trim,
    toUpper
  ),
  birthYear: Number,
  telephone: concat("+34"),
  gender: prop(__, { false: "F", true: "M" }),
  observations: split("|")
};

const stringify = val => JSON.stringify(val, null, 2);
const computed = evolve(transformations, user);

console.log(stringify(computed));
