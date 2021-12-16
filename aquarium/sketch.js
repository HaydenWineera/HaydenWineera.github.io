// Aquarium

let theCreatures = [];
let clownFishImg;
let octopusImg;

function preload() {
  clownFishImg = loadImage("assets/clownFish.png");
  octopusImg = loadImage("assets/octo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<50; i++) {
    if (random(100) < 30) {
      let octo = new Octopus(random(width), random(height), 100, octopusImg);
      theCreatures.push(octo);
    }
    else {
      let fish = new Clownfish(random(width), random(height), 30, clownFishImg);
      theCreatures.push(fish);
    }
  }
}

function draw() {
  background(220);
  for (let someCreature of theCreatures) {
    someCreature.update();
    someCreature.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  } 

  update() {
    this.x += 4;
    this.y += random(-15, 15);

    //teleport to start of screen
    if(this.x > width) {
      this.x = 0;
    }
  }

  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }
}

class Clownfish extends Creature {
  constructor(x, y, size, theImage) {
    super(x, y, size);
    this.myImage = theImage;
  }

  display() {
    image(this.myImage, this.x, this.y, this.size, this.size);
  }
}

class Octopus extends Creature {
  constructor(x, y, size, theImage){
    super(x, y, size);
    this.myImage = theImage;
  }

  display() {
    image(this.myImage, this.x, this.y, this.size, this.size);
  }
}
