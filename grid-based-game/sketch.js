// grid based game
// Hayden Wineera
// Date: *CURRENT DATE*

let grid;
let gridSize = 25;
let cellWidth, cellHeight;
let level;
let playerX = 0;
let playerY = 0;
let bx = 0;
let by = 0;
let baddie;
let badran;

function preload() {
  level = loadJSON("assets/level1.json");// assumes gridsize is 25
}

function setup() {
  createCanvas(800, 800);
  grid = level;
  cellWidth = width/gridSize;
  cellHeight = height/gridSize;

  // put player in grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
  }
  else if (key === "s") {
    tryToMoveTo(playerX, playerY+1);
  }
  else if (key === "w") {
    tryToMoveTo(playerX, playerY-1);
  }
  else if (key === "a") {
    tryToMoveTo(playerX-1, playerY);
  }
  else if (key === "d") {
    tryToMoveTo(playerX+1, playerY);
  }
}

function tryToMoveTo(newX, newY) {
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
    if (grid[newY][newX] === 0) { //if new spot is empty
      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
  }
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if (grid[cellY][cellX] === 0) {
    grid[cellY][cellX] = 1;
  }
  else if (grid[cellY][cellX] === 1) {
    grid[cellY][cellX] = 0;
  }
  else if (grid[cellY][cellX] === 9) {
    grid[cellY][cellX] = 0;
  }
}

function displayGrid() {
  stroke(0);
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      //soil
      if (grid[y][x] === 1) {
        fill(141, 68, 20);
      }
      //harder soil
      if (grid[y][x] === 2) {
        fill(104, 45, 6);
      }
      //hardest soil
      if (grid[y][x] === 3) {
        fill (67, 39, 21);
      }
      //player
      if (grid[y][x] === 14) {
        fill("red");
      }
      //stone
      if (grid[y][x] === 4) {
        fill ("grey");
      }
      //copper
      if (grid[y][x] === 5) {
        fill (204, 102, 0);
      }
      //grass
      if (grid[y][x] === 3) {
        fill (0, 153, 0);
      }
      //gold
      if (grid[y][x] === 6) {
        fill(233, 179, 0);
      }
      //daimond
      if (grid[y][x] === 7) {
        fill(0, 255, 255);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      board[y].push(0);
    }
  }
  return board;
}

function createRandom2DArray(rows, cols) {
  let board = [];
  for (let y=0; y<rows; y++) {
    board.push([]);
    for (let x=0; x<cols; x++) {
      if (random(100) < 50) {
        board[y].push(0);
      }
      else {
        board[y].push(1);
      }
    }
  }
  return board;
}