//Create class for each stem
class stem {
  constructor(xpos) {
    this.x = xpos;
    this.y = 400;
  }

  //Update position of the flower every frame
  update() {
    this.x += random(-3, 3); //randomly displaces the flower a little
    this.y += -1; //flower grows upward
  }

  //Restart stem when flower reaches top
  checkEnd() {
    if (this.y < -15) {
      this.y = 400;
      //the x Position remains the same as where the flower ended, meaning that the flower starts from a different position from where it started the last time
    }
  }

  drawCircle() {
    stroke(0);

    //give random color to the flower every frame
    let x = random(1, 255);
    let y = random(1, 255);
    let z = random(1, 255);
    fill(x, y, z);

    //draw the flower
    ellipse(this.x, this.y, 10, 30);
    ellipse(this.x, this.y, 30, 10);
    circle(this.x, this.y, 10);
  }
}

//Creating 8 stems from the class constructed above
let stem1 = new stem(200);
let stem2 = new stem(23);
let stem3 = new stem(350);
let stem4 = new stem(234);
let stem5 = new stem(40);
let stem6 = new stem(80);
let stem7 = new stem(300);
let stem8 = new stem(60);

function setup() {
  createCanvas(400, 400);
  background(0); //making sure bg is not erased to retain the flower's path
}

//draw all the stems
function draw() {
  stem1.update();
  stem1.checkEnd();
  stem1.drawCircle();

  stem2.update();
  stem2.checkEnd();
  stem2.drawCircle();

  stem3.update();
  stem3.checkEnd();
  stem3.drawCircle();

  stem4.update();
  stem4.checkEnd();
  stem4.drawCircle();

  stem5.update();
  stem5.checkEnd();
  stem5.drawCircle();

  stem6.update();
  stem6.checkEnd();
  stem6.drawCircle();

  stem7.update();
  stem7.checkEnd();
  stem7.drawCircle();

  stem8.update();
  stem8.checkEnd();
  stem8.drawCircle();
}
