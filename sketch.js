var player, playerImg;
var player2;
var backgroundImg, bg;
var bg2, bg3, bg4;
var b1, b2, b3, b4, b5, b6, b7;
var b1Img, b2Img, b3Img, b4Img,b5Img, b6Img, b7Img;
var keyImg, key;
var s1, s2, s3, s4;
var s1Img, s2Img, s3Img, s4Img;
var c1, c2, c1Img, c2Img, c3, c4;
var books, booksImg, books2;
var gameState="welcome";


function preload() {
  backgroundImg = loadImage("background.png");
  bg2 = loadImage("background2.png");
  bg3 = loadImage("room1.png");
  bg4 = loadImage("jail.png");
  playerImg = loadAnimation("1.png", "2.png ", "3.png" , "4.png" , "5.png", "6.png");
  player2 = loadImage("1.png")
  b1Img = loadImage("bear.png");
  b2Img = loadImage("bear2.png");
  b3Img = loadImage("bear3.png");
  b4Img = loadImage("bear4.png");
  b5Img = loadImage("bear5.png");
  b6Img = loadImage("bear6.png");
  b7Img = loadImage("bear7.png");
  keyImg = loadImage("key.png");
  c1Img = loadImage("cClose.png");
  c2Img = loadImage("cOpen.png");
   s1Img = loadImage("Waiter.png");
   s2Img = loadImage("Doctor.png");
   s3Img = loadImage("Chef.png");
   s4Img = loadImage("Worker.png");
   booksImg = loadImage("books.png");
}
function setup() {
  createCanvas(1000,500);
  s1 = createSprite(281,340,30,20);
  s1.addImage(s1Img);
  s1.scale = 0.75;
  s1.visible = false;
  s2 = createSprite(527,240,30,20);
  s2.addImage(s2Img);
  s2.scale = 0.25;
  s2.visible = false;
  s3 = createSprite(687,340,30,20);
  s3.addImage(s3Img);
  s3.scale = 0.5;
  s3.visible = false;
  s4 = createSprite(800,380,30,20);
  s4.addImage(s4Img);
  s4.scale = 0.25;
  s4.visible = false;
  bg = createSprite (500,250,20,30);
  bg.addAnimation('bg1', backgroundImg);
  bg.addAnimation('bg2', bg2);
  bg.addAnimation('bg3', bg3);
  bg.addAnimation('bg4', bg4);
  bg.scale = 0.5;
  player = createSprite(500, 430, 50, 20);
  player.addAnimation('player', playerImg);
  player.addAnimation('player2', player2);
  b1 = createSprite(450,197,30,20);
  b1.addImage(b1Img);
  b1.scale = 0.10;
  b1.visible = false;
  b2 = createSprite(142,472,30,20);
  b2.addImage(b2Img);
  b2.scale = 0.10;
  b2.visible = false;
  b3 = createSprite(550,285,30,20);
  b3.addImage(b3Img);
  b3.scale = 0.15;
  b3.visible = false;
  b4 = createSprite(842,470,30,20);
  b4.addAnimation('bear4',b4Img);
  b4.scale = 0.15;
  b4.visible = false;
  b5 = createSprite(412,333,30,20);
  b5.addImage(b5Img);
  b5.scale = 0.20;
  b5.visible = false;
  b6 = createSprite(677,410,30,20);
  b6.addImage(b6Img);
  b6.scale = 0.1;
  b6.visible =false;
  b7 = createSprite(500,250,30,20);
  b7.addImage(b7Img);
  b7.scale = 0.05;
  b7.visible = false;
  key = createSprite(500,310,30,20);
  key.addImage(keyImg);
  key.scale = 0.15;
  key.visible = false;
  c1 = createSprite(120,254,30,20);
  c1.addImage('cClose', c1Img);
  c1.scale = 0.5;
  c1.visible = false;
  c2 = createSprite(120,260,30,20);
  c2.addImage(c2Img);
  c2.visible = false;
  c2.scale = 0.21;
  c3 = createSprite(814,254,30,20)
  c3.addImage(c1Img);
  c3.scale = 0.5;
  c3.visible = false;
  c4 = createSprite(814,254,30,20)
  c4.addImage(c2Img);
  c4.scale = 0.21;
  c4.visible = false;
  books = createSprite(122,241,30,20);
  books.addImage(booksImg);
  books.scale = 0.5;
  books.visible = false;
  books2 = createSprite(818,241,30,20);
  books2.addImage(booksImg);
  books2.scale = 0.5;
  books2.visible = false;
}

function draw() {
  background(0, 0, 0);  

if (mousePressedOver(bg) && gameState === "welcome") {
  bg.changeAnimation('bg2', bg2);
  bg.scale = 3;
  b1.visible = true;
  b2.visible = true;
  b3.visible = true;
  b4.visible = true;
  b5.visible = true;
  b6.visible = true;
  b7.visible = true;
if (mousePressedOver(b4)) {
  key.visible = true;
  b4.destroy();
    gameState = "level1";
  }
  if (mousePressedOver(b1)) {
    b1.destroy();
  }
  if (mousePressedOver(b2)) {
    b2.destroy();
  }
  if (mousePressedOver(b3)) {
    b3.destroy();
  }
  if (mousePressedOver(b5)) {
    b5.destroy();
  }
  if (mousePressedOver(b6)) {
    b6.destroy();
  }
  if (mousePressedOver(b7)) {
    b7.destroy();
  }
}

if(gameState === "level1" && mousePressedOver(key)){
  bg.changeAnimation('bg3', bg3);
  key.x = 105;
  key.y = 321;
  key.depth = c2.depth+1;
  key.visible = false;
  b1.destroy();
  b2.destroy();
  b3.destroy();
  b5.destroy();
  b6.destroy();
  b7.destroy();
  c1.visible = true;
  c3.visible = true;
  gameState = "level2";
}
if(mousePressedOver(c1)&& gameState === "level2"){
 c1.visible = false;
  c2.visible = true;
  key.visible = true;
  books.visible = true;

  gameState = "level3"
}
if(mousePressedOver(c3)&& gameState === "level2"){
  c3.visible = false;
   c4.visible = true;
   books2.visible = true;
 }
 if (mousePressedOver(key)&& gameState === "level3") {
   c1.destroy();
   books2.destroy();
   books.destroy();
   c2.destroy();
   c3.destroy();
   c4.destroy();
   key.destroy();
   s1.visible = true;
   s2.visible = true;
   s3.visible = true;
   s4.visible = true;
   bg.changeAnimation('bg4', bg4);
   bg.scale = 0.75;
   player.changeAnimation('player2', player2);
   player.scale = 2;
 
 }

  drawSprites();
}