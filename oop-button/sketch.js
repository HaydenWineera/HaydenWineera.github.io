// OOP Button

let bgButton;
let shapeButton;
let backroundColour = "green";
let isShapeDisplayed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgButton = new Button(100, 300, 600, 150, "red", "blue");
  shapeButton = new Button(100, 600, 600, 150, "yellow", "orange");
}

function draw() {
  background(backroundColour);
  bgButton.display();
  shapeButton.display();

  if (isShapeDisplayed) {
    fill("black");
    circle(600, 200, 100);
  }
}

function mousePressed() {
  if (bgButton.isPointInButton(mouseX, mouseY)) {
    backroundColour = "pink";
  }
  else if(shapeButton.isPointInButton(mouseX, mouseY)) {
    isShapeDisplayed = !isShapeDisplayed;
  }
}

class Button {
  constructor(x, y, buttonWidth, buttonHeight, hoverColour, notHoverColour) {
    this.x = x;
    this.y = y;
    this.width = buttonWidth;
    this.height = buttonHeight;
    this.notHoverColour = notHoverColour;
    this.hoverColour = hoverColour;
  }

  display() {
    if (this.isPointInButton(mouseX, mouseY)) {
      fill(this.hoverColour);
    }
    else {
      fill(this.notHoverColour);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isPointInButton(x, y) {
    return x >= this.x && x <= this.x + this.width &&
           y >= this.y && y <= this.y + this.height;
  }
}