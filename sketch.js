let posX;
let posY;
let diametro;
let radio;
let colores;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // print(posX);
  // posX = 234;
  // print(posX)
  // posX = posX + 25;
  // print(posX)
  // posX = posX * 2;
  // print(posX)
  // posX = posX /5;
  // print(posX)
  // posX *= 8 ;
  // print(posX)
  // posX += 1 ;
  // print(posX)
  // posX ++;
  // print(posX)
  posX = windowWidth / 2;
  posY = windowHeight / 2;
  //frameRate(10);
  diametro = 100;
  radio = diametro / 2;
  colores = color(25, 100, 50);
}

function draw() {
  background(255);

  posX -= 5;

  if (posX < -radio) {
    diametro = random(10, 100);
    radio = diametro / 2;
    posX = windowWidth + radio;
    colores = color(200, random(10, 255), random(10, 255));
    noStroke();
  }

  fill(colores);

  circle(posX, posY, diametro);

  print(posX);
  //posY += 5;
}
