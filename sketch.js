var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  rabbitImg = loadImage("rabbit.png");
  gardenImg = loadImage("garden.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges=createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX;
  

  drawSprites();
  createApple()
  createOrangeLeaf()
  

}

function createApple() {
  if (frameCount%80===0){
    var apple=createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale=0.1
    apple.velocityY=4
    apple.y=Math.round(random(1,2));
    
  }  
}

function createOrangeLeaf() {
  if (frameCount%80===0){
    var orangeLeaf=createSprite(random(50,350),40,10,10);
    orangeLeaf.addImage(orangeLeafImg);
    orangeLeaf.scale=0.1
    orangeLeaf.velocityY=4
    orangeLeaf.y=Math.round(random(1,2));
  } 
}