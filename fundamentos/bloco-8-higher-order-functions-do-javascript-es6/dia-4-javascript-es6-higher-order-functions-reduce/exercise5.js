const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const reduceCallBack = (counter, name) => {
  name.split('').forEach(letter => {
    if (letter === 'a' || letter === 'A') {
      counter += 1;
    }
  })
  return counter;
}

function containsA(arrOfNames) {
  // escreva seu código aqui
  return arrOfNames.reduce(reduceCallBack, 0);
}

assert.deepStrictEqual(containsA(names), 20);
