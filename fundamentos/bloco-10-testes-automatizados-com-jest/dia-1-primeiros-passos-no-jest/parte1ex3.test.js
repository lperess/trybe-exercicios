function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

describe('A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array', () => {

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const actual = myRemoveWithoutCopy([1, 2, 3, 4], 3);
    const expected = [1, 2, 4];
    expect(actual).toEqual(expected);
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const actual = myRemoveWithoutCopy([1, 2, 3, 4], 3);
    const expected = [1, 2, 3, 4];
    expect(actual).not.toEqual(expected);
  });

  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(arr, 3);
    expect(arr).not.toEqual([1, 2, 3, 4]);
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const actual = myRemoveWithoutCopy([1, 2, 3, 4], 5);
    const expected = [1, 2, 3, 4];
    expect(actual).toEqual(expected);
  });
});
