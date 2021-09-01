const assert = require('assert');

const greaterThanTen = array => {
  const answer = [];
  for (let n of array) {
    if (n > 10) {
      answer.push(n);
    }
  }
  return answer;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.deepStrictEqual(greaterThanTen(parameter), result);
