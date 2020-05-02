fr = 60
var r;
var g;
var b;
function setup() {
  createCanvas(860, 648);
  frameRate(fr)
}

function draw() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
    if  (mouseIsPressed) {
      fill(r, g, b);
      ellipse(mouseX, mouseY, random(30, 120), random(50, 130));
    } else {
      print ('click to start drawing')
    }
  }
