// Import the individual functions from their respective files
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

// Export an object containing all the functions
module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  countLetters,
  countOnly,
  eqObjects,
  map,
  takeUntil,
  without,
  findKey,
  findKeyByValue,
  letterPositions,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual
};

