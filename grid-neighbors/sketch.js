// grid demo

let gridSize = 10;
let grid;
let clickSound;

function preload() {
  clickSound = loadSound("assets/Menu Selection Click.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2DArray(gridSize, gridSize);
}

function draw() {
  background(220);
  displaygrid();
}

function mousePressed() {
  clickSound.play();
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  swap(cellX, cellY);
  swap(cellX+1, cellY);
  swap(cellX-1, cellY);
  swap(cellX, cellY+1);
  swap(cellX, cellY-1);
}

function swap(x, y) {
  if (x >= 0 && x < gridSize && y >= 0 && y < gridSize) {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
    else if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
  }
}

function displaygrid() {
  let cellWidth = width/gridSize;
  let cellHeight = height/gridSize;

  for (let y=0; y<gridSize; y++) {
    for(let x=0; x<gridSize; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmpty2DArray(rows, cols, numToFill = 0) {
  let grid = [];
  for(let y=0; y<rows; y++) {
    grid.push([]);
    for(let x=0; x<cols; x++) {
      grid[y].push(numToFill);
    }
  }
  return grid;
}

function createRandom2DArray(rows, cols) {
  let grid = [];
  for(let y=0; y<rows; y++) {
    grid.push([]);
    for(let x=0; x<cols; x++) {
      if (random(100) < 50) {
        grid[y].push(0);
      }
      else {
        grid[y].push(1);
      }
    }
  }
  return grid;
}

function createFull2DArray(rows, cols) {
  let grid = [];
  for(let y=0; y<rows; y++) {
    grid.push([]);
    for(let x=0; x<cols; x++) {
      grid[y].push(1);
    }
  }
  return grid;
}

function keyPressed() {
  if (key === "r") {
    grid = createRandom2DArray(gridSize, gridSize);
  }
  else if (key === "e") {
    grid = createEmpty2DArray(gridSize, gridSize);
  }
  else if (key === "b") {
    grid = createFull2DArray(gridSize, gridSize, 1);
  }
}

