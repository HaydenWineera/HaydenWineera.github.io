// bouncing-ball-array

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<100; i++) {
    spawnBall();
  }
}

function draw() {
  background("black");

  for (let myBall of ballArray) {
    stroke(255);
    fill(myBall.theColor);
    myBall.x = noise(myBall.time) * width;
    myBall.y = noise(myBall.time + 100) * height;
    circle(myBall.x, myBall.y, myBall.radius * 2);
    myBall.time += 0.003;
  }
}

function spawnBall() {
  let myBall = {
    radius: random(10, 30),
    x: random(width),
    y: random(height),
    time: random(1, 1000),
    theColor: color("black"),
  };
  ballArray.push(myBall);
}

function mousePressed() {
  for (let i = 0; i < 15; i++) {
    spawnBall();
  }
}