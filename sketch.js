






var ship1;
var sea;


function preload(){
Sea =loadImage("sae.png");

ship=loadImage("ship-1.png",);



}


function setup(){
  createCanvas(400,400);
  
  ship = createSprite(50, 160, 20, 50);
  
  ship.scale = 0.5;
  
  sea = createSprite(200, 180, 400, 20);
  sea.x = ground.width / 2;
  
}


function draw() {
  background("blue");
   
  

  

  drawSprites();

 
}
