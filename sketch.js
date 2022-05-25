const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;


// 01) matriz para guardar balas. MATRIZ PODE GUARDAR OUTRAS
var balls = [];

// 02) EM ARRAY2 -> demonstrar 2 formas de guardar valores em matriz e como acessar

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


  // 07) chamar showCannonBalls em um FOR que envia cada bola para showCannonBalls (listaBolas[i])
  for(var counter = 0; counter == balls.lenght - 1; counter++){
    showCannonBalls(balls[counter]);
  }

  cannon.display();
}

// 03) função keyPressed -> cria novo obj da classe cannonBall na mesma pos cannon
function keyPressed(){
    
    if(keyCode === 32){
      var cannonBall = new CannonBall(cannon.x, cannon.y);
      balls.push(cannonBall);
    }

   
}


// 06) função showCannonBalls( ball )

function showCannonBalls( ball ){
  if(ball){
    ball.display();
  }
}

// 08) função keyReleased -> dispara a bola chamando shoot()

function keyRealesed(){

}

// 09) ALUNO EM CANNONBALL -> criar matriz que puxa posições onde bola passou