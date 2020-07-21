var randomNumber1 = Math.floor(Math.random() * (7 - 1)) + 1;
var randomNumber2 = Math.floor(Math.random() * (7 - 1)) + 1;
var dicey1 = ("./images/dice" + randomNumber1 + ".png");
var dicey2 = ("./images/dice" + randomNumber2 + ".png");
document.querySelector(".dice > .img1").setAttribute("src", dicey1);
document.querySelector(".dice > .img2").setAttribute("src", dicey2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container > h1").innerText = "Player 1 Wins";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container > h1").innerText = "Player 2 Wins";
}
else {
  document.querySelector(".container > h1").innerText = "Tie!";
}