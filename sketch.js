var ground,lander,landerImage,bgImage;
var gravity=0.05;
var vx=0;
var vy=0;

var invisiblebody;
function preload(){
  landerImage = loadImage("aircraft.png");
  bgImage = loadImage("moon.png");
}
function setup() {
  createCanvas(1000,700);
  lander = createSprite(100, 50, 50, 50);
  lander.scale=0.2
   lander.addImage(landerImage)

   invisiblebody = createSprite(350,680,700,10)

}

function draw() {
  background(255,255,255);
  image(bgImage,0,0) 
  vy=vy+gravity
  lander.position.y+=vy 

  lander.collide(invisiblebody)
  drawSprites();
}