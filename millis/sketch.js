let lastTimeSwitched = 0;

let flip, flop;

let isRed = false;

let pat;

function setup() {
  createCanvas(400, 400);
  let flip = 2000;
  let flop = 4000;
}

function draw() {
  background(220);
  //   console.log(millis());
  //   if (isRed) {
  //     background("red");
  //   }
  //   else {
  //     background("black")
  //   }
  
  //   if (millis() > lastTimeSwitched + 2000) {
  //     lastTimeSwitched = millis();
  //     isRed = !isRed;
  //   }

  if (lastTimeSwitched >= millis(flip) && lastTimeSwitched <= millis(flop)) {
    background("black");
    flip += 2000;
    flop += 2000;
  }
  else {
    background("red");
  }
  image(pat, 0, 0, width, height);
}
function preload() {
  pat = loadImage("assets/Patrick.png");
}