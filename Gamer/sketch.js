let x, y, bX, bY, radius, speed, bSpeed;
let player;
let baddie;
let hit;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  bY = 50;
  bX = 50;
  radius = 15;
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

  let cb = color(255, 0, 0);
  fill(cb);
  baddie = circle(bX, bY, 30);
  
  // bad guy rotates to the player and moves towards them
  translate(bX, bY);
  let theta = atan2(bY-y, bX-x);
  rotate(theta);
  fill("black");
  baddie;

  baddieMove();
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
  // if (bY <= y + 12.5) {
  //   bY += bSpeed;
  // }
  // if (bY >= y+ 12.5) {
  //   bY -= bSpeed;
  // }
  // if (bX <= x + 12.5) {
  //   bX += bSpeed;
  // }
  // if (bX >= x + 12.5) {
  //   bX -= bSpeed;
  // }
  bSpeed = 3;
}

function gameEnd() {
  if (hit) {
    setup();
  }
}