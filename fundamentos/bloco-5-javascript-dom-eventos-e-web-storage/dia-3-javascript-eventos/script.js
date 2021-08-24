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

function holidayBGColor() {
  const holidayBtn = document.getElementById('btn-holiday');
  const holidays = document.querySelectorAll('.holiday');

  holidayBtn.addEventListener('click', function () {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'white') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      }
      else {
        holidays[index].style.backgroundColor = 'white';
      }
    }
  })
}
holidayBGColor();

// Exercício 4

function fridayBtn(nomeBotao) {
  const btnContainer = document.getElementsByClassName('buttons-container')[0];
  const fridayBtn = document.createElement('button');
  fridayBtn.id = 'btn-friday';
  fridayBtn.innerText = nomeBotao;
  btnContainer.appendChild(fridayBtn);
}
fridayBtn('Sexta-feira');

// Exercício 5

function fridayText() {
  const fridayBtn = document.getElementById('btn-friday');
  const fridays = document.querySelectorAll('.friday');

  fridayBtn.addEventListener('click', function () {

    for (let index = 0; index < fridays.length; index += 1) {

      const dayBefore = fridays[index].previousElementSibling.innerText;

      if (fridays[index].innerText !== 'Sextooou') {
        fridays[index].innerText = 'Sextooou'
      }
      else {
        fridays[index].innerText = parseInt(dayBefore) + 1;
      }
    }
  })
}
fridayText();

// Exercício 6

function mouseOver() {
  const days = document.querySelectorAll('.day');

  days.forEach(day => {
    day.addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  })
}
mouseOver();

function mouseOut() {
  const days = document.querySelectorAll('.day');

  days.forEach(day => {
    day.addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  })
}
mouseOut();

// Exercício 7

function newTask(tarefa) {
  const myTasks = document.getElementsByClassName('my-tasks')[0];
  const task = document.createElement('span');
  task.innerHTML = `${tarefa}<br>`;
  myTasks.appendChild(task);
}
newTask('cozinhar')
newTask('arrumar casa')
newTask('lavar roupa')

