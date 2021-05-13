

function setup() {
  createCanvas(600, 500);
  background(255);
  angleMode(DEGREES);
}

function draw() {

  background(255);

  let h = hour();
  let min = minute();
  let s = second();
  let w = map(s, 0, 60, 100, 500);
  let v = map(min, 0, 60, 400, 100);
  let x = map(h % 12, 0, 12, 0, 360);

  strokeWeight(2);
  stroke(200);

  line(100, 125, 500, 125);
  line(100, 150, 500, 150);
  line(100, 175, 500, 175);
  line(100, 200, 500, 200);
  line(100, 225, 500, 225);
  line(100, 250, 500, 250);
  line(100, 275, 500, 275);
  line(100, 300, 500, 300);
  line(100, 325, 500, 325);
  line(100, 350, 500, 350);
  line(100, 375, 500, 375);

  noFill();
  strokeWeight(5);
  translate(300, 250);
  rotate(-90);
  stroke('#dc2543');
  arc(0, 0, 250, 250, 0, x);
  resetMatrix();

  stroke('#1ea09e')
  line(100, 200, w, 200);
  stroke('#004e6d');
  line(300, v, 300, 400);
  stroke(0);
  rect(100, 100, 400, 300);


}
