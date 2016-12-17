var ball;
var plate;
var breaks = [];
var y = 70;
var bgimage;
var total = 0;
var player;
var lifes = [];
var number = 3;
var bar = [];
var blocks = [];
var slider = document.querySelector('.slider');
var array = [];
var levels = 1;
var powerBall = 0;
var powerLevel = 1;
var powerLimit = 10;
var interfere;
function setup() {
 bgimage = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fornax_Dwarf.jpg/600px-Fornax_Dwarf.jpg");
 canvas = createCanvas(600,600);
  Recetpage();
  ball.xspeed = 0;
  ball.yspeed = 0;

  var posit_x = canvas.width/2 + innerWidth/2 + y;
  var posit_y = innerHeight/2-height/2;

  var button = createButton("Start");
    button.mousePressed(Recetpage);
    button.position(posit_x, posit_y+40);

  var rbutton = createButton("Restart");
    rbutton.mousePressed(Recover);
    rbutton.position(posit_x, posit_y + 110);

  var pause = createButton("Pause");
    pause.mousePressed(Stop);
    pause.position(posit_x, posit_y + 180);
  
  var resume = createButton("Resume");
    resume.mousePressed(Resume);
    resume.position(posit_x,posit_y+ 250);

  $("#toggle").css({top: posit_y+320, left: posit_x, position:'absolute'});
  $(".container").css({top: posit_y+370, left: posit_x, position:'absolute'});
  $("#link").css({top: posit_y+390, left: posit_x, position:'absolute'});
}

function Recetpage(){
  ball = new Ball ();
  plate = new Plate ();
  player = new Game ();
  interfere = new Interferer();
    total = 0;
    levels = 1;
    number = 3;
    powerBall = 0;
    powerLimit = 10;
    powerLevel = 1;
    ball.power = 1;

  for(h = 0; h < 32; h++ ){
    blocks[h] = new Breaks(55+h*70, y, 65);
    blocks[h].color = color(255,255,0);
    blocks[h].lifeLength = 10;
    if (blocks[h].x + blocks[h].length/2 > width){
      blocks[h].y = blocks[h-8].y + 50 ;
      blocks[h].x = blocks[h-8].x;
    }
  }  
  for(j = 0; j < 21; j++ ){
    bar[j] = new Breaks(72.5+j*75, y,50);
    bar[j].color = color(0,255,0);
    bar[j].lifeLength = 5;
    if (bar[j].x + bar[j].length/2 > width){
      bar[j].y = bar[j-7].y + 50 ;
      bar[j].x = bar[j-7].x;
    }
    
  }
  for(i = 0; i < 10; i++ ){
    breaks[i] = new Breaks(55+i*120, y,70);
    breaks[i].color = color(10,150 ,200);
    if (breaks[i].x + breaks[i].length > width){
      breaks[i].y = breaks[i].y + 70 * floor((breaks[i].x + breaks[i].length/2)/width);
      breaks[i].x = breaks[i].x - width * floor((breaks[i].x + breaks[i].length/2)/width);
    }
  }  
  for(i = 0; i < breaks.length; i++){
    array[2] = breaks[i];
  }

  
  
}

function draw() {
  background(bgimage);
  player.lifes();
  player.gameOver();
  player.score();
  player.winGame();
  player.levels();
  player.ballPower();
  ball.display();
  ball.move();
  ball.powBall();
  ball.bounce();
  plate.draw();
  plate.move();
  
  fill(75, 127, 232);
  for(i = 0; i < breaks.length; i++){
    breaks[i].createBreaks();
    ball.distroyLevelOne();
    }
  for(j = 0; j < bar.length; j++){
      array[1] = bar[j];
  for(h = 0; h < blocks.length; h++){
      array[0] = bar[h];
  }
  }
  if(bar.length === 0 && array[1] != undefined){
    array.splice(1,1);
    levels ++ ;
    ball.x = 300;
    ball.y = 560;
    ball.xspeed = 0;
    ball.yspeed = 0;
    plate.x = 300;
  }
  if(breaks.length === 0 && array[2] != undefined){
      array.splice(2,1);
      levels ++ ;
      ball.x = 300;
      ball.y = 560;
      ball.xspeed = 0;
      ball.yspeed = 0;
      plate.x = 300;
  }

  if(breaks.length === 0 && array[2] === undefined){
    for(j = 0; j < bar.length; j++){
      bar[j].createBreaks();
      
      ball.distroyLevelTwo();
    } 
  }
  if(bar.length === 0 && array[1] === undefined){
      interfere.obstacle();
      interfere.interact();
    for(h = 0; h < blocks.length; h++){
      blocks[h].createBreaks();
      
      ball.distroyLevelThree();

    } 

  }

  ball.changeDir();
  if(keyIsDown(LEFT_ARROW)) {
    plate.dir(-1);
  }
  if(keyIsDown(RIGHT_ARROW)) {
    plate.dir(1);
  }  
}
  
function keyReleased (){
  plate.dir(0);
}

function Recover(){
  loop();

Recetpage();
ball.xspeed = 0;
ball.yspeed = 0;

}

function Stop(){
  noLoop();
}

function Resume(){
  loop();
}
function toggleText(){
  $(".container").toggle();
}
