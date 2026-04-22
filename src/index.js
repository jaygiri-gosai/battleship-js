const CONFIG = { BOARD_SIZE: 5, SHIP_SIZE: 3 };

import Player from "./modules/Player.js";
import Ship from "./modules/Ship.js";
import { renderBoard } from "./dom/dom.js";

let gameOver = false;
const player1 = new Player("Human", CONFIG.BOARD_SIZE);
const player2 = new Player("Computer", CONFIG.BOARD_SIZE);

player1.gameboard.placeShip(new Ship(CONFIG.SHIP_SIZE), 1, 1, "v");
player1.gameboard.placeShip(new Ship(CONFIG.SHIP_SIZE), 3, 2, "h");
renderBoard(player1.gameboard, "player1", false);

player2.gameboard.placeShip(new Ship(CONFIG.SHIP_SIZE), 0, 0, "h");
player2.gameboard.placeShip(new Ship(CONFIG.SHIP_SIZE), 4, 1, "h");
renderBoard(player2.gameboard, "player2", true);

const player2GameBoard = document.getElementById("player2Board");

player2GameBoard.addEventListener("click", (e) => {
  if (!e.target.classList.contains("cell") || gameOver) return;

  const x = Number(e.target.dataset.x);
  const y = Number(e.target.dataset.y);
  try {
    player2.gameboard.receiveAttack(x, y);
    renderBoard(player2.gameboard, "player2", true);

    if (player2.gameboard.checkAllShipsSunk()) {
      alert(`Human wins!`);
      gameOver = true;
      document.getElementById("action").style.display = "";
      return;
    }

    // Computers turn
    let [compx, compy] = getRandomCoordinates();
    player1.gameboard.receiveAttack(compx, compy);
    renderBoard(player1.gameboard, "player1", false);

    if (player1.gameboard.checkAllShipsSunk()) {
      alert(`Computer wins!`);
      gameOver = true;
      document.getElementById("action").style.display = "";
      return;
    }
  } catch (err) {
    console.log(err.message);
    return;
  }
});

const restartGame = document.getElementById("restart");
restartGame.addEventListener("click", (e) => (window.location.href = ""));

function getRandomCoordinates() {
  let x, y, key;
  do {
    x = Math.floor(Math.random() * CONFIG.BOARD_SIZE);
    y = Math.floor(Math.random() * CONFIG.BOARD_SIZE);
    key = `${x},${y}`;
  } while (player1.gameboard.attacks.has(key));

  return [x, y];
}
