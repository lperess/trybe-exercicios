// Exercício 1

function palindromo(string) {
  if (string.split(' ').join('').split('').reverse().join('') === string.split(' ').join('')) {
    return true
  }
  return false
}

console.log(palindromo('desenvolvimento'))

// Exercício 2

function biggestNumberIndex(arrayOfNumbers) {
  let maior = Number.NEGATIVE_INFINITY;
  for (let num of arrayOfNumbers) {
    if (num > maior) {
      maior = num
    }
  }
  return arrayOfNumbers.indexOf(maior)
}

console.log(biggestNumberIndex([2, 3, 6, 7, 10, 1]))

// Exercício 3

function smallestNumberIndex(arrayOfNumbers) {
  let menor = Number.MAX_VALUE;
  for (let num of arrayOfNumbers) {
    if (num < menor) {
      menor = num
    }
  }
  return arrayOfNumbers.indexOf(menor)
}

console.log(smallestNumberIndex([2, 4, 6, 7, 10, 0, -3]))

// Exercício 4

function largestName(arrayOfNames) {
  let maior = []
  for (let name of arrayOfNames) {
    if (name.length > maior.length) {
      maior = name
    }
  }
  return maior
}

console.log(largestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// Exercício 5

function moreRepeated(arrayOfNumbers) {
  let counting = {}
  let vezesMaisRepetido = 0
  let maisRepetido
  for (let num of arrayOfNumbers) {
    counting[num] = (counting[num] || 0) + 1
  }
  for (let i in counting) {
    if (counting[i] > vezesMaisRepetido) {
      vezesMaisRepetido = counting[i]
      maisRepetido = i
    }
  }
  return maisRepetido
}

console.log(moreRepeated([2, 3, 2, 5, 8, 2, 3]))

// Exercício 6

function somaAteN(n) {
  let total = 0
  for (let i = 1; i <= n; i += 1) {
    total += i
  }
  return total
}

console.log(somaAteN(5))

// Exercício 7

function endsWith(word, ending) {
  let answer
  let frase = word.split('').reverse().join('')
  let fim = ending.split('').reverse().join('')
  for (let c = 0; c < fim.length; c += 1) {
    if (fim[c] !== frase[c]) {
      answer = false
      break
    }
    else { answer = true }
  }
  return answer
}

console.log(endsWith('joaofernando', 'fernan'))