// Exercício 1

const newEmployees = () => {
  const employees = {
    id1: idGenerator('Pedro Guerra'), // Nome: Pedro Guerra
    id2: idGenerator('Luiza Drumond'), // Nome: Luiza Drumond
    id3: idGenerator('Carla Paiva'), // Nome: Carla Paiva
  };
  return employees;
};

const idGenerator = nomeCompleto => {
  const email = `${nomeCompleto.toLowerCase().replace(' ', '_')}@trybe.com`;
  return { nomeCompleto, email };
};

console.log(newEmployees());

// Exercício 2

const didWin = (betNumber, match) => {
  const drawn = Math.floor(Math.random() * 5) + 1;
  const win = match(betNumber, drawn);
  console.log(betNumber, drawn)
  if (win) { return 'Parabéns você ganhou!' };
  return 'Tente novamente';
};

const didMatch = (a, b) => a === b;
const bet = 3;
console.log(didWin(bet, didMatch));

// Exercício 3

const grade = (gabarito, prova, questCheck) => {
  let result = 0;
  for (let quest in prova) {
    result += questCheck(gabarito[quest], prova[quest]);
  };
  return result;
};

const corrigeProva = (certo, resposta) => {
  if (resposta === 'N.A') {
    return 0
  };
  if (resposta === certo) {
    return 1
  };
  return -0.5;
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(grade(RIGHT_ANSWERS, STUDENT_ANSWERS, corrigeProva));
