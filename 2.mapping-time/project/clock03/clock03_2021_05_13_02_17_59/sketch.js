let secondHand;
let minuteHand;
let hourHand;
let color1;
let color2;



function setup() {
   createCanvas(500, 500);
	color1 = color(198,121,93);
	color2 = color(72, 53, 46);
}

function draw() {
	
	let colorRange = map(mouseX, 0, width, 0, 1);
	let bgColor = lerpColor(color1, color2, colorRange);
	
	background(bgColor);
	
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
  fill(224,163,75);
  ellipse(0,-150,100,100);
  pop();
  push();
	
	noStroke();
	 rotate(secondHand);
  fill(217,174,143);
  ellipse(0,-200,90,90);
	
 
  pop();
  
  
}