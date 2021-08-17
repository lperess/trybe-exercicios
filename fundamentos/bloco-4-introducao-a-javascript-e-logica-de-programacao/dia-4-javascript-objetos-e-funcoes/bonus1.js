const legenda = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function converter(decimal) {
  const size = decimal.length;
  let total = legenda[decimal[size - 1]];
  let atual = legenda[decimal[size - 1]];
  for (let i = 2; i <= size; i += 1) {
    const prox = legenda[decimal[size - i]];
    if (atual <= prox) {
      total += prox;
    } else {
      total -= prox;
    }
    atual = prox;
  }
  return total;
}
console.log(converter('CMLXXXIII'));
