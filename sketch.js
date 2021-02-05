

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redgrp,bluegrp,pinkgrp,greengrp,arrowgrp;
var play;
var end; 
var gameState=play;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0;
  redgrp=createGroup();
   bluegrp=createGroup();
   pinkgrp=createGroup();
  greengrp=createGroup();
  arrowgrp=createGroup();
 
  
}

function draw() {

  // moving ground
    background.velocityX = -3 

   
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
 
  
 
  
  if(gameState === play){
     if (background.x < 0){
      background.x = 600;
    }
     var select_balloon = Math.round(random(1,4));
     if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
    
    
  }
    else if(gameState === end){
    background.x = 0;
   redgrp.destroy();
   bluegrp.destroy();
   pinkgrp.destroy();
   greengrp.destroy();
   fill("black")
   textSize(18);
   text("GAME OVER",300,300)
    
  }

 /* if(redgrp.isTouching(arrowgrp) ||(bluegrp.isTouching(arrowgrp)) ||(pinkgrp.isTouching(arrowgrp)||(greengrp.isTouching(arrowgrp)))){
   score=score+1;
   redgrp.destroyEach();
   bluegrp.destroyEach();
   pinkgrp.destroyEach();
   greengrp.destroyEach();
   }*/
 
   if(redgrp.isTouching(arrowgrp)){
     redgrp.destroyEach();
      score=score+1;
   }
  if(bluegrp.isTouching(arrowgrp)){
     bluegrp.destroyEach();
      score=score+1;
   }
  if(pinkgrp.isTouching(arrowgrp)){
     pinkgrp.destroyEach();
      score=score+1;
   }
  if(greengrp.isTouching(arrowgrp)){
    greengrp.destroyEach();
      score=score+1;
   }
  
  drawSprites();
    fill("yellow")
    textSize(22);
    text("Score: "+ score, 500,50);
}
  

function redBalloon() {
  var red = createSprite(0,Math.round(random(30, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 4;
  red.lifetime = 200;
  red.scale = 0.1;
  redgrp.add(red);
  red.setCollider("circle",0,-5,20);
  red.debug=false;
  return red;

  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 4;
  blue.lifetime = 200;
  blue.scale = 0.1;
  bluegrp.add(blue);
  blue.setCollider("circle",0 ,-5 ,20);
  blue.debug=false;
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 4;
  green.lifetime = 200;
  green.scale = 0.1;
  greengrp.add(green);
  green.setCollider("circle",0 ,-5,20);
  green.debug=false;
  return green; 
 
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX =4;
  pink.lifetime = 200;
  pink.scale = 1
  pinkgrp.add(pink);
  pink.setCollider("circle",0 ,-5,20);
  pink.debug=false;
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -10;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowgrp.add(arrow);
  return arrow;
   
}
