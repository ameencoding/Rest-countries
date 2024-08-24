"use strict";
const getCountry = function (name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};

const country = getCountry("country");
console.log(country);
