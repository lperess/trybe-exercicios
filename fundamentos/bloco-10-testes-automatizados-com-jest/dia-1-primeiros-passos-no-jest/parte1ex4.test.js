function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {

  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    const actual = myFizzBuzz(90);
    const expected = 'fizzbuzz';
    expect(actual).toEqual(expected);
  });

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    const actual = myFizzBuzz(33);
    const expected = 'fizz';
    expect(actual).toEqual(expected);
  });

  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    const actual = myFizzBuzz(50);
    const expected = 'buzz';
    expect(actual).toEqual(expected);
  });

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    const actual = myFizzBuzz(79);
    const expected = 79;
    expect(actual).toBe(expected);
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    const actual = myFizzBuzz('Lucas');
    const expected = false;
    expect(actual).toBe(expected);
  });
});
