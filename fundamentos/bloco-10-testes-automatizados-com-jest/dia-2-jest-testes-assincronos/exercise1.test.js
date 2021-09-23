// src

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


// test

const str = 'cuidado com os falso-positivos em testes assíncronos';

test('Verifica a chamada do callback de uma função que transforma as letras de uma palavra ou frase em letras maiúsculas', (done) => {

  uppercase('cuidado com os falso-positivos em testes assíncronos', (result) => {
    try {
      expect(result).toBe('CUIDADO COM OS FALSO-POSITIVOS EM TESTES ASSÍNCRONOS');
      done();
    } catch (error) {
      done(error);
    }
  })
});
