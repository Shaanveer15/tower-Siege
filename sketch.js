const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box,box2,box3, box4,box5;
var ground;
var polygon;
var slingshot;
function setup(){

    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    ground1 = new Ground(600,400,240,20);

    box1 = new Box(620,310,40,40);
    box2 = new Box(610,320,40,40);
    box3 = new Box(600,320,40,40);
    box4 = new Box(610,310,40,40);
    box5 = new Box(610,310,40,40);
    polygon=new Box(200,400,40,40);
    slingshot= new SlingShot(polygon,{x:200,y:400});
}
function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    ground1.display();
    polygon.display();
    slingshot.display();
}