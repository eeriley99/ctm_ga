function setup() {
  createCanvas(400, 400);
  frameRate(7)
}

function draw() {
  background(250,0,150);
  star(width/2, width/2, 3, 7, 5);
  fill(180,60,80);
  starsFall(400);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function randStar(num_stars){
  for(let i = 0; i <=num_stars; i++){
    let x = random(0,400);
    let y = random(0,400);
    let r = random(0,255);
    let b = random(0,255);
    let g = random(0,255);
    star(x, y, 3*c, c*7, 5);
    fill(r,g,b);
  }
}
function starsFall(num_stars){
  for(let i = 0; i <=num_stars; i+=10){
    let x = random(0,400);
    let y = i;
    let r = random(0,255);
    let b = random(0,255);
    let g = random(0,255);
    let rand = random(1,3)
    star(x, y, 3*rand, 7*rand, 5);
    fill(r,g,b);
  }
}