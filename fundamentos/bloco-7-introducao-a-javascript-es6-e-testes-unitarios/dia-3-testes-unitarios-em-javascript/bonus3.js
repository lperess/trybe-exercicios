const assert = require('assert');
// escreva a função removeMiddle aqui
const removeMiddle = arr => {
  const index = (arr.length-1)/2;
  const removed = arr.splice(index,1);
  return removed;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepStrictEqual(output, expectedOutput);
assert.deepStrictEqual(words, expectedWords);
