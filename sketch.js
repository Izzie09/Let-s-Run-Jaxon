var path;
var boy;
var invisibleRight;
var invisibleLeft;

  function preload(){
    //pre-load images
    pathImg = loadImage("path.png");
    boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  }

  function setup(){
    createCanvas(400,400);
    //create sprites here
    path = createSprite(200,200);
    path.addImage(pathImg);
    path.velocityY = 4;
    path.scale = 1.2;
    
    boy = createSprite(200,200,50,50);
    boy.addAnimation("running",boyImg);

    invisibleRight = createSprite(400,0,100,800);
    invisibleRight.visible = false;

    invisibleLeft = createSprite(0,0,100,800);
    invisibleLeft.visible = false;
  }
  
  function draw() {
    background(0);
    boy.x = World.mouseX;
    edges = createEdgeSprites();
    boy.collide(edges[3]);
    boy.collide(invisibleRight);
    boy.collide(invisibleLeft);
    if(path.y > 400){
      path.y = height/2;
    }
    drawSprites();
  }
