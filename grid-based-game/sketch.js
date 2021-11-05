// grid based game
// Hayden Wineera
// Date: November 1st

let grid;
let gridSize = 25;
let cellWidth, cellHeight;
let level;
let playerX = 0;
let playerY = 0;
let bx = 0;
let by = 0;
let ladder;
let message = "Welcome new explorer [ENTER]";
let textState = 0;
let moola = 0;
let money = "Money = " + moola;


function preload() {
  level = loadJSON("assets/level1.json");// assumes gridsize is 25
  ladder = loadImage("assets/ladder.png");
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
  background(66, 179, 245);
  // gravitization();
  noStroke();
  fill(104, 45, 6);
  rect(0, 160, 800, 700);
  displayGrid();
  displayText();
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
  else if (key === " ") {
    grid[playerY-1][playerX] = 13;
  }
  else if (keyCode === ENTER && textState === 0) {
    message = "use WASD to move your character [ENTER]";
    textState += 1;
  }
  else if (keyCode === ENTER && textState === 1) {
    message = "use your arrow keys to dig [ENTER]";
    textState += 1;
  }
  else if (keyCode === ENTER && textState === 2) {
    message = "I'm the merchant [ENTER]";
    textState += 1;
  }
  else if (keyCode === ENTER && textState === 3) {
    message = "If you need to upgrade talk to me";
    textState += 1;
  }
  else if (keyCode === DOWN_ARROW) {
    if (grid[playerY+1][playerX] === 1 || grid[playerY+1][playerX] === 3 || grid[playerY+1][playerX] === 5) {
      dig(playerX, playerY+1);
    }
  }
  else if (keyCode === UP_ARROW) {
    if (grid[playerY-1][playerX] === 1 || grid[playerY-1][playerX] === 3 || grid[playerY-1][playerX] === 5) {
      // grid[playerY-1][playerX] = 0;
      dig(playerX, playerY-1);
    }
  }
  else if (keyCode === RIGHT_ARROW) {
    if (grid[playerY][playerX+1] === 1 || grid[playerY][playerX+1] === 3 || grid[playerY][playerX+1] === 5) {
      // grid[playerY][playerX+1] = 0;
      dig(playerX+1, playerY);
    }
  }
  else if (keyCode === LEFT_ARROW) {
    if (grid[playerY][playerX-1] === 1 || grid[playerY][playerX-1] === 3 || grid[playerY][playerX-1] === 5) {
      // grid[playerY][playerX-1] = 0;
    }
  }
}

function dig(x, y) {
  if (grid[y][x] === 5) {
    moola += 100;
  }
  grid[y][x] = 0;
}

function tryToMoveTo(newX, newY) {
  if (newX >= 0 && newY >= 0 && newX < gridSize && newY < gridSize) {
    if (grid[newY][newX] === 0) { //if block is in the way(excluding ladders and backsoil)
      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
    else if (grid[newY][newX] === 13) {
      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[playerY][playerX] = 9;
    }
  }
}

function gravitization() {
  tryToMoveTo(playerY-1, playerX);
}

function mousePressed() {
  let cellX = Math.floor(mouseX/cellWidth);
  let cellY = Math.floor(mouseY/cellHeight);

  if(mouseX >= 0 && mouseX < 800 && mouseY >= 0 && mouseY < 800) {
    if (grid[cellY][cellX] === 0) {
      grid[cellY][cellX] = 1;
    }
    else if (grid[cellY][cellX] === 1) {
      grid[cellY][cellX] = 4;
    }
    else if (grid[cellY][cellX] === 4) {
      grid[cellY][cellX] = 3;
    }
    else if (grid[cellY][cellX] === 3) {
      grid[cellY][cellX] = 5;
    }
    else if (grid[cellY][cellX] === 5) {
      grid[cellY][cellX] = 2;
    }
    else if (grid[cellY][cellX] === 2) {
      grid[cellY][cellX] = 0;
    }
    else if (grid[cellY][cellX] === 9) {
      grid[cellY][cellX] = 9;
    }
  }
}

function displayGrid() {
  noStroke(255);
  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      //soil
      if (grid[y][x] === 1) {
        fill(141, 68, 20);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //hard stone
      if (grid[y][x] === 3) {
        fill (73, 85, 92);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //player
      if (grid[y][x] === 9) {
        fill("red");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //stone
      if (grid[y][x] === 4) {
        fill ("grey");
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //copper
      if (grid[y][x] === 5) {
        fill (204, 102, 0);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //grass
      if (grid[y][x] === 3) {
        fill (0, 153, 0);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //gold
      if (grid[y][x] === 6) {
        fill(233, 179, 0);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //daimond
      if (grid[y][x] === 7) {
        fill(0, 255, 255);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      //merchant
      if (grid[y][x] === 12) {
        fill(164, 66, 245);
        rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      if (grid[y][x] === 13) {
        image(ladder, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
    }
  }
}

function displayText() {
  // text("Welcome new explorer", 700, 100);
  fill(50);
  text(message, 730, 60, 70, 80);

  text(money, 100, 25, 70, 80);
}