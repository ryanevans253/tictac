"use strict";

//set the initial conditions of the game
//might need to put this in init function
let activePlayer, inactivePlayer, p1Marker, p2Marker;
let score = 0; //set both player scores to zero
let p1Score = 0;
let p2Score = 0;

//start game generates a starting player
document.getElementById("startGame").addEventListener("click", function () {
  activePlayer = Math.random() < 0.5 ? "Player 1" : "Player 2";
  // if (activePlayer === "Player 1") ? inactivePlayer = "Player 2"
  inactivePlayer = activePlayer === "Player 1" ? "Player 2" : "Player 1";

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
    // assignMarkers(activePlayer);
  } // what is this doing here?

  let opposite = function (marker) {
    if (marker === "x") {
      return "o";
    } else {
      return "x";
    }
    // marker === "x" ? "o" : "x";
  };

  if (activePlayer === "Player 1") {
    p1Marker = marker;
    p2Marker = opposite(marker);
    // console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
    document.querySelector(
      ".assigned-marker"
    ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
  } else {
    p1Marker = opposite(marker);
    p2Marker = marker;
    // console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
    document.querySelector(
      ".assigned-marker"
    ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
  }
  currentPlayerMessage();
}

function currentPlayerMessage() {
  document.querySelector(
    ".message"
  ).innerHTML = `It is ${activePlayer}'s turn!`;
}

//listens for all boxes clicked. returns
let boxArray = document.querySelectorAll(".box");

boxArray.forEach((element) =>
  element.addEventListener("click", function () {
    let activemarker = activePlayer === "Player 1" ? p1Marker : p2Marker;

    [activePlayer, inactivePlayer] = [inactivePlayer, activePlayer];
    element.innerHTML = activemarker;
    currentPlayerMessage();
  })
);

// create a score counter for both players

document.querySelector(".score1").innerHTML = `Player 1 Score: ${p1Score}`;
document.querySelector(".score2").innerHTML = `Player 1 Score: ${p1Score}`;

function winCounter() {
  score += 1;
}

//need to set the scoreboard equal to a position in an array

let list = ["1", "1", "1", "4", "4", "6", "7", "8", "9"];

function wincheck() {
  let winMessage = `Player ${activePlayer} has won the game!`;
  if ((list[0] && list[1]) === list[2]) console.log(winMessage); //top row
  if ((list[3] && list[4]) === list[5]) console.log(winMessage); //middle row
  if ((list[6] && list[7]) === list[8]) console.log(winMessage); //bottom row

  if ((list[0] && list[3]) === list[6]) console.log(winMessage); //left column
  if ((list[1] && list[4]) === list[7]) console.log(winMessage); //center column
  if ((list[2] && list[5]) === list[8]) console.log(winMessage); //right column

  if ((list[0] && list[4]) === list[8]) console.log(winMessage); //TL to BR
  if ((list[2] && list[4]) === list[6]) console.log(winMessage); //TR to BL
  // console.log(list[0], list[1], list[2]);
  // if (list[1] == list[2]) console.log(winMessage);
  // switchPlayer();
}

document.querySelector("#wincheck").addEventListener("click", wincheck);

function takeNumber(number) {}

document.querySelector("#switchPlayer").addEventListener("click", switchPlayer);
