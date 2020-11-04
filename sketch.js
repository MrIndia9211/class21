var fixedRect, movingRect;
var go1,go2,go3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(200,200,80,30);
  go1.shapeColor = "yellow";
  go1.velocityX = 1;

  go2 = createSprite(300,200,80,30);
  go2.shapeColor = "yellow";
  go2.velocityX = -1;

  go3 = createSprite(400,200,80,30);
  go3.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,go2)){ 
  movingRect.shapeColor = "red";
  go2.shapeColor = "red";
}

else{
  movingRect.shapeColor = "green";
  go2.shapeColor = "green";

}
  bounceOff (go1,go2);

  drawSprites();
}



