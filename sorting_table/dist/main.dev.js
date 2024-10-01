"use strict";

var countries = [{
  id: 11,
  country: "BFinland",
  capital: "ATallinn"
}, {
  id: 6,
  country: "AEstonia",
  capital: "CHelsinki"
}, {
  id: 3,
  country: "CSweden",
  capital: "BStockholm"
}];

function createTable() {
  var tableBody = document.querySelector('tbody');
  countries.forEach(function (country) {
    var row = document.createElement('tr');
    var idCell = document.createElement('td');
    var countryCell = document.createElement('td');
    var capitalCell = document.createElement('td');
    idCell.textContent = country.id;
    countryCell.textContent = country.country;
    capitalCell.textContent = country.capital;
    row.appendChild(idCell);
    row.appendChild(countryCell);
    row.appendChild(capitalCell);
    tableBody.appendChild(row);
  });
}

createTable();

function sortTableBy(prop) {
  if (typeof countries[0][prop] === 'string') {
    countries.sort(function (a, b) {
      var aln = a[prop].toLowerCase();
      var bln = b[prop].toLowerCase();

      if (aln < bln) {
        return -1;
      }

      if (aln > bln) {
        return 1;
      }

      return 0;
    });
  } else {
    countries.sort(function (a, b) {
      return a[prop] - b[prop];
    });
  }

  document.querySelector('tbody').innerHTML = '';
  createTable();
}