function enterName1() {
  var pName = document.getElementById("P1Name");
  var name = document.getElementById("p1name");
  var content = document.getElementById("p1entername");
  pName.innerHTML = "Player 1: " + name.value + "<br>";
  content.innerHTML = "";
}

function enterName2() {
  var pName = document.getElementById("P2Name");
  var name = document.getElementById("p2name");
  var content = document.getElementById("p2entername");
  pName.innerHTML = "Player 2: " + name.value + "<br>";
  content.innerHTML = "";
}

function enterName3() {
  var pName = document.getElementById("P3Name");
  var name = document.getElementById("p3name");
  var content = document.getElementById("p3entername");
  pName.innerHTML = "Player 3: " + name.value + "<br>";
  content.innerHTML = "";
}

function enterName4() {
  var pName = document.getElementById("P4Name");
  var name = document.getElementById("p4name");
  var content = document.getElementById("p4entername");
  pName.innerHTML = "Player 4: " + name.value + "<br>";
  content.innerHTML = "";
}

var dice = document.querySelector(".diceFaces");
var rolldice = document.querySelector(".rolldice");
var addclass = "";

function diceroll() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  var roll = "roll" + randomNumber;
  if (addclass) {
    dice.classList.remove(addclass);
  }
  dice.classList.add(roll);
  addclass = roll;
}

diceroll();

rolldice.addEventListener("click", diceroll);
