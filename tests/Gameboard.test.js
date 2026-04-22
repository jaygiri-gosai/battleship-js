import Gameboard from "../src/modules/Gameboard.js";
import Ship from "../src/modules/Ship.js";

test("Gameboard exists", () => {
  const board = new Gameboard(5);
  expect(board).toBeDefined();
});

test("places ship at correct coordinates horizontially", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  board.placeShip(shipObj, 0, 1, "h");

  expect(board.board[0][1]).toBe(shipObj);
  expect(board.board[0][2]).toBe(shipObj);
  expect(board.board[0][3]).toBe(shipObj);
});

test("places ship at correct coordinates vertically", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(3);
  board.placeShip(shipObj, 0, 0, "v");
  expect(board.board[0][0]).toBe(shipObj);
  expect(board.board[1][0]).toBe(shipObj);
  expect(board.board[2][0]).toBe(shipObj);
});

test("throws error when wrong coordinates", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(3);
  expect(() => board.placeShip(shipObj, 3, 0, "h")).toThrow(Error);
});

test("throws error when ship placement is overlaped", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  board.placeShip(shipObj, 0, 1, "h");
  expect(() => board.placeShip(shipObj, 0, 1, "v")).toThrow(
    "Placement is overlapping",
  );
});

test("throws error when ship exceeds horizontal boundary", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(3);
  expect(() => board.placeShip(shipObj, 0, 2, "h")).toThrow("Out of bounds");
});

test("throws error when ship exceeds vertically boundary", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(3);
  expect(() => board.placeShip(shipObj, 1, 0, "v")).toThrow("Out of bounds");
  expect(() => board.placeShip(shipObj, 2, 0, "v")).toThrow("Out of bounds");
});

test("throws error for invalid direction", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(3);
  expect(() => board.placeShip(shipObj, 0, 0)).toThrow("Invalid direction");
});

test("success on hit", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  board.placeShip(shipObj, 0, 0, "h");
  expect(board.receiveAttack(0, 1)).toBeTruthy();
});

test("throws error for invalid coordinates", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  expect(() => board.receiveAttack(-1, 3)).toThrow("Invalid coordinates");
});

test("Validate attack miss", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  board.placeShip(shipObj, 2, 1, "h");
  board.receiveAttack(0, 1);
  expect(board.missedAttacks.has("0,1")).toBe(true);
});

test("throw error for the already attacked", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  board.placeShip(shipObj, 2, 1, "h");
  board.receiveAttack(2, 2);
  expect(() => board.receiveAttack(2, 2)).toThrow("Already Attacked!");
});

test("all ships sunk returns true", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  board.placeShip(shipObj, 1, 1, "h");
  board.receiveAttack(1, 1);
  board.receiveAttack(1, 2);
  board.receiveAttack(1, 3);
  expect(board.checkAllShipsSunk()).toBe(true);
});

test("returns false if ships not fully", () => {
  const shipObj = new Ship(3);
  const board = new Gameboard(5);
  board.placeShip(shipObj, 1, 1, "h");
  board.receiveAttack(1, 1);
  board.receiveAttack(1, 2);

  expect(board.checkAllShipsSunk()).toBe(false);
});
