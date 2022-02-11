const readline = require('readline-sync');

function main() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const guessedNumber = readline.questionInt('Qual é o número ? (1 a 10) ');

  if (guessedNumber === randomNumber) console.log('Parabéns, número correto!');
  else console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);

  const playAgain = readline.question('Jogar novamente? (y/n) ');
  if (playAgain === 'y') main();
}

main();
