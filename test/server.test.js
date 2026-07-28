const test = require("node:test");
const assert = require("node:assert/strict");

test("GET / responde correctamente", async () => {
  const response = await fetch("http://localhost:8080/");
  const body = await response.text();

  assert.equal(response.status, 200);
  assert.match(body, /Aplicación lista/);
});