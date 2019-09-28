function multsImper(n) {
  // REFACTOR
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 4 === 0 && i % 3 === 0) {
      result.push(`${i} is multiple of 3 and 4`);
    } else if (i % 3 === 0) {
      result.push(`${i} is multiple of 3`);
    } else if (i % 4 === 0) {
      result.push(`${i} is multiple of 4`);
    } else {
      result.push(`${i}, nothing to say about`);
    }
  }
  return result;
}

const stringify = val => JSON.stringify(val, null, 2);
console.log(stringify(multsImper(12)));
