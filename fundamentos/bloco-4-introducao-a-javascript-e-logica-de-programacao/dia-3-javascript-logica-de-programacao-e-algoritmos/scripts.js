
// Exercício 1
// let n = 5

// if (n <= 1) {
//   console.log('A variável \'n\' precisa ser maior que 1')
// }
// else {
//   for (let i = 1; i <= n; i += 1) {
//     let linha = ''
//     for (let j = 1; j <= n; j += 1) {
//       linha = linha + '*'
//     }
//     console.log(linha)
//   }
// }

// Exercício 2

// let n = 5

// if (n <= 1) {
//   console.log('A variável \'n\' precisa ser maior que 1')
// }
// else {
//   for (let i = 1; i <= n; i += 1) {
//     let linha = ''
//     for (let j = 1; j <= i; j += 1) {
//       linha = linha + '*'
//     }
//     console.log(linha)
//   }
// }

// Exercício 3

// let n = 15
// let ne = n - 2
// let na = 1

// if (n <= 1) {
//   console.log('A variável \'n\' precisa ser maior que 1')
// }
// else {

//   for (let l = 1; l <= n; l += 1) {
//     let linha = ''
//     for (let space = ne; space >= 0; space -= 1) {
//       linha += ' '
//     }
//     for (let a = 1; a <= na; a += 1) {
//       linha += '*'
//     }
//     console.log(linha)
//     ne -= 1
//     na += 1
//   }
// }

// Exercício 4

let n = 5
let ne = n/2-0.5
let ee = 0
let nn = 1

if (n <= 1 || n % 2 ===0) {
  console.log('A variável \'n\' precisa ser maior que 1 e ímpar')
}
else {
  for (let l = 1; l < n/2+1; l += 1) {
    let linha = ''
    for (let e = ne; e > ee; e -= 1) {
      linha += ' '
    }
    for (let a = 1; a <= nn; a += 1) {
      linha += '*'
    }
    console.log(linha)
    ee += 1
    nn += 2
  }
}
