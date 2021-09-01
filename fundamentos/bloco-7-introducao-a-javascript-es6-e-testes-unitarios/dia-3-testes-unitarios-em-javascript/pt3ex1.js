const assert = require('assert');

const greetPeople = people => {
  const answer = [];
  for (const person of people) {
    let greeting = 'Hello ';
    greeting += person;
    answer.push(greeting);
  }
  return answer;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
