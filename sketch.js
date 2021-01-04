const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var child,childimg;
var wall1,wall2,wall3,wall4,wall5,wall6;
var wall7,wall8,wall9,wall10,wall11,wall12;
var wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28;

var edges;

function preload(){
  childimg=loadImage("child img.jpg");
}


function setup() {
  createCanvas(displayWidth,displayHeight-170);
  engine=Engine.create();
  world=engine.world;

  child=createSprite(displayWidth-100,100,30,30); 
  child.addImage(childimg);
  child.scale=0.09;

  wall1=new wall(displayWidth-100,300,30,100);
  wall2=new wall(displayWidth-200,300,30,100);
  wall3=new wall(displayWidth-300,300,30,100);
  wall4=new wall(displayWidth-400,300,30,100);
  wall5=new wall(displayWidth-500,300,30,100);
  wall6=new wall(displayWidth-600,300,30,100);
  
  wall7=new wall(300,300,30,100);
  wall8=new wall(200,300,30,100);
  wall9=new wall(700,300,30,100);
  wall10=new wall(600,300,30,100);
  wall11=new wall(500,300,30,100);
  wall12=new wall(400,300,30,100);

  wall13=new wall(displayWidth-100,200,100,30);
  wall14=new wall(displayWidth-250,200,100,30);
  wall15=new wall(displayWidth-400,200,100,30);
  wall16=new wall(displayWidth-550,200,100,30);
  wall17=new wall(displayWidth-700,200,100,30);
  wall18=new wall(displayWidth-850,200,100,30);  
  wall19=new wall(displayWidth-1000,200,100,30);
  wall20=new wall(displayWidth-1250,200,200,30);
  
  wall21=new wall(displayWidth-100,400,100,30);
  wall22=new wall(displayWidth-250,400,100,30);
  wall23=new wall(displayWidth-400,400,100,30);
  wall24=new wall(displayWidth-550,400,100,30);
  wall25=new wall(displayWidth-700,400,100,30);
  wall26=new wall(displayWidth-850,400,100,30);  
  wall27=new wall(displayWidth-1000,400,100,30);
  wall28=new wall(displayWidth-1250,400,200,30);
  

}

function draw() {
background(180);
//Engine.update(engine);
child.velocityY=0;
child.velocityX=0;

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();

wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();

wall13.display();
wall14.display();
wall15.display();
wall16.display();
wall17.display();
wall18.display();
wall19.display();
wall20.display();

wall21.display();
wall22.display();
wall23.display();
wall24.display();
wall25.display();
wall26.display();
wall27.display();
wall28.display();


if(keyDown("DOWN_ARROW")){
child.velocityY=2;
child.velocityX=0;  
} 
if(keyDown("UP_ARROW")){
  child.velocityY=-2;
  child.velocityX=0;  
  }
  if(keyDown("LEFT_ARROW")){
    child.velocityX=-2;
    child.velocityY=0;  
    } 
    if(keyDown("RIGHT_ARROW")){
      child.velocityX=2;
      child.velocityY=0;  
      }

edges=createEdgeSprites();
child.bounceOff(edges);

drawSprites();
}