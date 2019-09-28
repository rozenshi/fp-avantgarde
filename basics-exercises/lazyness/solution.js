const { pipe } = require("ramda");

// We are not into ramda at this point....
const identity = x => x;

/**
 * Lazy version of array
 * It won't execute internal mapping until run() is executed
 */
class LazyArray {
  constructor(arr, transform = identity) {
    this.transform = transform;
    this.arr = arr;
    return this;
  }

  map(transform) {
    return new LazyArray(
      this.arr,
      pipe(
        this.transform,
        transform
      )
    );
  }

  values() {
    return this.arr;
  }

  run() {
    return this.arr.map(this.transform);
  }
}

const a = new LazyArray([1, 2, 3, 4])
  .map(x => x + 1)
  .map(x => `element ${x}`)
  .map(x => x.toUpperCase());

console.log(LazyArray);
console.log(a.values());
console.log(a.run());
