window.onload = function () { // Every time a session is created, prompt with default "Refresh to play" option with static dice
    if (sessionStorage.getItem("hasCodeRunBefore") === null) {
        document.querySelector("h1").innerHTML = "Refresh to play!";
        document.querySelector(".img1").setAttribute("src", "images/dice6.png")
        document.querySelector(".img2").setAttribute("src", "images/dice6.png")
        sessionStorage.setItem("hasCodeRunBefore", true);
    }
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1; // make random number
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png") //choose dice image matching random number
var randomNumber2 = Math.floor(Math.random() * 6) + 1; // make random number
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png") //choose dice image matching random number
if (randomNumber1 > randomNumber2) {  // Player 1 rolled higher
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else if (randomNumber2 > randomNumber1) { // Player 2 rolled higher
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else { // Both players rolled the same
  document.querySelector("h1").innerHTML = "Draw!";
}
