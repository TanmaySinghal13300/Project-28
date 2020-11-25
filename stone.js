class Stone {
    constructor(x, y) {
      var options = {
         isStatic:false,
         restitution:0.8,
         friction:1,
         density:1.2
      }
      this.body = Bodies.rectangle(x, y, 45, 45, options);
      this.width = 45;
      this.height = 45;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
     
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
  