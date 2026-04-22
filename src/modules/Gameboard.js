class Gameboard {
  constructor(boardLength) {
    this.board = Array(boardLength)
      .fill(null)
      .map(() => Array(boardLength).fill(null));
    this.missedAttacks = new Set();
    this.attacks = new Set();
    this.ships = [];
  }

  placeShip(ship, x, y, direction) {
    if (x < 0 || y < 0 || y >= this.board.length || x >= this.board.length) {
      throw new Error("Invalid coordinates");
    }

    if (direction === "h") {
      if (y + ship.length > this.board.length) {
        throw new Error("Out of bounds");
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x][y + i] !== null)
          throw new Error("Placement is overlapping");
      }

      for (let i = 0; i < ship.length; i++) {
        this.board[x][y + i] = ship;
      }
    } else if (direction === "v") {
      if (x + ship.length > this.board.length) {
        throw new Error("Out of bounds");
      }
      for (let i = 0; i < ship.length; i++) {
        if (this.board[x + i][y] !== null)
          throw new Error("Placement is overlapping");
      }
      for (let i = 0; i < ship.length; i++) {
        this.board[x + i][y] = ship;
      }
    } else {
      throw new Error("Invalid direction");
    }
    this.ships.push(ship);
  }

  receiveAttack(x, y) {
    if (x < 0 || y < 0 || y >= this.board.length || x >= this.board.length) {
      throw new Error("Invalid coordinates");
    }
    const key = `${x},${y}`;

    if (this.attacks.has(key)) {
      throw new Error("Already Attacked!");
    }

    if (this.board[x][y] === null) {
      this.missedAttacks.add(key);
      this.attacks.add(key);
      console.log("Attack missed!");
      return;
    }

    this.board[x][y].hit();
    this.attacks.add(key);
    return true;
  }

  checkAllShipsSunk() {
    return this.ships.every((ship) => ship.isSunk());
  }
}
export default Gameboard;
