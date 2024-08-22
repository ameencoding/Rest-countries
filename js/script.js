"use strict";

import { countries } from "./data.js";
const container = document.querySelector(".wrapper");

const btnFilter = document.querySelector(".filter span");
const chevron = document.querySelector(".filter svg");
const regionsContainer = document.querySelector(".regions");
const regions = regionsContainer.querySelectorAll("ul li");

const input = document.querySelector(".search-container input");

const renderCountry = function (data) {
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

input.addEventListener("input", function () {
  const val = input.value.toLowerCase();
  const searched = countries.filter(
    (c) => c.name.toLowerCase().indexOf(val) !== -1
  );

  if (searched.length > 0) {
    renderCountry(searched);
  } else {
    console.log("OOOPS");
  }
});

btnFilter.addEventListener("click", function () {
  regionsContainer.classList.toggle("hide");
  chevron.classList.toggle("rotate");
});

regions.forEach((region) => {
  region.addEventListener("click", function () {
    chevron.classList.remove("rotate");
    regionsContainer.classList.add("hide");
    btnFilter.textContent = this.textContent;

    let val = this.textContent;
    if (this.textContent === "America") val = "Americas";

    const byRegion = countries.filter((c) => c.region === val);
    renderCountry(byRegion);
  });
});

renderCountry(countries);
