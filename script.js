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

setClock()

function setTime(){
  const time = document.querySelector('#time');

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
setInterval(()=>{
  setTime()
  setClock()
});