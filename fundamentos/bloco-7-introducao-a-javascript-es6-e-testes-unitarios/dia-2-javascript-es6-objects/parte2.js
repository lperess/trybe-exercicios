const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1
const addShift = (obj, key, value) => {
  obj[key] = value;
};
const key = 'turno';
const value = 'manhã';
addShift(lesson2, key, value);
console.table(lesson2);

// Exercício 2
const arrayOfKeys = obj => Object.keys(obj);
console.log(arrayOfKeys(lesson2))

// Exercício 3
const objLength = obj => Object.keys(obj).length;
console.log(objLength(lesson3));

// Exercício 4
const arrayOfValues = obj => Object.values(obj);
console.log(arrayOfValues(lesson1))
