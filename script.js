// Часы
function setClock() {
  const hourHand = document.querySelector('[data-hour-hand]')
  const minuteHand = document.querySelector('[data-minute-hand]')
  const secondHand = document.querySelector('[data-second-hand]')
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}


// Электронные часы
function setTime(){
  const time = document.querySelector('.time');

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayName = date.getDay();
  let dayNum = date.getDate();
  let mounth = date.getMonth();
  
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
  mounths = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

  time.textContent = hours + ":" + minutes + ":" + seconds + " " + days[dayName] + ", " + dayNum + " " + mounths[mounth];
}

// Таймер
let isPaused = false;
let count = 0;
let currentTimer = undefined;

setTimerBtn = document.querySelector('#submit');
pauseBtn = document.querySelector('#pause');
clearBtn = document.querySelector('#clear');

counterText = document.querySelector('#numb');
counterLabel = document.querySelector('#time');

setTimerBtn.addEventListener('click', ()=>{
  if (currentTimer !== undefined){
    clearInterval(currentTimer);
  }
  count = +counterText.value;
  setTimer();
})

pauseBtn.addEventListener('click', () => { pause(); })
clearBtn.addEventListener('click', () => { unsetTimer(); })

function setTimer () { 
  currentTimer = setInterval(()=>{
    if(!isPaused){
      if (count <= 0){
        unsetTimer();
        alarm();
      }
      counterLabel.textContent = count;
      count--;
    }
  },1000)
}

function unsetTimer(){
  clearInterval(currentTimer);
}

function pause(){
  isPaused = !isPaused;
}

function alarm(){
  const audio = new Audio();
  audio.src = 'alarm.wav';
  audio.play();
}

setInterval(()=>{
  setTime()
  setClock()
});