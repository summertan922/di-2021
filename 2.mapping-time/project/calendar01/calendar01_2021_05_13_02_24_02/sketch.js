
let daysAngle; 
let monthsAngle; 
let seasonsAngle;  
let hueAngle; 
var now = clock()



function setup() {
  createCanvas(400, 400, WEBGL);
 // background(255,100,100,10);
angleMode(DEGREES);

}

function draw() {
  background(20,140,190);
  stroke(255);
 
  getTime();
  drawDays();
  drawMonths();
  drawSeasons(); 
 
}

function getTime() {
  // day = day();
  // month = month(); 
  // season = season();
  daysAngle = map(now.day, 0, 364, 0, 360); 
  monthsAngle = map(now.month, 0, 11, 0, 360);
  seasonsAngle = map(now.season, 0, 3, 0, 360); 
  hueAngle = map(now.days, 0,365,220,300);
  
  
} 
function drawDays(){
  push();
//rotateZ (secondsAngle);
 // rotateY(secondsAngle);
	fill(38, 66, 83);
  strokeWeight(1);
  rotateZ(daysAngle);
  rotateY(daysAngle);
  box(65);
  pop();
  
}

function drawMonths(){
  push();
  fill(233, 196, 106,70);
  strokeWeight(2);
  rotateZ (monthsAngle);
  rotateY(monthsAngle);
  box(110);
  pop()
  
}

function drawSeasons(){
  push();
  rotate(seasonsAngle); 
  fill(100,250,250,40);
  strokeWeight(3); 
  box(200);
  pop()
  
} 