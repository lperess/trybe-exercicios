// src

const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = id => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with id:${id} not found.`));
});

const getUserName = userId => findUserById(userId).then(user => user.name);


// test

describe('Testando caso de usuário real', () => {

  it('retorne o nome do usuário com id: 1 (Mark)', () => {
    return getUserName(1).then(name => {
      expect(name).toBe('Mark')
    });
  });

  it('retorne o nome do usuário com id: 2 (Paul)', () => {
    return getUserName(2).then(name => {
      expect(name).toBe('Paul')
    });
  });

});

describe('Testando caso de usuário inexistente (id:3)', () => {

  it('retorne um erro', () => {
    expect.assertions(1);

    return getUserName(3).catch(error => {
      expect(error).toBeTruthy();
    })
  });

  it(`retorne um erro contendo message: 'User with id:3 not found.'`, () => {
    expect.assertions(1);

    return getUserName(3).catch(error => {
      expect(error).toEqual(new Error(`User with id:3 not found.`));
    })
  });

});
