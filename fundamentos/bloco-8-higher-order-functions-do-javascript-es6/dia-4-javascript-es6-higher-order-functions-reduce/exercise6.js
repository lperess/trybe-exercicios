const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const reduceCallBack = (arrOfObj, name, index) => {
  const avg = grades[index]
    .reduce((accSum, grade) => accSum += grade) / 5;
  arrOfObj.push({ name, average: avg });
  return arrOfObj;
}

function studentAverage() {
  // escreva seu código aqui
  return students.reduce(reduceCallBack, []);
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
