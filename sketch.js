var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);
  car = createSprite(100, 200, 40, 20);
  wall = createSprite(750, 200, 20, 400);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;  
  deformation = 0.5*weight*speed*speed/22500
  
}

function draw() {
  background("black"); 

  if(car.collide(wall)){
    if(deformation > 180 ){
      car.shapeColor = color(255,0,0)

    }
    if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230,255,0)
    } 
    if(deformation < 100){
      car.shapeColor = color(0,255,0)
    }
  } 
  drawSprites();
  
}