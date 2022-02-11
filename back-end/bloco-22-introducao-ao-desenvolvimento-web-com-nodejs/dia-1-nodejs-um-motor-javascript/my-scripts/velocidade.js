const readline = require('readline-sync');

const askDistance = () => readline.questionInt('Qual a distância percorrida (em metros) ? ');
const askTime = () => readline.questionInt('Qual o tempo decorrido (em segundos) ? ');

function main() {
  const distance = askDistance();
  const time = askTime();
  console.log(`Velocidade média: ${distance / time * 3.6}km/h`);
}

main();
