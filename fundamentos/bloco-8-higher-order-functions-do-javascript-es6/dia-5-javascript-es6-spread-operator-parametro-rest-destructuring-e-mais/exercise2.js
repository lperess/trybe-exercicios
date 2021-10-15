// escreva sum abaixo

function sum(...numbers) {
  return numbers.reduce((acc, actual) => acc + actual);
}

console.log(sum(15, 20, 50, 65, 10));
