const { pipe } = require("ramda");

// Pure refactor
function decode(numbers) {
  const fromCharCode = number => String.fromCharCode(number);
  const chars = numbers.map(fromCharCode);
  const code = chars.join('');
  return "HELLO " + code + " FRIENDS";
}

// Pointfree refactor
const map = fn => array => array.map(fn);
const fromCharCode = number => String.fromCharCode(number);
const join = separator => array => array.join(separator);
const concat = str1 => str2 => str1.concat(str2);
const prepend = str1 => str2 => str2.concat(str1);

const decode2 = pipe(
  map(fromCharCode),
  join(""),
  concat("HELLO "),
  prepend(" FRIENDS")
);

decode2([65, 86, 65, 78, 84, 71, 65, 82, 68, 69])