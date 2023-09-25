function setup() {
  createCanvas(windowWidth, windowHeight);
}



function draw() {
  background(255);
  fill(mouseX);
  strokeWeight(mouseY);
  stroke(5,10,5,50);
  circle(windowWidth / 2,windowHeight / 2, 200 );
  textSize( 20);
  text(mouseX, 50, 50);
  text(int (mouseY) , 50, 100);
  
  fill(100, 149, 237, 127);
  rect(400,400,100,100);
  line(600,600,750,750);
}
