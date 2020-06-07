class  Dustbin {
    constructor(x,y,width,height){
       
    
      
       
        var ground_options ={
            restitution:1.0
        }
    
        this.body = Bodies.rectangle(x,y,20,50,ground_options);
        this.width=20;
        this.height=50;
     
        World.add(world,this.body);
    
    }
    
  display(){
       push ()
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       rectMode(CENTER)
       fill('yellow')
      stroke ('red')
       rect(1970,370,this.width,this.height);
    pop ()
} 
}
       
    