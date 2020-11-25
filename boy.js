class Boy {
  constructor(x, y) {
    var options = {
       isStatic:true
    }
    this.body = Bodies.rectangle(x, y, 150, 250, options);
    this.width = 150;
    this.height = 250;

    World.add(world, this.body);
    this.image = loadImage("boy.png");
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};
