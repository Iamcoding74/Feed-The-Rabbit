var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg,leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
  leafImg=loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var k=Math.round(random(1,2));
if(frameCount%60===0){
  if(k===1){
    spawnApples();
  }
if(k===2){
  spawnLeaf();
}
}
  
  
  drawSprites();
}

function spawnApples(){
  apple=createSprite(Math.round(random(10,380)),-20);
  apple.addImage(appleImg);
  apple.lifetime=200;
  apple.velocityY=5;
  apple.scale=0.08
}
function spawnLeaf(){
  leaf=createSprite(Math.round(random(10,380)),-20);
  leaf.addImage(leafImg);
  leaf.lifetime=200;
  leaf.velocityY=5;
  leaf.scale=0.08
}


