function setup() {
  createCanvas(700, 1300)
}

function draw(){
  var now = clock()
  translate(100,100)
  background(0)
  noStroke()
  fill(230,210,220);

  var a = now.text.time
  var b = now.text.date
  

  
  // choose the spacing parameters for the grid
  var colSpacing = 100
  var rowSpacing = 100
  var d1 = 80
 
  
  // determine the layout of the grid
  var totalCells = 12
  var numColumns = 4
  var numRows = ceil(totalCells/numColumns)
  
  
  _.times(numRows, r => {
   
    _.times(numColumns, c => {
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing

      // var grey = map(r, 0, numRows, 0, 255)
      // fill(grey)
   
      if (cellNumber < now.hour){
        rect(x, y, d1,d1)
        fill(230,210,220);
      }else if (cellNumber < totalCells){
        rect(x, y, d1,d1)
        fill(150,230,220);
      }
    
    })

  })
  

  var colSpacing2 = 50
  var rowSpacing2 = 50
  var totalCells2 = 30
  var numColumns2 = 6
  var numRows2 = ceil(totalCells2/numColumns2)
  var d2 = 40
  
   _.times(numRows2, r => {
   
    _.times(numColumns2, c => {
      var cellNumber = r*numColumns + c
      var x2 = c * colSpacing2 + width/14
      var y2 = r * rowSpacing2 + height/4

      if (cellNumber < now.min){
        rect(x2, y2, d2,d2)
        fill(230,210,220);
      }else if (cellNumber < totalCells2){
        rect(x2, y2, d2,d2)
        fill(150,230,220);
      }
    
    })

  })
  
    var colSpacing3 = 50
  var rowSpacing3 = 50
  var totalCells3 = 60
  var numColumns3 = 6
  var numRows3 = ceil(totalCells3/numColumns3)
  var d3 = 20
  
   _.times(numRows3, r => {
   
    _.times(numColumns3, c => {
      var cellNumber = r*numColumns + c
      var x3 = c * colSpacing3 + width/11
      var y3 = r * rowSpacing3 + height/2

      if (cellNumber < now.sec){
        rect(x3, y3, d3,d3)
        fill(230,210,220);
      }else if (cellNumber < totalCells3){
        rect(x3, y3, d3,d3)
        fill(150,230,220);
      }
    
    })

  })
  
  fill(255)
  text(a+ " / "+ b, 20,620) 
  textSize(30)

}