class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    
    World.add(world, this.body);

    // 09) matriz da trajetória - puxa posições onde bola passou
  }

  shoot() {
   var newAngle = cannon.angle - 28;
    newAngle = newAngle *(3.14/180)
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)})
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    // 10) if -> vel > 0 e posição x > 300z
        // 11) var posi = [    this.body.posi.x,     this.,body.posi,y     ]
        // 12) this.trajetoria.push(posi)

    // 13) for desenha bola em cada posição da lista
  }
}
