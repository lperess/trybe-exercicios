const readline = require('readline-sync');

const askN = () => readline.questionInt('De qual número (inteiro) você quer o fatorial? ');

function fatorial() {
  const N = Math.abs(askN());

  let answer = 1;

  for (let i = 2; i <= N; i += 1) {
    answer *= i;
  }

  console.log(`O fatorial de ${N} é: ${answer}`);
};

fatorial();
