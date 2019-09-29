const R = require('ramda');
const { pipe, filter, partition } = R;

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
const getDogs = () => { /* TODO */ }

/**
 * Filter no dogs
 */
const getNoDogs = () => { /* TODO */ }

/**
 * Divide pets into two groups (dogs and no dogs)
 * and pluck 'color' and 'name' from entries
 */
const classify = () => { /* TODO */ }
