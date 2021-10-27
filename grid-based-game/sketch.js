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
  gravitization();
}

function keyPressed() {
  if (key === "s") {
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
  else if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 1) {
      grid[playerY+1][playerX] = 0;
      console.log("digging!");
    }
  }
  else if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 1) {
      grid[playerY-1][playerX] = 0;
      console.log("digging!");
    }
    else if (keyCode === RIGHT_ARROW) {
      if (grid[playerY][playerX-1] === 1) {
        grid[playerY][playerX-1] = 0;
        console.log("digging!");
      }
      else if (keyCode === RIGHT_ARROW) {
        if (grid[playerY][playerX+1] === 1) {
          grid[playerY][playerX+1] = 0;
          console.log("digging!");
        }
      }
    }
  }
}

function tryToMoveTo(newX, newY) {
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
    if (grid[newY][newX] === 0) { //if block is too strong (we'll get to this later)
      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
  }
}

function gravitization() {
  grid[playerY-1];
}
// function dig(newX, newY){
//   if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
//     if (grid[newY][newX] === 1) {
//       console.log("digging!");
//     }
//   }
// }

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
    grid[cellY][cellX] = 9;
  }
}

function displayGrid() {
  noStroke(255);
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
      if (grid[y][x] === 9) {
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
      //merchant
      if (grid[y][x] === 12) {
        fill(164, 66, 245);
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}