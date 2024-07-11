var gameData = {
    mulch: 0,
    mulchPerClick: 1,
    mulchPerClickCost: 10
}

function mulchConsume() {
    gameData.mulch += gameData.mulchPerClick
    document.getElementById("mulchEaten").innerHTML = gamedata.mulch + " Mulch Eaten"
}

function buyMulchPerClick() {
    if (gameData.mulch >= gameData.mulchPerClickCost) {
        gameData.mulch -= gameData.mulchPerClickCost
        gameData.mulchPerClick += 1
        gameData.mulchPerClickCost *= 2
        document.getElementById("mulchEaten").innerHTML = gameData.mulch + " Mulch Eaten"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade mouth :33 (Currently Level " +gameData.mulchPerClick + ") Cost: " + gameData.mulchPerClickCost + " Mulch"
    }
}

var mainGameLoop = window.setInterval(function() {
    mulchConsume()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("mulchEaterSave", JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("mulchEaterSave"))
if (savegame !== null) {
    gameData = savegame
}
