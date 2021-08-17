// Exercício 2

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayDeArrays(vector) {
  const answer = [];
  for (let index = 0; index < vector.length; index += 1) {
    const subVector = vector[index];
    for (let i = 0; i < subVector.length; i += 1) {
      const number = subVector[i];
      if (number % 2 === 0) {
        answer.push(number);
      }
    }
  }
  return answer;
}
console.log(arrayDeArrays(vector));

// Exercício 3

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

for (let index = 0; index < basket.length; index += 1) {
  const fruta = basket[index];
  if (!result[fruta]) {
    result[fruta] = 0
  };
  result[fruta] += 1;
}

const resumo = [];

for (fruta in result) {
  let contagem = `${result[fruta]} ${fruta}`;
  if (result[fruta] > 1) {
    contagem += 's';
  }
  resumo.push(contagem);
}
console.log(`Sua cesta possui: ${resumo.join(', ')}.`);
