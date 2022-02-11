const readline = require('readline-sync');

const askWeight = () => readline.questionFloat('Qual seu peso (em kg) ? ');
const askHeight = () => readline.questionFloat('Qual sua altura (em cm) ? ');

function main() {
  const weight = askWeight();
  const height = askHeight();
  const imc = weight / (height / 100) ** 2;
  console.log(imc);
  if (imc < 18.5) return console.log('Abaixo do peso (magreza)');
  if (imc < 25) return console.log('Peso normal');
  if (imc < 30) return console.log('Acima do peso (sobrepeso)');
  if (imc < 35) return console.log('Obesidade grau I');
  if (imc < 40) return console.log('Obesidade grau II');
  else console.log('Obesidade graus III e IV');
}

main();
