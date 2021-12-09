// Circle Recursion

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  recursiveCircle(width/2, height);
}

function recursiveCircle(x, diameter) {
  fill(random(100));
  circle(x, height/2, diameter);

  if(diameter > 10) {
    recursiveCircle(x - mouseX/width/2*diameter, diameter/2);
    recursiveCircle(x + mouseX/width/2*diameter, diameter/2);
  }
}
