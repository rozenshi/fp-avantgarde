const { curry, init, pipe, modulo, __, equals } = require("ramda");
const { prop, last, allPass, is, length, test } = require("ramda");
const { gt, lte, liftN, tap } = require("ramda");

const nifCodes = require("../nif-codes.json");

const safe = require("crocks/Maybe/safe");

const { html, render } = require("lit-html");

// Person = name nif age website
const response = {
  name: "Lucas",
  nif: "70915214G",
  age: 32,
  website: "https://foo.bar.baz.com"
};

// renderPerson :: Person -> Html
const renderPerson = curry(
  (nif, name, birthYear, website) =>
    html`
      <div class="person-container">
        <h3>${name} - ${birthYear}</h3>
        <h4 class="nif">${nif}</h4>
        <h4 class="website">${website}</h4>
      </div>
    `
);

// renderError :: () -> Html
const renderError = () =>
  html`
    <div class="error-container">
      <h4>Person could not be loaded</h4>
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

// safeName :: String -> Maybe String
const safeName = safe(allPass([is(String), length]));
//ifElse(allPass([...]), Just, Nothing)

// safeNif :: String -> Maybe String
const safeNif = safe(allPass([is(String), isValidNif]));

// safeAge :: Number -> Maybe Number
const safeAge = safe(allPass([is(Number), lte(18), gt(80)]));

// safeWebsite :: String -> Maybe String
const safeWebsite = safe(allPass([is(String), test(/^https?:\/\//)]));

// ageToYear :: Number -> Number
const ageToYear = age => new Date().getFullYear() - age;

// saferRender :: Person -> Html
const saferRender = ({ nif, name, age, website }) =>
  liftN(4, renderPerson)(
    safeNif(nif),
    safeName(name),
    safeAge(age).map(ageToYear),
    safeWebsite(website)
  ).option(renderError());

render(saferRender(response), document.body);
console.log(saferRender(response).strings);
console.log(saferRender(response).values);
