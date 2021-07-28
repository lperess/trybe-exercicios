// Exercício 1

let a = 5
let b = 2

let soma = a + b
console.log('Soma = ' + soma)

let subtracao = a - b
console.log('Subtração = ' + subtracao)

let multiplicacao = a * b
console.log('Multiplicação = ' + multiplicacao)

let divisao = a / b
console.log('Divisão = ' + divisao)

let modulo = a % b
console.log('Resto da divisão = ' + modulo)

// Exercício 2

let n1 = 9000
let n2 = 8000

if (n1 > n2) {
  console.log('Maior = ' + n1)
}
else if (n2 > n1) {
  console.log('Maior = ' + n2)
}
else {console.log('São iguais')}

// Exercício 3, mais complexo do que precisava (considerando se são iguais), mas foi para treinar a lógica

let n3 = 4
let n4 = 5
let n5 = 6

if (n3 > n4) {
  maior = n3
}
else if (n3 < n4) {
  maior = n4
}
else {maior = 'iguais'}

if (maior === 'iguais' && n3 === n5) {
  console.log('São todos iguais')
}
else if (maior === 'iguais' && n3 < n5) {
  console.log('Maior = ' + n5)
}
else if (maior === 'iguais' && n3 > n5) {
  console.log('Maior = ' + n3)
}
else if (maior < n5) {
  console.log('Maior = ' + n5)
}
else if (maior > n5) {
  console.log('Maior = ' + maior)
}
else if (maior === n5) {
  console.log('Maior = ' + n5)
}
else {console.log('erro')}

// Exercício 4

let n6 = 5

if (n6 < 0) {
  console.log('negative')
}
else if (n6 > 0) {
  console.log('positive')
}
else {console.log('zero')}

// Exercício 5

let a1 = 50
let a2 = 60
let a3 = 70

if (a1 > 0 && a2 > 0 && a3 > 0) {
  if (a1 + a2 + a3 === 180) {
    console.log (true)
  }
  else {console.log (false)}
}
else {console.log('Insira três ângulos válidos (positivos)')}
