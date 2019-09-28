const { pipe, trim, toUpper, propEq, find, __, propOr } = require("ramda");
const { useWith, identity } = require("ramda");

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
const codeFromName = pipe(
  trim,
  toUpper,
  propEq("name"),
  find(__, countries),
  propOr("ES", "code")
);

// codeFromNameNoFree :: array -> string -> string
const codeFromNameNoFree = countries =>
  pipe(
    trim,
    toUpper,
    propEq("name"),
    find(__, countries),
    propOr("ES", "code")
  );

// codeFromNameNoFree :: string -> array -> string
const codeFromNameFull = pipe(
  useWith(find, [
    pipe(
      trim,
      toUpper,
      propEq("name")
    ),
    identity
  ]),
  propOr("ES", "code")
);

codeFromNameNoFree(" china  ", countries);
