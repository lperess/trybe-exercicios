const getLargestNumber = array => {
  let largestNumber = Number.NEGATIVE_INFINITY;
  for (n of array) {
    if (n > largestNumber) {
      largestNumber = n;
    }
  }
  return largestNumber;
}

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

const assert = require('assert');
assert.strictEqual(getLargestNumber(parameter), result);
