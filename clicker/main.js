var gameData = {
    klms: 0,
    upgrades: 0
}
function klmClick() {
    gameData.klms += 1 ;
    document.getElementById("klmstraveled").innerHTML = gameData.klms + " klms traveled";
}
var upgradeCost = 10;
function buyUpgrade() { 
    if(gameData.klms >= upgradeCost) {
        gameData.upgrades = gameData.upgrades + 1;
        gameData.klms = gameData.klms - upgradeCost;
        document.getElementById('Upgrade').innerHTML = gameData.upgrades;
        document.getElementById('klmstraveled').innerHTML = gameData.klms + " klms traveled";
    };
    upgradeCost += 5;
    document.getElementById("upgradeCost").innerHTML = upgradeCost;
}