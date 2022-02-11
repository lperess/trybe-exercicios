const readline = require('readline-sync');

const askN = () => readline.questionInt('Quantos valores da sequência de Fibonacci você quer? ');

function fibonacci() {
  const N = Math.abs(askN());

  console.log(`Os ${N} primeiros números da sequência de Fibonacci são:`);

  let prevNumber = 0;
  let nextNumber = 1;

  console.log(1);

  for (let i = 1; i < N; i += 1) {
    const actual = prevNumber + nextNumber;
    console.log(actual);
    prevNumber = nextNumber;
    nextNumber = actual;
  }
};

fibonacci();
