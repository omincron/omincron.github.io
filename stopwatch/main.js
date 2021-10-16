let min = 0;
let sec = 0;
let ms = 0;
let start;

startTimer.onclick = function startTimer() {
  clearInterval(start);
  start = window.setInterval(run, 10);
}

stopTimer.onclick = function stopTimer() {
  clearInterval(start);
}

resetTimer.onclick = function reset() {
  clearInterval(start);
  min = 0;
  sec = 0;
  ms = 0;
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "00";
}

function run() {
  if (ms <= 99) {
    if (sec > 59) {
      minutes();
      sec = 0;
    }
    milisecond();
  } else if (ms > 99) {
    seconds();
    ms = 0;
  }
}

function minutes() {
  if (min <= 9) {
    document.getElementById("min").innerHTML = "0" + min;
  } else {
    document.getElementById("min").innerHTML = min;
  }
  min += 1;
}

function seconds() {
  if (sec <= 9) {
    document.getElementById("sec").innerHTML = "0" + sec;
  } else {
    document.getElementById("sec").innerHTML = sec;
  }
  sec += 1;
}

function milisecond() {
  if (ms <= 9) {
    document.getElementById("ms").innerHTML = "0" + ms;
  } else {
    document.getElementById("ms").innerHTML = ms;
  }
  ms++;
}
