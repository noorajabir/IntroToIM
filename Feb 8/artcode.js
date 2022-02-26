function setup() {
  createCanvas(400, 400);
  background(144, 12, 63);
  
  //initial variable values
  let x = 0; //x is the x position
  let y = 0; //y is the y position
  let green = 230; //in order to set the color to green
  noFill();
  
  while (green > 0) //when green is 0, the color is deep red
    
  //creating ellipses
    for (y = 0; y < 500; y = y + 1) {
      stroke(153, green, 0);
      ellipse(200, y, y + 2, 1);
      ellipse(x - 32, y + 21, 1, 1)
      ellipse(400, y, y, x);
      ellipse(y, x, y, y + 39);
      ellipse(x, y, y, y - 100);
      ellipse(x + 20, y - 10, y, 700);
      ellipse(x, 500, y, 200);
      ellipse(400,250, x, y-600)
      circle(green,green,x)

      green = green - 0.5; //changing the green towards red gradient
      x = x + 2;
    }
  }
}
