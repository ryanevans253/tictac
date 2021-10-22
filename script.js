"use strict";

//set the initial conditions of the game
let activePlayer, inactivePlayer, selectedMarker, p1Marker, p2Marker;
let score = 0;
let p1Score = 0;
let p2Score = 0;
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let startButton = document.getElementById("startGame");
startButton.addEventListener("click", generateRandomFirstPlayer);
// startButton.addEventListener("click", startMessage);

function generateRandomFirstPlayer() {
  activePlayer = Math.random() < 0.5 ? "Player 1" : "Player 2";
  inactivePlayer = activePlayer === "Player 1" ? "Player 2" : "Player 1";
  assignMarkers(activePlayer);
}

function startMessage() {
  document.querySelector(
    ".message"
  ).innerHTML = `It is ${activePlayer}'s turn!`;
  // assignMarkers(activePlayer);
  // opposite(selectedMarker);
  initGame();
}
//
//working copy of rebuild:
// function assignMarkers(activePlayer) {
//   let selectedMarker = prompt(`${activePlayer} enter X or O`);
//   if (selectedMarker === null) return;
//   if (selectedMarker != "x" && selectedMarker != "o") {
//     alert("please try again");
//     assignMarkers(activePlayer);
//   } else {
//     return selectedMarker;
//   }
// }

//
//
////rebuilding marker assignment
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
    console.log(p1Marker, p2Marker);
    startMessage();
  }
}
//function opposite(x, player1)
// function opposite(selectedMarker, activePlayer) {
//   // let newMarker === "x" ? "o" : "x";wtf is going on here?

//   p1Marker = activePlayer === "Player 1" ? selectedMarker : opposite(newMarker);
//   p2Marker =
//     activePlayer === "Player 1" ? opposite(selectedMarker) : selectedMarker;
// }

// let opposite = (selectedMarker === "x" ? "o" : "x";

function opposite(selectedMarker) {
  if (selectedMarker === "x") {
    return "o";
  } else {
    return "x";
  }
}
//   if (activePlayer === "Player 1") {
//     p1Marker = selectedMarker;
//     p2Marker = opposite(selectedMarker);
//     // console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
//     document.querySelector(
//       ".assigned-marker"
//     ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
//   } else {
//     p1Marker = opposite(selectedMarker);
//     p2Marker = selectedMarker;
//     // console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
//     document.querySelector(
//       ".assigned-marker"
//     ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
//   }
// }
// currentPlayerMessage();

//
//end of rebuild
//
//
//
//
//
//prompts user to select marker and assigns markers to their players
// function assignMarkers(activePlayer) {
//   let marker = prompt(`${activePlayer} enter X or O`);
//   if (marker === "x" || marker === "o") {
//   } else {
//     alert("Thats wrong, try again");
//     assignMarkers(activePlayer);
//   }

//   let opposite = function (marker) {
//     if (marker === "x") {
//       return "o";
//     } else {
//       return "x";
//     }
//   };

//   if (activePlayer === "Player 1") {
//     p1Marker = marker;
//     p2Marker = opposite(marker);
//     // console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
//     document.querySelector(
//       ".assigned-marker"
//     ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
//   } else {
//     p1Marker = opposite(marker);
//     p2Marker = marker;
//     // console.log(`player 1 marker is ${p1Marker} and p2 is ${p2Marker}`);
//     document.querySelector(
//       ".assigned-marker"
//     ).innerHTML = `Player 1 marker is: ${p1Marker} and Player 2 is: ${p2Marker}`;
//   }
//   currentPlayerMessage();
// }

//
//
//
//
//
//
function currentPlayerMessage() {
  document.querySelector(
    ".message"
  ).innerHTML = `It is ${activePlayer}'s turn!`;
}

function addMarkerToBoard(marker, index) {
  board.splice(index, 1, marker);
}
let boxArray = document.querySelectorAll(".box"); // listens for all boxes clicked.

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

document.querySelector("#reset").addEventListener("click", resetBoard);
