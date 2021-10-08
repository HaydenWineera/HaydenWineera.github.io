let x, y, bx, by, radius, speed, bSpeed;
let player;
let theBaddies = [];
let hit;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  by = windowHeight/2;
  bx = windowWidth/2;
  speed = 6;
  bSpeed = 3;
  radius = 4;
}

function draw() {
  background(220);
  gameEnd();

  hit = collideRectCircle(x, y, 23, 23, bx, by, radius, radius);

  handleKeys();
  let c = color(0, 0, 255);
  noStroke();
  fill(c);
  player = rect(x, y, 22, 22);

  displayBaddies();
  baddieMove();
}

function spawnBaddies() {
  let baddie = {
    baddieX : bx = windowWidth/2,
    baddieY : by = windowHeight/2,
    dx : 3,
    dy : -3,
    color : "red",
  };
  theBaddies.push(baddie);
}

function displayBaddies() {
  for (let baddie of theBaddies) {
    stroke(255);
    fill(baddie.color);
    circle(baddie.baddieX, baddie.baddieY, radius*2);
  }
}

function mousePressed() {
  for (let i = 0; i < 10; i++) {
    spawnBaddies();
  }
}

function handleKeys() {
  if (keyIsDown(87)) {
    //w
    if (y + -2 > 0) {
      y -= speed;
    }
  }
  if (keyIsDown(83)) {
    //s
    if (y + 26 < height) {
      y += speed;
    }
  }
  if (keyIsDown(65)) {
    //a
    if (x + -2 > 0) {
      x -= speed;
    }
  }
  if (keyIsDown(68)) {
    //d
    if (x + 26 < width) {
      x += speed;
    }
  }
}
function baddieMove() {
  for (let baddie of theBaddies) {
    if (baddie.baddieX < x) {
      baddie.baddieX += 1;
    }
    if (baddie.baddieX > x) {
      baddie.baddieX -= 1;
    }
    if (baddie.baddieY < y) {
      baddie.baddieY += 1;
    } 
    if (baddie.baddieY > y) {
      baddie.baddieY -= 1;
    }
    console.log(bx, by, x, y);
  }
}

function gameEnd() {
  if (hit) {
    setup();
  }
}