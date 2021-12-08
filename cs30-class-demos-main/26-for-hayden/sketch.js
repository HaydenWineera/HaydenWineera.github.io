// Typewriter demo for Hayden

function setup() {
  createCanvas(windowWidth, windowHeight/2);
  typeStuff("hey there this is just going to", 3);
}

function draw() {
  background(220);
}

function mousePressed() {
  typeStuff("another thing this is a new line that i can type too...", 1);
}

function typeStuff(sentence) {
  $("#typeArea").clearIt().typeIt(sentence, 0.05, "text").hideCursor();
}