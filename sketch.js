const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;

var ground;
var bgImg;
var fruitImg;
var basketImg;
var ball;
var rope;

function preload() {
  bgImg = loadImage("background.png")
  fruitImg = loadImage("melon.png")
  basketImg = loadImage("basket.png")  
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground()

  ball = Bodies.circle(50,200,20)
  World.add(world,ball)

  rope = new Rope(this.ball,{x:100,y:100})
  
}

function draw() 
{
  background(bgImg);
  Engine.update(engine);

  ground.display()

  imageMode(CENTER)
  image(fruitImg,ball.position.x,ball.position.y,40,40)

  basketImg.scale = 0.025
  image(basketImg,450,270)

  rope.display()
}

function mouseDragged() {
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased() {
  rope.fly()
}

