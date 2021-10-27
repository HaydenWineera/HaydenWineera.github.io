// OOP Walker Demo

let kayaan, nick, hannah, venom1, venom2, venom3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kayaan = new Walker(width/2, height/2, "black");
  nick = new Walker(width/2, height/2, "purple");
  hannah = new Walker(width/2, height/2, "black");
  venom1 = new Walker(width/2, height/2, "purple");
  venom2 = new Walker(width/2, height/2, "black");
  venom3 = new Walker(width/2, height/2, "purple");
}

function draw() {
  kayaan.move();
  nick.move();
  hannah.move();
  venom1.move();
  venom2.move();
  venom3.move();

  kayaan.display();
  nick.display();
  hannah.display();
  venom1.display();
  venom2.display();
  venom3.display();
}

class Walker {
  constructor(x, y, theColour) {
    this.x = x;
    this.y = y;
    this.colour = theColour;
    this.speed = 5;
  }

  display() {
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, 5);
  }

  move() {
    let choice = random(100);
    if (choice < 25) { //up
      this.y -= this.speed;
    }
    else if (choice < 50) {//down
      this.y += this.speed;
    }
    else if (choice < 75) {//left
      this.x -= this.speed;
    }
    else {//right
      this.x += this.speed;
    }
  }
}