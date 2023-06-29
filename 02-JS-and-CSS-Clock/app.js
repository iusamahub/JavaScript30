const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function date() {
  const date = new Date();

  // second
  const second = date.getSeconds();
  const secondsDegree = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;

  // minute
  const minute = date.getMinutes();
  const minutesDegree = (minute / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

  // hour
  const hour = date.getHours();
  const hoursDegree = (hour / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(date, 1000);
