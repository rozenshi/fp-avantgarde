const { compose, fromPairs, map, split, tail, tap } = R

const queryString = '?page=2&pageSize=10&total=203'

/**
 * Create a composition function that parses query strings
 * @example
 * // returns 
 * // {
 * //   page: '2',
 * //   pageSize: '10',
 * //   total: '203'
 * // }
 * parse(queryString)
 */
const parse = pipe(
  tail,
  split('&'),
  map(split('=')),
  fromPairs
)

// Debugging pipes
const log = tap(console.log);
const parse = pipe(
  log,
  tail,
  log,
  split('&'),
  log,
  map(split('=')),
  log,
  fromPairs,
  log
)