var ground;
var row1;
var row2;
var row3;
var row4;
var row4;


function preload(){
}

function setup() {
  createCanvas(1200, 400);
  var ball = createSprite(150, 250, 20, 20);
  
 for( var r1=50; r1<400; r1=r1+50 ){
  row1=createSprite(370,r1,10,10)
  
  
  }
 
  for( var r2=50; r2<400; r2=r2+50 ){
  row2=createSprite(390,r2,10,10)
 
  
  }
 
  for( var r3=50; r3<400; r3=r3+50 ){
  row3=createSprite(410,r3,10,10)
  

  }
  
  for( var r4=50; r4<400; r4=r4+50 ){
  row4=createSprite(430,r4,10,10)
  
  }
  
  
  
  
  }
function draw() {
background("black")
 
if (keyDown("ENTER")) {
   

  
 }
  drawSprites();

}

