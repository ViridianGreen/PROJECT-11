var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;





function preload(){
  pathImg = loadImage("background.jpg");
  boyImg = loadAnimation("blackcat1.png","blackcat2.png");
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityX = -4;
path.scale=0.75

//creating boy running
boy = createSprite(70,340,80,80);
boy.scale=0.5;
boy.addAnimation("catRunning",boyImg);




topBoundary=createSprite(0,80,800,200)
topBoundary.visible = false
  

leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false


// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityX = -4;
  
  boy.y = World.mouseY;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(topBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.x < 42 ){
    path.x = width/2;
  }

  if(topBoundary.x > 400 ){
   
  topBoundary.x = width/2;
  }

  /*if(path.y > 400 ){
path.y = height/2;}*/

/*if(path.y > 400 ){path.y = height/2;}*/

  
  drawSprites();
}


