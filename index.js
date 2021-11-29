

var num1;
num1=(Math.floor(Math.random()*6)+1);
var num2;
num2=(Math.floor(Math.random()*6)+1);
document.querySelector(".img1").setAttribute("src", "images/dice" + num1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + num2 + ".png");

if (num1>num2) {
    document.querySelector(".container h1").innerHTML="Player 1 Wins!";
  }
else if (num1<num2) {
    document.querySelector(".container h1").innerHTML="Player 2 Wins!";
  }
else {
  document.querySelector(".container h1").innerHTML="Draw!";
  }
