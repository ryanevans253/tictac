"use strict";

//set the initial conditions of the game
//might need to put this in init function
let activePlayer, p1Marker, p2Marker;

//start game generates a starting player
document.getElementById("startGame").addEventListener("click", function () {
  let activePlayer = Math.random() < 0.5 ? "Player 1" : "Player 2";

  document.querySelector(
    ".message"
  ).innerHTML = `It is ${activePlayer}'s turn!`;
  assignMarkers(activePlayer);
});

//prompts user to select marker and assigns markers to their players
function assignMarkers(activePlayer) {
  let marker = prompt(`${activePlayer} enter X or O`);
  if (marker === "x" || marker === "o") {
    // console.log(`${activePlayer} your marker is ${marker}`);
  } else {
    prompt("Thats wrong, try again");
    assignMarkers(activePlayer);
  }

  let opposite = function (marker) {
    if (marker === "x") {
      return "o";
    } else {
      return "x";
    }
  };

  if (activePlayer === "Player 1") {
    p1Marker = marker;
    p2Marker = opposite(marker);
    console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
    document.querySelector(
      ".assigned-marker"
    ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
  } else {
    p1Marker = opposite(marker);
    p2Marker = marker;
    console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
    document.querySelector(
      ".assigned-marker"
    ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
  }
}

//make the active player switch after someone selects a marker

//set the active player marker to the box that was clicked

let move = function () {
  console.log();
};
// let number = document.querySelector(".box-1").addEventListener("click", move());

document.querySelector(".box-1").addEventListener("click", move);
document.querySelector(".box-2").addEventListener("click", move);
document.querySelector(".box-3").addEventListener("click", move);
//

// document.querySelector(".box").addEventListener("click", function () {
//   document.querySelector(``);
// });

// let selection = document.querySelector("box-2").innerHTML();
// console.log(selection());

//create a score counter for both players
