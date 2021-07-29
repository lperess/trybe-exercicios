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
else { console.log('São iguais') }

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
else { maior = 'iguais' }

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
else { console.log('erro') }

// Exercício 4

let n6 = 5

if (n6 < 0) {
  console.log('negative')
}
else if (n6 > 0) {
  console.log('positive')
}
else { console.log('zero') }

// Exercício 5

let a1 = 50
let a2 = 60
let a3 = 70

if (a1 > 0 && a2 > 0 && a3 > 0) {
  if (a1 + a2 + a3 === 180) {
    console.log(true)
  }
  else { console.log(false) }
}
else { console.log('Insira três ângulos válidos (positivos)') }

// Exercício 6

let peca = 'Rei'

switch (peca.toLowerCase()) {
  case 'peão':
    console.log('Anda uma casa para frente e captura uma casa nas diagonais à frente')
    break;
  case 'cavalo':
    console.log('Movimento de L, duas casas na vertical ou horizontal e depois uma casa no outro sentido')
    break;
  case 'bispo':
    console.log('Anda quantas casas quiser nas diagonais')
    break;
  case 'torre':
    console.log('Anda quantas casas quiser na horizontal ou vertical')
    break;
  case 'dama':
    console.log('Anda quantas casas quiser em qualquer direção')
    break;
  case 'rei':
    console.log('Anda uma casa em qualquer direção')
    break;
  default:
    console.log('Insira: peão, cavalo, bispo, torre, dama ou rei')
}

// Exercício 7

let notaPercent = 95

if (notaPercent >= 0 && notaPercent <= 100) {
  if (notaPercent >= 90) {
    console.log('A')
  }
  else if (notaPercent >= 80) {
    console.log('B')
  }
  else if (notaPercent >= 70) {
    console.log('C')
  }
  else if (notaPercent >= 60) {
    console.log('D')
  }
  else if (notaPercent >= 50) {
    console.log('E')
  }
  else if (notaPercent < 50) {
    console.log('F')
  }
}
else {console.log('Insira uma nota de 0 a 100')}

// Exercício 8

let n7 = 3
let n8 = 5
let n9 = 2

if (n7 % 2 === 0 || n8 % 2 === 0 || n9 % 2 === 0) {
  console.log(true)
}
else {console.log(false)}

// Exercício 9

n10 = 2
n11 = 4
n12 = 11

if (n10 % 2 !== 0 || n11 % 2 !== 0 || n12 % 2 !== 0) {
  console.log(true)
}
else {console.log(false)}

// Exercício 10

let custo = 50
let valorVenda = 95

if (custo >= 0 && valorVenda >= 0) {
  lucroTotal = 1000 * (valorVenda - custo * 1.2)
  console.log(lucroTotal)
}
else {console.log('Insira valores positivos')}

// Exercício 11

let salarioBruto = 3000

if (salarioBruto <= 0) {
  console.log('Insira um valor positivo')
}
else if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto * 0.92
}
else if (salarioBruto <= 2594.92) {
  salarioBase = salarioBruto * 0.91
}
else if (salarioBruto <= 5189.82) {
  salarioBase = salarioBruto * 0.89
}
else if (salarioBruto > 5189.82) {
  salarioBase = salarioBruto - 570.88
}

if (salarioBase <= 1903.98) {
  valorIR = 0
}
else if (salarioBase <= 2826.65) {
  valorIR = 0.075 * salarioBase - 142.8
}
else if (salarioBase <= 3751.05) {
  valorIR = 0.15 * salarioBase - 354.8
}
else if (salarioBase <= 4664.68) {
  valorIR = 0.225 * salarioBase - 636.13
}
else if (salarioBase > 4664.68) {
  valorIR = 0.275 * salarioBase - 869.36
}

salarioLiquido = salarioBase - valorIR
console.log(salarioLiquido)
