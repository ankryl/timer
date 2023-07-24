

document.addEventListener('DOMContentLoaded', function() {
 const numbHour = +prompt("Введите значение таймера в часах");
 if(numbHour >= 24 || numbHour < 0){
 alert("Введено некорректное значение, перезапустите страницу и введите число в промежутке от 0 до 23 (включительно*)")
  };
 const numbMinute = +prompt("Введите значение таймера в минутах");
 if(numbMinute >= 60 || numbMinute < 0){
 alert("Введено некорректное значение, перезапустите страницу и введите число в промежутке от 0 до 59 (включительно*)")
      };
 

 let remainTime = (3600 * numbHour + 60 * numbMinute);
 let timerId = null;

 function countdownTimer() {
      if (remainTime <= 0) {
        clearInterval(timerId);
      }
      const hours = remainTime > 0 ? Math.floor(remainTime / 60 / 60) % 24 : 0;
      const minutes = remainTime > 0 ? Math.floor(remainTime / 60) % 60 : 0;
      const seconds = remainTime > 0 ? Math.floor(remainTime) % 60 : 0;
      hoursDiv.textContent = hours < 10 ? '0' + hours : hours;
      minutesDiv.textContent = minutes < 10 ? '0' + minutes : minutes;
      secondsDiv.textContent = seconds < 10 ? '0' + seconds : seconds;
      remainTime -= 1;
    }
    const hoursDiv = document.querySelector('.timer__hh');
    const minutesDiv = document.querySelector('.timer__mm');
    const secondsDiv = document.querySelector('.timer__ss');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
 });


