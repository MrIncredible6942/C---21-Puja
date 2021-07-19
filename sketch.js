const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Body = Matter.Body;
var myEngine;
var myWorld;
var ground, leftWall, rightWall, topWall;
var ball;

var btn1, btn2;

function setup()
{
   //myworld = myenginesworld, always my engine
    createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    btn1 = createImg("right.png");
    btn1.position(100, 30);
    btn1.size(40, 40);
    btn1.mouseClicked(hForce);



    btn2 = createImg("up.png");
    btn2.position(300,30);
    btn2.size(40,40);
    btn2.mouseClicked(vForce);


  
    var ball_options = {
        restitution: 0.8 

    }
    ball = Bodies.circle(100,10,20,ball_options);

    World.add(myWorld, ball);

      //how to create a object out of the class
      ground = new Ground(10, 390, 400, 50);
      leftWall = new Ground(5,10,10,400)
      rightWall = new Ground(390,10,10,400);
      topWall = new Ground(5,1,400,10);





}

function draw()
{
    background("black");
    Engine.update(myEngine)



    ground.display();
    leftWall.display();
    rightWall.display();
    topWall.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20);
}

function hForce()
{
     Body.applyForce(ball,{x: 0, y:0},{x:0.005, y:0 })
}

function vForce()
{
    Body.applyForce(ball,{x: 0, y:0}, {x:0, y:-0.05})
}







