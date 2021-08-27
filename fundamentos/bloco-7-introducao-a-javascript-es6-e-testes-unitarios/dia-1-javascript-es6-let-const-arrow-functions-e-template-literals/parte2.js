// Exercício 1

const fatorial = n => {
  if (n === 0) { return 1 }
  let answer = n;
  for (let i = 2; i < n; i += 1) {
    answer *= i;
  }
  return answer;
}
console.log(fatorial(7));

// Exercício 1 - Recursiva

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(7));

// Exercício 2

const maiorPalavra = string => {
  let words = string.split(' ');
  let maior;
  let sizeMaior = 0;
  for (word of words) {
    if (word.length > sizeMaior) {
      sizeMaior = word.length;
      maior = word;
    }
  }
  return maior;
}
console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));

// Exercício 2 - sort

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));
