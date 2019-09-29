const { curry } = require("ramda");

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

// saferRender :: Person -> Html
const saferRender = ({ nif, name, age, website }) => { /* TODO */ }

render(safeRender(response), document.body);