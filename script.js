"use strict";

//set the initial conditions of the game
//might need to put this in init function
let activePlayer, inactivePlayer, p1Marker, p2Marker;
let score = 0; //set both player scores to zero
let p1Score = 0;
let p2Score = 0;
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

function addMarkerToBoard(marker, index) {
  board.splice(index, 1, marker);
  console.log(board);
}

//listens for all boxes clicked. returns
let boxArray = document.querySelectorAll(".box");

boxArray.forEach((element) =>
  element.addEventListener("click", function () {
    if (element.innerHTML === "x" || element.innerHTML === "o") {
      return; //prevents the box from being changed if it contains a marker
    }

    ////
    let boardPosition = element.classList[1].slice(-1);
    console.log(boardPosition);

    ////

    let activemarker = activePlayer === "Player 1" ? p1Marker : p2Marker;

    // console.log(element.tagName);
    addMarkerToBoard(activemarker, boardPosition - 1);

    element.innerHTML = activemarker;
    wincheck();
    [activePlayer, inactivePlayer] = [inactivePlayer, activePlayer];

    currentPlayerMessage();
  })
);

// create a score counter for both players

function wincheck() {
  if (board[0] === board[1] && board[1] === board[2]) winGame();
  if (board[3] === board[4] && board[4] === board[5]) winGame();
  if (board[6] === board[7] && board[7] === board[8]) winGame();

  if (board[0] === board[3] && board[3] === board[6]) winGame();
  if (board[1] === board[4] && board[4] === board[7]) winGame();
  if (board[2] === board[5] && board[5] === board[8]) winGame();

  if (board[0] === board[4] && board[4] === board[8]) winGame();
  if (board[2] === board[4] && board[4] === board[6]) winGame();
}

function winGame() {
  let winMessage = `Player ${activePlayer} has won the game!`;
  activePlayer === "Player 1" ? (p1Score += 1) : (p2Score += 1);
  updateScore();
  alert(winMessage);
}

function updateScore() {
  document.querySelector(".score1").innerHTML = `Player 1 Score: ${p1Score}`;
  document.querySelector(".score2").innerHTML = `Player 2 Score: ${p2Score}`;
}

function runGame() {}
