
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "dice-images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "dice-images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If Else statements
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "1 🚩 ";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "2 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Double";
}
