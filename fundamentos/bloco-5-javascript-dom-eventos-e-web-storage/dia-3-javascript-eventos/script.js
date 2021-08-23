function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;
    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysOfMonth() {
  const mes = document.getElementById('days');
  dezDaysList.forEach(day => {
    const dayLi = document.createElement('li');

    if (day === 24 || day === 25 || day === 31) {
      dayLi.classList.add('holiday');
    }
    if (day === 4 || day === 11 || day === 18 || day === 25) {
      dayLi.classList.add('friday');
    }

    dayLi.classList.add('day');
    dayLi.innerText = day;
    mes.appendChild(dayLi);
  })
}
daysOfMonth();

// Exercício 2

function holidayBtn(nomeBotao) {
  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  const btnHoliday = document.createElement('button');
  btnHoliday.id = 'btn-holiday';
  btnContainer.appendChild(btnHoliday);
  btnHoliday.innerText = nomeBotao;
}
holidayBtn('Feriados');

// Exercício 3

