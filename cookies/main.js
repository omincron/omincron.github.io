var solar = 0;

function solarClick(number) {
  solar = solar + number;
  document.getElementById("solar").innerHTML = solar;
}

var upgrades = 0;

function buyUpgrade() {
  var upgradeCost = Math.floor(10 * Math.pow(1.1, upgrades)); //works out the cost of this cursor
  if (solar >= upgradeCost) {
    //checks that the player can afford the cursor
    upgrades = upgrades + 1; //increases number of cursors
    solar = solar - upgradeCost; //removes the cookies spent
    document.getElementById("upgrades").innerHTML = upgrades; //updates the number of cursors for the user
    document.getElementById("solar").innerHTML = solar; //updates the number of cookies for the user
  }
  var nextCost = Math.floor(10 * Math.pow(1.1, upgrades)); //works out the cost of the next cursor
  document.getElementById("upgradeCost").innerHTML = nextCost; //updates the cursor cost for the user
}

window.setInterval(function () {
  solarClick(upgrades);
}, 1000);

var x = 0;
var play = window.setInterval(run, 1000);
function run() {
  if (x == 10) {
    Mars();
  } else if (x == 20) {
    Europa();
  }
  document.getElementById("klms").innerHTML = x;
  x++;
}

function Mars() {
  document.getElementById("Area").innerHTML = "You arrived to Mars";
  continuePlaying();
}

function Europa() {
  document.getElementById("Area").innerHTML = "You arrived to Europa";
  continuePlaying();
}
function continuePlaying() {
  clearInterval(play);
  var button = document.getElementById("Continue");
  button.innerHTML = "Click to Continue";
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
