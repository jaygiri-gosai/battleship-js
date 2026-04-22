import Gameboard from "./Gameboard.js";
class Player {
  constructor(type = "human", boardSize) {
    this.type = type;
    this.gameboard = new Gameboard(boardSize);
  }
}
export default Player;
