let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 1
console.log(`Bem-vinda, ${info.personagem}`)

// Exercício 2
info.recorrente = 'Sim'
console.log(info)

// Exercício 3
for (let prop in info) {
  console.log(prop)
}

// Exercício 4
for (let prop in info) {
  console.log(info[prop])
}

// Exercício 5
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
}

for (let prop in info) {
  if (prop === 'recorrente') {
    if (info[prop] === 'Sim' && info2[prop] === 'Sim') {
      console.log('Ambos recorrentes')
    }
  }
  else { console.log(`${info[prop]} e ${info2[prop]}`) }
}
