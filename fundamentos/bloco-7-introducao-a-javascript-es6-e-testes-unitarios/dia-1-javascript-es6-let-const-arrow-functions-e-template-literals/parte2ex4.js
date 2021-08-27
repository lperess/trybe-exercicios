const arrayEscopoGlobal = ['JavaScript', 'HTML semântico', 'CSS', 'Media query', 'Comunicação'];

function insertName(name) {
  const stringQlqr = 'Tryber x aqui!';
  const string = stringQlqr.replace('x', name);
  return string;
}

console.log(addSkills(insertName('Lucas')));

function addSkills(string) {
  const skills = arrayEscopoGlobal.join(', ');
  const answer = `${string}
Minhas principais habilidades são: ${skills}.

#goTryber`;

  return answer;
}
