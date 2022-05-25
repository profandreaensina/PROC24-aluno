const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;

// 01) matriz para guardar balas


function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImage = loadImage("assets/tower.png");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, { isStatic: true });
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
  World.add(world, tower);

  cannon = new Cannon(180, 110, 130, 100, angle);
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
 

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();


  // 05) chamar showCannonBalls em um FOR que envia cada bola para ela
  for(var counter = 0; counter == balls.lenght - 1; counter++){
    
  }

  cannon.display();
}

// 02) função keyPressed -> cria nova cannonBall na mesma posição do canhão
function keyPressed(){
  
}

// 03) função keyReleased -> dispara a bola chamando shoot()
function keyRealesed(){

}

// 04) função showCannonBalls( ball )
function showCannonBalls( ball ){
  
}

