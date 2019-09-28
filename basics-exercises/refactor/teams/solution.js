const { pipe, compose } = require("ramda");

const teams = [
  { score: 25, name: 'The Alphas' },
  { score: 75, name: 'The Lambdas'},
  { score: 50, name: 'The Betas'}
]

const getTopName2 = compose(
  team => team.name,
  teams => teams[0],
  teams => teams.sort((a, b) => b.score - a.score)
);

const getTopName3 = pipe(
  teams => teams.sort((a, b) => b.score - a.score),
  teams => teams[0],
  team => team.name
);

const compareByScore = (a, b) => b.score - a.score;
const sort = comparator => list => list.sort(comparator);
const head = list => list[0];
const prop = propName => obj => obj[propName];

const getTopName4 = pipe(
  sort(compareByScore),
  head,
  prop("name")
);
