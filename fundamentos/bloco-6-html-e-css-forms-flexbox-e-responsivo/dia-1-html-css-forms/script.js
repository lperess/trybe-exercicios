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

  
}

window.onload = function initPage() {
  fillStatesList();

  const submitButton = document.getElementById('button-submit').addEventListener('click', handleSubmit)
}
