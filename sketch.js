var fixed, moving;

function setup() {
  createCanvas(1200,800);
  object1 = createSprite(200, 400, 50, 80);
  object1.shapeColor = "green";
  object1.debug = true;
  object2 = createSprite(400,400,80,30);
  object2.shapeColor = "green";
  object2.debug = true;
  fixed = createSprite(400, 100, 50, 80);
  fixed.shapeColor = "green";
  fixed.debug = true;
  moving = createSprite(400, 800,80,30);
  moving.shapeColor = "green";
  moving.debug = true;

  moving.velocityY = -5;
  fixed.velocityY = +5;
}

function draw() {
  background(0,0,0);  
object1.x=World.mouseX;
object1.y=World.mouseY;
  bounce(moving,fixed);
  if(touch(object1,object2)){
    object1.shapeColor="red";
    object2.shapeColor="red";
  }
else{
  object1.shapeColor="green";
    object2.shapeColor="green";
}
 
  drawSprites();
}