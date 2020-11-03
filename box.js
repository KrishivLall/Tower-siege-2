class Box{
    constructor(x, y, width, height, color) {
      this.visiblilty = 225
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/brick.png");
        World.add(world, this.body);
        this.color = color;

      }

      display(){
        if(this.body.speed < 3){      
         box.display();   
       }

       else{
        World.remove(world,this.body)
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }

        var angle = this.body.angle;
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill(this.color);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}