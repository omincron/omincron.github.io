let min = 0;
let sec = 0;
let ms = 0;
let start;

startTimer.onclick = function startTimer() {
  clearInterval(start);
  start = window.setInterval(run, 10);
};

stopTimer.onclick = function stopTimer() {
  clearInterval(start);
};

resetTimer.onclick = function reset() {
  clearInterval(start);
  min = 0;
  sec = 0;
  ms = 0;
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("ms").innerHTML = "00";
};

function run() {
  milisecond();
  if (sec == 59) {
    minutes();
    sec = 0;
  }
  if (ms == 99) {
    seconds();
    ms = 0;
    console.log(ms);
  }
}

function minutes() {
  min += 1;
  if (min <= 9) {
    document.getElementById("min").innerHTML = "0" + min;
  } else {
    document.getElementById("min").innerHTML = min;
  }
}

function seconds() {
  sec += 1;
  if (sec <= 9) {
    document.getElementById("sec").innerHTML = "0" + sec;
  } else {
    document.getElementById("sec").innerHTML = sec;
  }
}

function milisecond() {
  ms++;
  if (ms <= 9) {
    document.getElementById("ms").innerHTML = "0" + ms;
  } else {
    document.getElementById("ms").innerHTML = ms;
  }
}
