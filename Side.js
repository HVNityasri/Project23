class Side {
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.sideObject=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.sideObject);
        this.width=width;
        this.height=height;
    }

    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.sideObject.position.x,this.sideObject.position.y,this.width,this.height)
    }
}