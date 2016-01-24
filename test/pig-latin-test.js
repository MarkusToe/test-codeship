var test = require('tape');
var translate = require('../src/pig-latin.js');

test('Translate the provided string to pig latin.', function (assert) {
  var expected = "aliforniacay";
  var actual = translate("california");

  assert.equal(actual, expected,
    'Translate the provided string to pig latin.');
  assert.end();
});

test('Translate the provided string to pig latin.', function (assert) {
  var expected = "algorithmway";
  var actual = translate("algorithm");

  assert.equal(actual, expected,
    'Translate the provided string to pig latin.');
  assert.end();
});

test('Translate the provided string to pig latin.', function (assert) {
  var expected = "oveglay";
  var actual = translate("glove");

  assert.equal(actual, expected,
    'Translate the provided string to pig latin.');
  assert.end();
});
