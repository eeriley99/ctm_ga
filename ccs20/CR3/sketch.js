//Charlie's drawing Iteration 3


fr = 60
var x = 200;
var y = 200;
var r;
var g;
var b;

function setup() {
  createCanvas(376, 376);
  background(0, 0, 0);
  frameRate(fr);
  speed = random(0, 10);
  speedY = random(0, 10);
  
}
function draw() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  stroke(r, g, b);
  strokeWeight(4);
  stroke(0);
  fill(r, g, b);
  ellipse(x, y, random(10, 100), random(10, 100));
  x += speed;
  y += speedY
  
  if (x > 351 || x < 25) {
    speed *= -1;
  }
  
  if (y > 351 || y < 25) {
    speedY *= -1;
  }
  
}