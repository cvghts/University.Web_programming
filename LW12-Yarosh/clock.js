const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const spanDay = document.querySelector('.day-of-week');
const spanMonth = document.querySelector('.month');
const spanMonthDay = document.querySelector('.month-day');
const spanYear = document.querySelector('.year');

const pWish = document.querySelector('.wish');
const pWishAuthor = document.querySelector('.wish-author');

function getMyDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const dayOfWeek = now.getDay();
    const dayOfMonth = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();
  
    const dayOfWeekWord = getDayOfWeekWord(dayOfWeek);
  
    const monthWord = getMonthWord(month);
  
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
    spanDay.textContent = `${dayOfWeekWord}`;
    spanMonth.textContent = `${monthWord}`;
    spanMonthDay.textContent = `${dayOfMonth}`;
    spanYear.textContent = `${year}`;
}
  
function getDayOfWeekWord(dayOfWeek) {
    const daysOfWeekWords = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeekWords[dayOfWeek];
}

function getMonthWord(month) {
    const monthWords = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthWords[month];
}

setInterval(getMyDate, 1000);
  