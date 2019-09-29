const { curry, init, pipe, modulo, __, equals, identity } = require("ramda");
const { prop, last, is, test, propEq } = require("ramda");
const { gt, lte, liftN, tap, cond, complement, T } = require("ramda");

const nifCodes = require("../nif-codes.json");

const { Right, Left } = require("crocks/Either");

const { html, render } = require("lit-html");

const errors = {
  invalidNameType: `Name is not of the valid type (String expected)`,
  invalidNifType: `Nif is not of the valid type (String expected)`,
  invalidAgeType: `Age is not of the valid type (Number expected)`,
  invalidWebsiteType: `Website is not of the valid type (String expected)`,
  invalidNif: `You supplied an invalid document id`,
  nameNeeded: "The name should not be empty",
  underAge: `User underaged`,
  overAge: `User overaged`,
  protocol: "The webpage should start by a valid http protocol"
};

// Person = name nif age website
const response = {
  name: "Lucas",
  nif: "70915214G",
  age: 30,
  website: "https://foo.bar.baz.com"
};

// renderPerson :: Person -> Html
const renderPerson = curry((nif, name, birthYear, website) => {
  return html`
    <div class="person-container">
      <h3>${name} - ${birthYear}</h3>
      <h4 class="nif">${nif}</h4>
      <h4 class="website">${website}</h4>
    </div>
  `;
});

// renderError :: () -> Html
const renderError = msg =>
  html`
    <div class="error-container">
      <h4>Person could not be loaded</h4>
      <h4>${msg}</h4>
    </div>
  `;

// isValidNif :: String -> Boolean
const isValidNif = nif =>
  pipe(
    init,
    Number,
    modulo(__, 23),
    prop(__, nifCodes),
    equals(last(nif))
  )(nif);

const isNotString = complement(is(String));
const isNotNumber = complement(is(Number));
const isNotValidNif = complement(isValidNif);
const hasNoValidProtocol = complement(test(/^https?:\/\//));

// safeName :: String -> Maybe String
const eitherName = cond([
  [isNotString, () => Left(errors.invalidNameType)],
  [propEq("length", 0), () => Left(errors.nameNeeded)],
  [T, Right]
]);

// safeNif :: String -> Maybe String
const eitherNif = cond([
  [isNotString, () => Left(errors.invalidNifType)],
  [isNotValidNif, () => Left(errors.invalidNif)],
  [T, Right]
]);

// safeAge :: Number -> Maybe Number
const eitherAge = cond([
  [isNotNumber, () => Left(errors.invalidAgeType)],
  [gt(18), () => Left(errors.underAge)],
  [lte(80), () => Left(errors.overAge)],
  [T, Right]
]);

// safeWebsite :: String -> Maybe String
const eitherWebsite = cond([
  [isNotString, () => Left(errors.invalidWebsiteType)],
  [hasNoValidProtocol, () => Left(errors.protocol)],
  [T, Right]
]);

// ageToYear :: Number -> Number
const ageToYear = age => new Date().getFullYear() - age;

// saferRender :: Person -> Html
const eitherRender = ({ nif, name, age, website }) =>
  liftN(4, renderPerson)(
    eitherNif(nif),
    eitherName(name),
    eitherAge(age).map(ageToYear),
    eitherWebsite(website)
  ).either(msg => renderError(msg), identity);

render(eitherRender(response), document.body);

console.log(eitherRender(response));
console.log(eitherRender(response).strings);
console.log(eitherRender(response).values);
