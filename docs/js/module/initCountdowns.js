// countdown.js
export function initCountdowns() {
  const counterBoxes = document.querySelectorAll('.counter-box');

  counterBoxes.forEach(box => {
    updateCountdown(box); // Первоначальное обновление
    setInterval(() => updateCountdown(box), 60000); // Обновление каждую минуту
  });
}

function updateCountdown(box) {
  const dateString = box.querySelector('.data-hidden').textContent.trim();
  const targetDate = parseDateString(dateString);
  const now = new Date();
  
  if (targetDate <= now) {
    // Если дата уже прошла, устанавливаем нули
    setTimeValues(box, 0, 0, 0);
    return;
  }
  
  const diff = targetDate - now;
  const { days, hours, minutes } = calculateTimeRemaining(diff);
  
  setTimeValues(box, days, hours, minutes);
}

function parseDateString(dateString) {
  const [day, month, year] = dateString.split('.').map(Number);
  return new Date(year, month - 1, day);
}

function calculateTimeRemaining(diffInMs) {
  const totalMinutes = Math.floor(diffInMs / (1000 * 60));
  const totalHours = Math.floor(totalMinutes / 60);
  
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  
  return { days, hours, minutes };
}

function setTimeValues(box, days, hours, minutes) {
  const daysElement = box.querySelector('.days i');
  const hoursElement = box.querySelector('.hours i');
  const minutesElement = box.querySelector('.minutes i');
  
  if (daysElement) daysElement.textContent = days;
  if (hoursElement) hoursElement.textContent = hours;
  if (minutesElement) minutesElement.textContent = minutes;
}