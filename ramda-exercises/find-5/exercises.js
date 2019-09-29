const { pipe, find } = require("ramda");

const countries = [
  {
    name: "SPAIN",
    code: "ES"
  },
  {
    name: "CHINA",
    code: "CH"
  }
];

/**
 * codeFromName :: string -> string
 * @example
 * // returns 'CH'
 * codeFromName(' china   ')
 */
const codeFromName = () => { /* TODO */ }