function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {

  it('Teste se o retorno de sum(4, 5) é 9', () => {
    const actual = sum(4, 5);
    const expected = 9;
    expect(actual).toBe(expected);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    const actual = sum(0, 0);
    const expected = 0;
    expect(actual).toBe(expected);
  });

  it('Teste se a função sum lança um erro quando os parâmetros são (4, "5")', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});
