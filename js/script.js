"use strict";

import { data } from "./data.js";
const container = document.querySelector(".wrapper");

const renderCountry = function () {
  container.innerHTML = data
    .map((d) => {
      return `<div class="card">
            <div class="cover">
              <img src="${d.flag}" alt="" />
            </div>
            <div class="info">
              <p class="name">${d.name}</p>
              <p class="population tx-md">
                Population: <span class="tx-sm">${d.population}</span>
              </p>
              <p class="region tx-md">
                Region: <span class="tx-sm">${d.region}</span>
              </p>
              <p class="capital tx-md">
                Capital: <span class="tx-sm">${d.capital}</span>
              </p>
            </div>
          </div>`;
    })
    .join(" ");
};

renderCountry();
