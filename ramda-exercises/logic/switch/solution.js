const { always, equals, complement, is, anyPass, cond, T } = require("ramda");

const isNotName = complement(is(String));
const africanAnimal = anyPass([equals("jiraffe"), equals("lion")]);

/**
 * Must fidn the continent of an animal
 * @example
 * findAnimal(23) // "Wait, wait, that is not a name"
 * findAnimal('jiraffe') // "Africa"
 * findAnimal('lion') // "Africa"
 * findAnimal('panda bear') // "China"
 * findAnimal('kangaroo') // "Australia"
 * findAnimal('literally anything else') // "Around the world"
 */
const findAnimal = cond([
  [isNotName, always("Wait, wait, that is not a name")],
  [africanAnimal, always("Africa")],
  [equals("panda bear"), always("China")],
  [equals("kangaroo"), always("Australia")],
  [T, always("Around the world")]
]);
