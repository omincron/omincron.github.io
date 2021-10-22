var upgrades = 1;
var km = 0;
var play = window.setInterval(run, 1000);
var button = document.getElementById("buyUpgrade");

function buyUpgrade() {
  upgrades += 1;
  document.getElementById("upgrades").innerHTML = upgrades - 1;
  document.getElementById("buyUpgrade").innerHTML = "";
  document.getElementById("buyUpgrade").classList.remove("btn");
}

function run() {
  if (km == 10) {
    Mars();
  } else if (km == 43) {
    Europa();
  }
  document.getElementById("klms").innerHTML = km;
  km = km + upgrades;
}

function Mars() {
  button.innerHTML = "Upgrade";
  button.classList.add("btn");
  button.onclick = function () {
    buyUpgrade();
    continuePlaying();
  };
  clearInterval(play);
  document.getElementById("Area").innerHTML = "You arrived to Mars, click Upgrade to use the Martian technology and upgrade your engine.";
}

function Europa() {
  button.innerHTML = "Upgrade";
  button.classList.add("btn");
  button.onclick = function () {
    buyUpgrade();
    continuePlaying();
  };
  clearInterval(play);
  document.getElementById("Area").innerHTML = "You arrived to Europa, click Upgrade to use better fuel and get more speed.";
}
function continuePlaying() {
  var button = document.getElementById("Continue");
  button.innerHTML = "Continue";
  button.classList.add("btn");
  button.onclick = function () {
    continueClicked();
  };
}
function continueClicked() {
  play = window.setInterval(run, 1000);
  document.getElementById("Continue").innerHTML = "";
  document.getElementById("Continue").classList.remove("btn");
  document.getElementById("Area").innerHTML = "";
}
