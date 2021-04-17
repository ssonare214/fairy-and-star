
var movingRect , fixedRect ;
var gam1,gam2,gam3,gam4;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor="cyan";

  fixedRect = createSprite(200,200,50,80);
  fixedRect.shapeColor="cyan";
  gam1=createSprite(100,100,50,50);
  gam1.shapeColor="cyan";
  gam2=createSprite(200,100,50,50); 
  gam2.shapeColor="cyan";
  gam3=createSprite(300,100,50,50);
  gam3.shapeColor="cyan";
  gam4=createSprite(400,100,50,50); 
  gam4.shapeColor="cyan";
}

function draw() {
  background(0); 
  
  movingRect.x= mouseX;
  movingRect.y= mouseY;

  if (isTouching(movingRect,gam3)){
    movingRect.shapeColor="red";
  gam3.shapeColor="red";
  }
  else{
    movingRect.shapeColor="cyan";
    gam3.shapeColor="cyan";
  }
  drawSprites();
}
