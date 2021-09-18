const promise = new Promise((resolve, reject) => {

  const myArray = Array.from({ length: 10 },
    () => Math.floor(Math.random() * 50) + 1);

  const sum = myArray.map(number => number ** 2)
    .reduce((sum, number) => sum + number);

  sum < 8000 ? resolve(sum) : reject();
});

promise
  .then((sum) => [2, 3, 5, 10].map(number => sum / number))
  .then(array => array.reduce((sum, number) => sum + number))
  .catch(() => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
