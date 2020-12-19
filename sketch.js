var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55, 90);
  weight=random(400, 1500);
  
  car=createSprite(50, 200, 50, 30);
  car.velocityX = speed;
 
  wall=createSprite(1500, 200, 60, height/2); 

 
  
}

function draw() {
  background("black"); 
  car.shapeColor="white";
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;
    wall.shapeColor=color(80, 80, 80);
var deformation=0.5* weight* speed* speed / 22509
    if(deformation > 180){
      car.shapeColor=color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor=color(230, 230, 0);
    }
    if(deformation < 100){
      car.shapeColor=color(0, 255, 0);
    }
  }
  
  
  drawSprites();
}
function collide(car, wall){
if(object1.x-object2.x<object2.width/2+object1.width/2
  &&object2.x-object1.x<object1.width/2+object2.width/2){
    object1.velocityX=object1.velocityX=0
    object2.velocityX=object2.velocityX=0
      }
  if(object1.y-object2.y<object2.width/2+object1.width/2
  &&object2.y-object1.y<object1.width/2+object2.width/2){
    object1.velocityY=object1.velocityY=0
    object2.velocityY=object2.velocityY=0
      }
}