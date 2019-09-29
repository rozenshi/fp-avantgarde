const R = require('ramda');
const { prop, pipe, equals, filter, reject } = R;
const { project, map, partition, complement } = R;

const pets = [
  {name: 'Spike', color: 'black', type: 'dog'},
  {name: 'Mittens', color: 'white', type: 'cat'},
  {name: 'Rover', color: 'brown', type: 'dog'},
  {name: 'Fluffy', color: 'green', type: 'cat'},
  {name: 'Fido', color: 'grey', type: 'dog'}
]

const isDog = pipe(prop('type'), equals('dog'))

/**
 * Filter dogs
 */
const getDogs = filter(isDog)

/**
 * Filter no dogs
 */
const getNoDogs = reject(isDog)
const getNoDogs2 = filter(complement(isDog))

/**
 * Divide pets into two groups (dogs and no dogs)
 * and pluck 'color' and 'name' from entries
 */
const classify = pipe(
  partition(isDog),
  map(project(['color', 'name']))
)
