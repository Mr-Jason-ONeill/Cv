var buttonColors = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var randomChosenColor = buttonColors[randomNumber];

function nextSequence () {
    var randomNumber = Math.floor(Math.random() * 4);
    gamePattern.push(randomChosenColor);
}

