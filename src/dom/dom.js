function renderBoard(gameBoard, containerId, hideShips = false) {
  const container = document.getElementById(`${containerId}Board`);
  const gameBoardSize = gameBoard.board.length;
  container.innerHTML = "";

  for (let x = 0; x < gameBoardSize; x++) {
    let cellGroup = document.createElement("div");
    cellGroup.classList.add("cellGroup");
    for (let y = 0; y < gameBoardSize; y++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.x = x;
      cell.dataset.y = y;
      if (!hideShips && gameBoard.board[x][y] !== null) {
        cell.innerText = "Ship";
        cell.classList.add("ship");
      }
      cellGroup.appendChild(cell);
      const key = `${x},${y}`;
      if (gameBoard.board[x][y] !== null && gameBoard.attacks.has(key))
        cell.classList.add("hit");

      if (gameBoard.missedAttacks.has(key)) cell.classList.add("miss");
    }
    container.appendChild(cellGroup);
  }
}

export { renderBoard };
