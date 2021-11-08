"use strict";

let activePlayer, inactivePlayer, selectedMarker, p1Marker, p2Marker;
let score = 0;
let p1Score = 0;
let p2Score = 0;
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let boxArray = document.querySelectorAll(".box"); // listens for all boxes clicked.
let startButton = document.getElementById("startGame");
startButton.addEventListener("click", generateRandomFirstPlayer);

function generateRandomFirstPlayer() {
  activePlayer = Math.random() < 0.5 ? "Player 1" : "Player 2";
  inactivePlayer = activePlayer === "Player 1" ? "Player 2" : "Player 1";
  assignMarkers(activePlayer);
}

function startMessage() {
  document.querySelector(
    ".message"
  ).innerHTML = `It is ${activePlayer}'s turn!`;

  initGame();
}

function assignMarkers(activePlayer) {
  let selectedMarker = prompt(`${activePlayer} enter X or O`);
  if (selectedMarker === null) return;
  if (selectedMarker != "x" && selectedMarker != "o") {
    alert("please try again");
    assignMarkers(activePlayer);
  } else {
    p1Marker =
      activePlayer === "Player 1" ? selectedMarker : opposite(selectedMarker);
    p2Marker = opposite(p1Marker);
    startMessage();
  }
}

function opposite(selectedMarker) {
  if (selectedMarker === "x") {
    return "o";
  } else {
    return "x";
  }
}

function currentPlayerMessage() {
  document.querySelector(
    ".message"
  ).innerHTML = `It is ${activePlayer}'s turn!`;
}

function addMarkerToBoard(marker, index) {
  board.splice(index, 1, marker);
}

function initGame() {
  boxArray.forEach((element) =>
    element.addEventListener("click", function () {
      if (element.innerHTML === "x" || element.innerHTML === "o") {
        return; //prevents the box from being changed if it contains a marker
      }

      let boardPosition = element.classList[1].slice(-1);

      let activemarker = activePlayer === "Player 1" ? p1Marker : p2Marker;
      addMarkerToBoard(activemarker, boardPosition - 1);
      element.innerHTML = board[boardPosition - 1];

      wincheck();
      [activePlayer, inactivePlayer] = [inactivePlayer, activePlayer];

      currentPlayerMessage();
    })
  );
}

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

function resetBoard() {
  boxArray.forEach((element) => (element.innerHTML = " "));
  board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
}

function resetGame() {
  //reset all functions here.
}

document.querySelector("#reset").addEventListener("click", resetBoard);
