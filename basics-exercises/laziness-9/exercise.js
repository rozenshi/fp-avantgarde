/**
 * Lazy version of array
 * It won't execute internal mapping until run() is executed
 */
class LazyArray {
  constructor(arr) {
    // TODO
  }

  map(transform) {
    // TODO
  }

  values() {
    // TODO
  }

  run() {
    // TODO
  }
}

const a = new LazyArray([1, 2, 3, 4])
  .map(x => x + 1)
  .map(x => `element ${x}`)
  .map(x => x.toUpperCase());

console.log(LazyArray);
console.log(a.values());
console.log(a.run());
