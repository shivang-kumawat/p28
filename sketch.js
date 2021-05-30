
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("js/images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,20);
	mango2=new mango(1000,100,20);
	mango3=new mango(1150,30,30);
	mango4=new mango(1200,150,30);
	mango5=new mango(900,225,30);
	mango6=new mango(990,280,40);
	mango7=new mango(975,217,35);
	mango8=new mango(910,175,10);
	mango9=new mango(1100,185,30);
	mango10=new mango(1260,275,40);

    stone=new Stone(265,438);

	sling = new Sling(stone.body,{x:240,y:425});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);


}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  
  
 
 
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);

  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);

  

  groundObject.display();
  sling.display();
  stone.display();

  console.log(mouseX,mouseY);
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
sling.fly();
}
function detectCollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body,false);

    }
}
function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:250,y:438})
    sling.attach(stone.body); 
  }
}
