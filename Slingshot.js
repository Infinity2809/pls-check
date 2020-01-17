class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image = loadImage("sprites/sling1.png");
        this.image1 = loadImage("sprites/sling2.png");
        this.image2 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA=body;
    }
    display(){
        image(this.image,200,25);
        image(this.image1,170,15)
         
        if(this.sling.bodyA){                                                                                                                                                                                                                                                                                                                               
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
         
            stroke(48, 22, 8 )
            if(pointA.x>175&&pointA.x<210){
                strokeWeight(6);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-5);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-15);
            image(this.image2,pointA.x-25,pointA.y,20,20);
            }
          else {
              strokeWeight(3);
              line(pointA.x-20, pointA.y, pointB.x-10, pointB.y-5);
              line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-15);
              image(this.image2,pointA.x-25,pointA.y,20,20);
          }  
        }
    }
    
}