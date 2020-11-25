
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;

function preload()
{
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 650)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
  boy = createSprite(200,580,30,100);
  boy.addImage(boyimg);
  boy.scale=0.09;

	tree = new Tree(570,390);
	stone = new Stone(150,500);
	mango1 = new Mango(720,270);
	mango2 = new Mango(800,200);
	mango3 = new Mango(660,350);
	mango4 = new Mango(900,230);
	mango5 = new Mango(880,350);
	mango6 = new Mango(780,330);
	mango7 = new Mango(830,260);
	mango8 = new Mango(720,190);
	mango9 = new Mango(640,270);
	mango10 = new Mango(940,300);
	chain = new Chain(stone.body,{x:150,y:530});
	ground=Bodies.rectangle(50,640,8000,20,{isStatic:true});
	World.add(world,ground)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  boy.display();
  tree.display();
  stone.display();
  chain.display();
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

  detectollisition(stone,mango1);
  detectollisition(stone,mango2);
  detectollisition(stone,mango3);
  detectollisition(stone,mango4);
  detectollisition(stone,mango5);
  detectollisition(stone,mango6);
  detectollisition(stone,mango7);
  detectollisition(stone,mango8);
  detectollisition(stone,mango9);
  detectollisition(stone,mango10);

  fill("brown")
  rect(ground.position.x,ground.position.y,8000,20)

  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

	function mouseReleased(){
	chain.fly()
  }
  
  function keyPressed(){
    if(keyCode=32){
      Matter.Body.setPosition(stone.body,{x:235,y:430})
      chain.attach(stone.body);
    }
  }