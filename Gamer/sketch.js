let x, y, bX, bY, radius, speed, bSpeed;
let player;
let theBaddies = [];
let hit;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = random(width);
  y = random(height);
  bY = height/2;
  bX = width/2;
  speed = 6;
  bSpeed = 3;
}

function draw() {
  background(220);
  gameEnd();

  hit = collideRectCircle(x, y, 23, 23, bX, bY, 30);

  handleKeys();
  let c = color(0, 0, 255);
  fill(c);
  player = rect(x, y, 22, 22);
  
  // bad guy rotates to the player and moves towards them
  translate(bX, bY);
  let theta = atan2(bY-y, bX-x);
  rotate(theta);
  fill("black");

  mousePressed();
  spawnBaddies();
  displayBaddies();
  baddieMove();
}

function spawnBaddies() {
  let baddie = {
    x : random(width),
    y : random(height),
    dx : 3,
    dy : -3,
    color : "red"
  };
}

function displayBaddies() {
  for (let baddie of theBaddies) {
    fill(baddie.color);
    circle(baddie.x, baddie.y);
  }
}

function mousePressed() {
  for (let i = 0; i < 15; i++) {
    spawnBaddies();
  }
}

function handleKeys() {
  if (keyIsDown(87)) {
    // w
    y -= speed;
    if (y <= 0) {
      y = 2;
    }
  }
  if (keyIsDown(83)) {
    //s
    y += speed;
    if (y >= height) {
      y = y - 2;
    }
  }
  if (keyIsDown(65)) {
    //a
    x -= speed;
    if (x <= 2) {
      x = 2;
    }
  }
  if (keyIsDown(68)) {
    //d
    x += speed;
    if (x <= width) {
      x = x - 2;
    }
  }
}
function baddieMove() {
  for (let baddie of theBaddies) {
    baddie.x += x;
  }
}

function gameEnd() {
  if (hit) {
    setup();
  }
}