/**
 * Create a function based on another one that allows
 * a maximum number of execution, throw error otherwise
 */
const maxTimes = (max, fn) => {
  let times = 0;
  return (...args) => {
    times++;
    if (times > max) {
      throw new Error("Operation not allowed");
    } else {
      return fn(...args);
    }
  };
};

// No internal state
const maxTimesNoState = (max, fn) => {
  const innerFn = times => (...args) => {
    if (times >= max) {
      throw new Error("Operation not allowed");
    } else {
      return [fn(...args), innerFn(times + 1)];
    }
  };
  return innerFn(0);
};

const f0 = maxTimesNoState(2, Math.max);
const [a, f1] = f0(1, 2, 3);
const [b, f2] = f1(4, 5, 6);
const [c] = f2(7, 8, 9);

console.log(a, b, c.toString());