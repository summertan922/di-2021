
  var now = clock()
  var spacing = 30
  const NUM_CIRCLES =12;


function setup() {
  // set the width & height of the sketch
  createCanvas(400, 600)
  
   let circleSpace = width / NUM_CIRCLES;
  radius = 20
  
}

function draw() {
  background('white')
  noStroke()


  // draw as many circles as the current `now.hours` value
  // using _.times. The first circle's y position should be at 100
  // and each circle below it should be `spacing` pixels below it
  fill(0)
  for (let i = 0; i < NUM_CIRCLES; i+=1) {
    circle(100,(radius/2) + spacing + i*(radius + spacing), 20, now.hours);
  }


  
  // draw as many circles as the current now.min value
  // by creating a list from 0 .. `now.min` using _.range
  // and then stepping through that list using _.each or .forEach
  fill(100)
    for (let i = 0; i < NUM_CIRCLES; i+=1) {
    circle(200,(radius/2) + spacing + i*(radius + spacing), 20, now.min);
    }

  // draw as many circles as the current `now.sec` value
  // using `for (;;){...}` syntax
  fill(200)
    for (let i = 0; i < NUM_CIRCLES; i+=1) {
    circle(300,(radius/2) + spacing + i*(radius + spacing), 20, now.sec);
  
  // Phase 2:
  // Once you've successfully drawn vertical stacks of dots, modify
  // your loops to draw concentric circles whose diameters are 
  // multiples of the `spacing` variable. Switch from using fill()  
  // colors to stroke() colors so we can see all the nested circles
}
    
  
}