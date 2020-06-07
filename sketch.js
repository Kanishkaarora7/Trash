const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var groundClass
var trashClass
var chainClass 
var dustbinClass

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
groundClass=new ground(600,390,1200,20)
trashClass=new Trash(20,20)
chainClass=new Chain(trashClass.body,{x:200,y:50})
dustbinClass=new Dustbin(1970,370,20,40);
}
function draw(){
    background(225);
    Engine.update(engine);
 groundClass.display();
 trashClass.display(); 
 dustbinClass.display();
 chainClass.Show();

}
function mouseDragged(){
    trashClass.body.position.x=mouseX
   trashClass.body.position.y=mouseY  
}
function mouseReleased(){
    chainClass.chain.bodyA=null
}
