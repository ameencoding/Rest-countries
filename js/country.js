"use strict";

import { countries } from "./data.js";

const container = document.querySelector(".country");

const getCountry = function (name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

const countryName = getCountry("country");

const country = countries.filter((c) => c.name === countryName);

// redirect
if (country.length <= 0) {
  location.href = "index.html";
}

container.innerHTML = country
  .map((c) => {
    return `<div class="country-img">
        <img src="${c.flag}" alt="" />
      </div>
      <div class="country-info">
        <h3 class="country-name">${c.name}</h3>
        <div class="country-info__content default-flex">
          <div>
            <ul>
              <li>Native Name: <span>${c.nativeName}</span></li>
              <li>Population: <span>${c.population}</span></li>
              <li>Region: <span>${c.region}</span></li>
              <li>Sub Region: <span>${c.subregion}</span></li>
              <li>Capital: <span>${c.capital}</span></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Top Level Domain: <span>${c.topLevelDomain}</span></li>
              <li>Currencies: <span>${c.currencies.map(
                (cur) => cur.name
              )}</span></li>
              <li>Languages: <span>${c.languages.map((l) => l.name)}</span></li>
            </ul>
          </div>
        </div>
        <div class="neighbour default-flex tx-sm">
          <strong>Border Countries:</strong>
           ${c.borders
             .map((b) => {
               return `<p class="tx-sm">${b}</p>`;
             })
             .join(" ")}
        </div>
      </div>
      `;
  })
  .join();
