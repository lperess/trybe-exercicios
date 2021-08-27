// Exercício 1

const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);

// Exercício 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2, 11];

const sort = array => array.sort((a, b) => a - b);

console.log(`Os números ${sort(oddsAndEvens)} se encontram ordenados de forma crescente!`);
