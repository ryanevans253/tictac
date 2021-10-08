"use strict";

//set the initial conditions of the game
function init() {
  let activePlayer, p1Marker, p2Marker;
}
init();

//start game generates a starting player
document.getElementById("startGame").addEventListener("click", function () {
  let activePlayer = Math.random() < 0.5 ? "Player 1" : "Player 2";

  document.querySelector(
    ".message"
  ).innerHTML = `It is ${activePlayer}'s turn!`;
  assignMarkers(activePlayer);
});

function assignMarkers(activePlayer) {
  let marker = prompt(`${activePlayer} enter X or O`);
  if (marker === "x" || marker === "o") {
    console.log(`${activePlayer} your marker is ${marker}`);
  } else {
    prompt("fuck you that wrong, try again");
    assignMarkers(activePlayer);
  }
  if (activePlayer === "Player 1") {
    p1Marker = marker;
  }
}

//ask the first player to select a marker

// let marker = function() {

// }

// = prompt(`${activePlayer} please select X or O!`);

// assign an active player

//make the active player switch after someone selects a marker

//set the active player marker to the box that was clicked

//create a score counter for both players
