//var logoInput; //Created variable for logo (Must be global variable)

fr = 60
var r;
var g;
var b;





function setup() {
  createCanvas(400, 400);
  frameRate(fr)
  //logoInput = createInput();
  //input.changed(newText);
  
}

//function newLogo() {
  //console.log(logoInput.value());

//}

logoInput = ("Miles")

function draw() {
rect(135, 100, 100, 200); // Big enough for Miles but increase y for more strings
textSize(32);
text(logoInput, 150, 160);
fill(0, 102, 153);
text(logoInput, 150, 190);
fill(0, 102, 153, 51);
text(logoInput, 150, 220);
 

if (mouseIsPressed) {
  fill(128);
} else {
  fill(255);
}
ellipse(mouseX, mouseY, 80, 80);
}
  
  
  




