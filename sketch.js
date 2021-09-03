var climber,climberImg, attacker, attackerImg;
var scene,sceneImg, ladder,ladderImg;
var scorepoint=0;
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
//sceneImg= loadAnimation("imported piskel.gif");
climberImg=loadAnimation("111.png","222.png");
//attackerImg= loadAnimation("imported piskel(2).gif");
loadImage= loadImage("ladder.png");

}



function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
scene=createSprite(width/2,200);
//scene.addAnimation("bla",sceneImg);
scene.velocityY = 4;
ladder=createSprite(width/2,200);
ladder.addImage(ladderImg);
ladder.velocityY = 4;


//creating boy running
climber = createSprite(width/2,height-20,20,20);
climber.addAnimation("nothing",climberImg);
climber.scale=0.08;
  
  
attackerG=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  
  edges= createEdgeSprites();
  climber.collide(edges);
  
  //code to reset the background
  if(scene.y > height ){
    scene.y = height/2;
  }
  
    createAttacker();


    if (attackerG.isTouching(boy)) {
      attackerG.destroyEach();
      gameState=END;
      attackerG.setVelocityYEach(0);
    }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("score: "+ scorepoint,width/7,height-550);
}

}

function createAttacker() {
  if (World.frameCount % 200 == 0) {
   attacker = createSprite(Math.round(random(50, width-50),40, 10, 10));
  //attacker.addAnimation(attackerImg);
  attacker.scale=0.12;
  attacker.velocityY = 3;
  attacker.lifetime = 170;
  attackerG.add(attacker);
  }
}



