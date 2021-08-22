const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerBase1, playerBase1, player1, computerplayer1;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBase1 = new PlayerBase(300, random(450, height - 300), 180, 150);
  player1  = new Player(285, playerBase1.body.position.y-153, 50, 180);
  computerBase1 = new ComputerBase(600, random(450, height - 300), 180, 150);
  computerplayer1 = new ComputerPlayer(585, computerBase1.body.position.y-153, 50, 180);
  
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  playerBase1.display();
  computerBase1.display();

   //display Player and computerplayer
   computerplayer1.display();
   player1.display();

}
