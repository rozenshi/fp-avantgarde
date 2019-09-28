const { pipe, compose } = require("ramda");

const teams = [
  { score: 25, name: 'The Alphas' },
  { score: 75, name: 'The Lambdas'},
  { score: 50, name: 'The Betas'}
]

const getTopName = teams => {
  const sortByScore = (a, b) => b.score - a.score;
  const sortedTeams = teams.sort(sortByScore);
  const first = sortedTeams[0];
  return first.name;
};

// REFACTOR: Compose with arrows

// REFACTOR: Pipe with arrows