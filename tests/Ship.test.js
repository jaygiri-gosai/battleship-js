import Ship from "../src/modules/Ship";

test("Ship initializes correctly", () => {
  const shipObj = new Ship(5);
  expect(shipObj.hits).toBe(0);
  expect(shipObj.length).toBe(5);
  expect(shipObj.isSunk()).toBeFalsy();
});

test("ship gets hits", () => {
  const shipObj = new Ship(5);
  expect(shipObj.hits).toBe(0);
  shipObj.hit();
  shipObj.hit();
  expect(shipObj.hits).toBe(2);
  shipObj.hit();
  expect(shipObj.hits).toBe(3);
});

test("ship sinks when hits equal length", () => {
  const shipObj = new Ship(3);
  expect(shipObj.isSunk()).toBeFalsy();
  shipObj.hit();
  shipObj.hit();
  shipObj.hit();
  expect(shipObj.isSunk()).toBeTruthy();
});

test("throws error when hits exceed length", () => {
  const shipObj = new Ship(2);
  shipObj.hit();
  shipObj.hit();
  expect(() => shipObj.hit()).toThrow(Error);
  //expect(shipObj.isSunk()).toBeTruthy();
});
