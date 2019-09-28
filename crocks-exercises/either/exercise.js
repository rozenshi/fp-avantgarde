const { curry, liftN } = require("ramda");

const { Right, Left } = require("crocks/Either");

const nifCodes = require("../nif-codes.json");

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
const safeRender = ({ nif, name, age, website }) => { /* TODO */}

render(safeRender(response), document.body);
