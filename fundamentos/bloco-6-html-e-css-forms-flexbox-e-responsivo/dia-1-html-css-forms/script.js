function fillStatesList() {
  const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  const stateSelect = document.getElementById('state-select');

  for (estado of estados) {
    const option = document.createElement('option');
    option.innerText = estado;
    option.value = estado;
    stateSelect.appendChild(option);
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const resultAnterior = document.querySelectorAll('.result');
  resultAnterior.forEach((item) => {
    item.remove();
  })

  const titleResult = document.getElementById('result-title');
  titleResult.innerText = '';
  let isValid = true;

  const resultList = document.getElementById('result');
  const dados = [];

  const name = document.getElementById('name-input').value;
  if (name === '' || name.length > 40) {
    const erro = document.createElement('li');
    erro.innerText = 'Nome vazio ou maior que 40 caracteres';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(name) }

  const email = document.getElementById('email-input').value;
  if (email === '' || email.length > 50) {
    const erro = document.createElement('li');
    erro.innerText = 'E-mail vazio ou maior que 50 caracteres';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(email) }

  const cpf = document.getElementById('cpf-input').value;
  if (cpf === '' || cpf.length !== 11) {
    const erro = document.createElement('li');
    erro.innerText = 'CPF vazio ou com número de dígitos diferente de 11';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(cpf) }

  const address = document.getElementById('address-input').value;
  if (address === '' || address.length > 200) {
    const erro = document.createElement('li');
    erro.innerText = 'Endereço vazio ou maior que 200 caracteres';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(address) }

  const city = document.getElementById('city-input').value;
  if (city === '' || city.length > 28) {
    const erro = document.createElement('li');
    erro.innerText = 'Cidade vazio ou maior que 28 caracteres';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(city) }

  const state = document.getElementById('state-select').value;
  if (state === '') {
    const erro = document.createElement('li');
    erro.innerText = 'Estado não selecionado';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(state) }

  const tipoMoradia = document.querySelector('input[name="tipo-residência"]:checked').value;
  dados.push(tipoMoradia);

  const curriculo = document.getElementById('curriculum-input').value;
  if (curriculo === '' || curriculo.length > 1000) {
    const erro = document.createElement('li');
    erro.innerText = 'Resumo do currículo vazio ou maior que 1000 caracteres';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(curriculo) }

  const role = document.getElementById('role-input').value;
  if (role === '' || role.length > 40) {
    const erro = document.createElement('li');
    erro.innerText = 'Cargo vazio ou maior que 40 caracteres';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(role) }

  const roleDescription = document.getElementById('role-description-input').value;
  if (roleDescription === '' || roleDescription.length > 500) {
    const erro = document.createElement('li');
    erro.innerText = 'Descrição do cargo vazio ou maior que 500 caracteres';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(roleDescription) }

  const dataInicio = document.getElementById('data-inicio-input').value;
  if (!(dataInicio.match(/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/([12][09][0-9][0-9])/))) {
    const erro = document.createElement('li');
    erro.innerText = 'Data de início deve estar no formato dd/mm/aaaa. Exemplo: 10/10/2010';
    erro.className = 'result';
    resultList.appendChild(erro);
    isValid = false;
  } else { dados.push(dataInicio) }

  if (!isValid) {
    titleResult.innerText = 'Erros no preenchimento:';
  }

  if (isValid) {
    titleResult.innerText = 'Dados inseridos:';
    dados.forEach((item) => {
      const dado = document.createElement('li');
      dado.innerText = item;
      dado.className = 'result';
      resultList.appendChild(dado);
    })
  }
}

function clear() {

  const resultAnterior = document.querySelectorAll('.result');
  resultAnterior.forEach((item) => {
    item.remove();
  })

  const titleResult = document.getElementById('result-title');
  titleResult.innerText = '';

  document.getElementById('name-input').value = ''
  document.getElementById('email-input').value = ''
  document.getElementById('cpf-input').value = ''
  document.getElementById('address-input').value = ''
  document.getElementById('city-input').value = ''
  document.getElementById('defaultOption').selected = true;
  document.getElementById('casa-input').checked = true;
  document.getElementById('curriculum-input').value = ''
  document.getElementById('role-input').value = ''
  document.getElementById('role-description-input').value = ''
  document.getElementById('data-inicio-input').value = ''
}

window.onload = function initPage() {
  fillStatesList();

  document.getElementById('button-submit').addEventListener('click', handleSubmit);
  document.getElementById('clear-btn').addEventListener('click', clear);
}
