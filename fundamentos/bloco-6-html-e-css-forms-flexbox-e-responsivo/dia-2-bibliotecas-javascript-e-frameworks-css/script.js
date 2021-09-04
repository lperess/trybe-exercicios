import './node_modules/just-validate/dist/js/just-validate.js';
import './node_modules/pikaday/pikaday.js';

function fillStatesList() {
  const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
  const stateSelect = document.getElementById('state-select');
  for (let estado of estados) {
    const option = document.createElement('option');
    option.innerText = estado;
    option.value = estado;
    stateSelect.appendChild(option);
  };
};

const jv = {
  rules: {
    name: {
      required: true,
      maxLength: 40,
      minLength: 3,
    },
    email: {
      required: true,
      email: true,
      maxLength: 50
    },
    cpf: {
      required: true,
      maxLength: 11
    },
    address: {
      required: true,
      maxLength: 200
    },
    city: {
      required: true,
      maxLength: 28
    },
    state: {
      required: true,
    },
    radio: {
      required: true,
    },
    text: {
      required: true,
      maxLength: 1000
    },
    position: {
      required: true,
      maxLength: 40
    },
    description: {
      required: true,
      maxLength: 500
    },
    date: {
      required: true,
    }
  },
  messages: {
    name: {
      required: 'Digite algum nome',
      minLength: 'O nome deve ter no mínimo 3 caracteres',
      maxLength: 'O nome deve ter no máximo 40 caracteres'
    },
    email: 'O email tá errado'
  },
  submitHandler: function (form, values) {
    console.log(form, values);
  }
};

const picker = new Pikaday({
  field: document.getElementById('data-inicio-input'),
  format: 'DD/MM/YYYY',
});

window.onload = function initPage() {
  fillStatesList();
  new window.JustValidate('.js-form', jv);
};
