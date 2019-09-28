const { pipe } = require("ramda");

// REFACTOR
function decode(numbers) {
  let char;
  let acum = [];
  for (let i = 0; i < numbers.length; i++) {
    char = String.fromCharCode(numbers[i]);
    acum.push(char);
  }
  let result = acum.join("");
  return "HELLO " + result + " FRIENDS";
}
