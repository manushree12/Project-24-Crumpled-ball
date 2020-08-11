
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	ground = new Ground(500, 475, 1500, 20);
	ball = new Ball(100, 473, 30);

	dustbin1 = new Dustbin(800, 415, 20, 100);
	dustbin2 = new Dustbin(1000, 415, 20, 100);
	dustbin3 = new Dustbin(900, 455, 200, 20);

	Engine.run(engine);
	keyPressed();

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  ball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:175, y:-175});
	}
}



