
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var groundObj;
var leftSide;
var rightSide;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;	

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1350,600,20,120);
	

	var ball_options = {
		isStatic : false,
		restitution: 0.3,
		friction:0,
		density:1.2
	};	
  
	ball = Bodies.circle(260, 100, 20, ball_options);
	World.add(world, ball)
   

	rectMode(CENTER);
	ellipseMode(RADIUS);	

}

function keyPressed(){
	if(keyCode === 	UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
	}
}

function draw() {

  background(0);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);
}


  

  
 




