const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let response;

Given('el usuario está en la aplicación', function () {
  // Preparación si fuera necesario
});

When('solicita el catálogo', async function () {
  const fetch = require('node-fetch');
  response = await fetch('http://localhost:3000/catalog');
  this.catalog = await response.json();
});

Then('recibe una lista de videojuegos disponibles', function () {
  assert.ok(Array.isArray(this.catalog));
  assert.ok(this.catalog.length > 0);
});
