class Bird{
    constructor(x,y){
        var options = {
            
            restitution:0.8
          }
          
          this.body = Bodies.rectangle(x,y,70,70,options)
          this.width = 70
          this.height = 70
          World.add(world,this.body)
    }
    display(){
        var pos =this.body.position
        pos.x=mouseX
        pos.y=mouseY
        var angle =this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4) 
        stroke("white")
        fill("red")
        rect(0,0,this.width,this.height)
        pop();
    }
}
