function setup() {
  createCanvas(800,400);
  
   //car sprite
   car1 = createSprite(765,50,20,10)
   car2 = createSprite(765,150,20,10)
   car3 = createSprite(765,250,20,10)
   car4 = createSprite(765,350,20,10)
  
   //staringline
  startline1 = createSprite(800, 50, 50, 50);
  startline2 = createSprite(800, 150, 50, 50);
  startline3 = createSprite(800, 250, 50, 50);
  startline4 = createSprite(800, 350, 50, 50);
  
  //divider
  divider1 = createSprite(800,100,12000,5)
  divider2 = createSprite(800,200,12000,5)
  divider3 = createSprite(800,300,12000,5)
 
}

function draw() {
  background("black");
  
  //moving the car
  car1.velocityX = -3
  car2.velocityX = -4
  car3.velocityX = -2
  car4.velocityX = -7

  drawSprites();
}