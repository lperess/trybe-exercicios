const readline = require('readline-sync');

function main() {
  console.log('1. IMC');
  console.log('2. Velocidade');
  console.log('3. Sorteio');
  console.log('4. Fatorial');
  console.log('5. Fibonacci');
  console.log('\n');

  const scriptNumber = readline.questionInt('Qual script deve ser executado? (numero do script) ');

  if (scriptNumber === 1) require('./imc');
  if (scriptNumber === 2) require('./velocidade');
  if (scriptNumber === 3) require('./sorteio');
  if (scriptNumber === 4) require('./fatorial');
  if (scriptNumber === 5) require('./fibonacci');
}

main();
