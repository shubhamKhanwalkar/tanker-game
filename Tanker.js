class Tanker {
    constructor(x, y, width, height, angle) {
        var options = {
          //isStatic:true,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
       
      }
      display(){
        var angle = this.body.angle;
        var pos =this.body.position;
       // push();
        //translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(BOTTOM,LEFT);
        //pop();
        rect(pos.x, pos.y, this.width, this.height);
      }
}
