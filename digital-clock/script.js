function displayTime() {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Get the weekday
  const options = {weekday: 'long'};
  const getDay = currentTime.toLocaleTimeString('en-us', options).split(' ')[0];

  // These get a "handle" to the clock div and the weekday div in our HTML
  const clockDiv = document.getElementById('clock');
  const weekDayDiv = document.getElementById('weekDay');
  
  // Let's set the AM and PM meridiem and 
  // 12-hour format
  let meridiem = "AM";  // Default is AM
  // Convert from 24 hour to 12 hour format
  // and keep track of the meridiem.
  
  if (hours > 12) {
      hours = hours - 12;
      meridiem = "PM";
  }

  // 0 AM and 0 PM should read as 12
  if (hours === 0) {
      hours = 12;    
  }

  // If the seconds digit is less than ten                    
  if (hours < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    minutes = `0${minutes}`;
  }

  if (seconds < 10) {
    // Add the "0" digit to the front
    // so 9 becomes "09"
    seconds = `0${seconds}`;
  }

  
  // Set the text inside the clock div
  // to the hours, minutes, and seconds of the current time
  clockDiv.innerText = `${hours}:${minutes}:${seconds} ${meridiem}`;
  weekDayDiv.innerText = `${getDay}`;
}

setInterval(displayTime, 1000);
