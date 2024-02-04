let countDownTimerBtn = document.getElementById('start-timer-btn');
let minutesInput = document.getElementById('minutes-input');
let countdownInterval;

minutesInput.addEventListener('keyup', (event)=>{
  if (event.keyCode === 13){
    // enter key has been pressed
    countDownTimerBtn.click();
  }
});


// on click of the startTimer btn we start the countdown
countDownTimerBtn.addEventListener('click', ()=>{
  clearInterval(countdownInterval);
  startCountDown();
});


// function to start the countdown
function startCountDown(){
  let minutesInput = document.getElementById('minutes-input').value;
  let hoursDiv = document.getElementById('countdown-hours');
  let minutesDiv = document.getElementById('countdown-minutes');
  let secondsDiv = document.getElementById('countdown-seconds');
  const audio = new Audio('alarm.wav')

  if (minutesInput.trim().length === 0){
    minutesInput = 1;
  }

  let time;
  let hours;
  let minutes;
  let seconds;

  if (minutesInput <= 60){
    // we have both minutes and seconds, hour part is 00:minutes:seconds
    hours = 0;
    minutes = minutesInput - 1;
    seconds = 59;
    secondsDiv.innerHTML = seconds;

    minutes = checkTime(minutes);
    minutesDiv.innerHTML = minutes;

    hours = checkTime(hours);
    hoursDiv.innerHTML = hours;

    countdownInterval = setInterval(()=>{
      seconds--;

      seconds = checkTime(seconds);
      secondsDiv.innerHTML = seconds;
      if (seconds % 60 === 0){
        // check if minutes is present--> minutes >= 1
        if (minutes >= 1){
          minutes--;
          minutes = checkTime(minutes);
          minutes = checkMinutes(minutes);
          minutesDiv.innerHTML = minutes;

          seconds = 60;
        } else {
          clearInterval(countdownInterval);
          audio.play();
        }
      } else {
        minutes = checkTime(minutes);
        minutes = checkMinutes(minutes);
        minutesDiv.innerHTML = minutes;
      }
    }, 1000);
  } else {
    // we have hours:minutes:seconds
    if (minutesInput % 60 === 0){
      // we have only the hours, decrement hour so that minutes and seconds get values
      hours = Math.floor(minutesInput / 60) - 1;
      minutes = 59;
      seconds = 59;

      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);

      hoursDiv.innerHTML = hours;
      minutesDiv.innerHTML = minutes;
      secondsDiv.innerHTML = seconds;

      countdownInterval = setInterval(()=>{
        seconds--;

        seconds = checkTime(seconds);
        secondsDiv.innerHTML = seconds;
        if (seconds % 60 === 0){
          // check if minutes is present--> minutes >= 1
          if (minutes >= 1){
            minutes--;
            minutes = checkTime(minutes);
            minutes = checkMinutes(minutes);
            minutesDiv.innerHTML = minutes;

            seconds = 60;
          } else {
            if (hours >= 1){
              hours--;

              minutes = 59;
              seconds = 59;

              hours = checkTime(hours);
              hours = checkHours(hours);
              hoursDiv.innerHTML = hours;
            } else {
              clearInterval(countdownInterval);
              audio.play();
            }
          }
        } else {
          minutes = checkTime(minutes);
          minutes = checkMinutes(minutes);
          minutesDiv.innerHTML = minutes;
        }
      }, 1000);
    } else {
      // apply same logic for countdown as above
      hours = Math.floor(minutesInput / 60);
      minutes = (minutesInput % 60) - 1;
      seconds = 59;

      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);

      hoursDiv.innerHTML = hours;
      minutesDiv.innerHTML = minutes;
      secondsDiv.innerHTML = seconds;

      countdownInterval = setInterval(()=>{
        seconds--;

        seconds = checkTime(seconds);
        secondsDiv.innerHTML = seconds;
        if (seconds % 60 === 0){
          // check if minutes is present--> minutes >= 1
          if (minutes >= 1){
            minutes--;
            minutes = checkTime(minutes);
            minutes = checkMinutes(minutes);
            minutesDiv.innerHTML = minutes;

            seconds = 60;
          } else {
            if (hours >= 1){
              hours--;

              minutes = 59;
              seconds = 59;

              hours = checkTime(hours);
              hours = checkHours(hours);
              hoursDiv.innerHTML = hours;
            } else {
              clearInterval(countdownInterval);
              audio.play();
            }
          }
        } else {
          minutes = checkTime(minutes);
          minutes = checkMinutes(minutes);
          minutesDiv.innerHTML = minutes;
        }
      }, 1000);
    }
  }
}


function checkTime(time){
  if (time < 10){
    time = '0' + time;
  }
  return time;
}

// use this to remove the 0 that gets added on each interval
function checkMinutes(time){
  if (time.length > 2){
    time = time.slice(1);
  }
  return time;
}

// use this to remove the 0 that gets added on each interval
function checkHours(time){
  if (time.length > 2){
    time = time.slice(1);
  }
  return time;
}
