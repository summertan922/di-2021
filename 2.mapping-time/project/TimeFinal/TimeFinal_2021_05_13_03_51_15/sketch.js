
let daysAngle; 
let monthsAngle; 
let seasonsAngle;  
let hueAngle; 
var now = clock()
let secondHand;
let minuteHand;
let hourHand;





function setup() {
  createCanvas(400, 400, WEBGL);
 // background(255,100,100,10);
angleMode(DEGREES);

}

function draw() {
  background(100,190,230);
  stroke(255);
 
  getTime();
  drawDays();
  drawMonths();
  drawSeasons(); 
  
  secondHand = map(second(), 0, 60, 0, 2*PI);
  minuteHand = map(minute(), 0, 60, 0, 2*PI);
  hourHand = map(hour()*60+minute(), 0, 1440, 0, 2*PI);
  translate(width/2, height/2);
  noFill();
	
	strokeWeight(16);
	stroke(240,203,183);
  //ellipse(0,0,420,420);
  push();
	
	noStroke();
  rotate(hourHand*2);
  fill(151,82,63);
  ellipse(0,-100,130,130);
  pop();
  push();
	
	noStroke();
  rotate(minuteHand);
  fill(249,129,42);
  ellipse(0,-150,100,100);
  pop();
  push();
	
	noStroke();
	 rotate(secondHand);
  fill(247,174,143);
  ellipse(0,-200,90,90);
	
 
  pop();
  
 
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