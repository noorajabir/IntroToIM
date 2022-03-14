//Midterm Project, Introduction to Interactive Media Spring 2022.
//All graphics from Canva.com, and sounds from both 
//QuickSounds.com and sounds-mp3.com

//DECLARING VARIABLES

//Game settings
state = 0; //each state is one screen of the game
let statechange; //controls when the state changes
finalImages = []; //result images

//Grind

//wholebeans
wholeBeans = []; //array of beans seen on top of the grinder
randx = []; //random x location of each bean in the grinder
randy = []; //random y location of each bean in the grinder
let amtdisplay; //amount displayed on screen
coffeewidth = 10;
coffeeheight = 15;

//groundbeans
groundBeans = [];
grindsize = 0;
xPos = 0;
yPos = 0;
let coffeeamt; //amount of coffee
let GRINDSIZE; //final grindsize

//slider position
let sliderPos; //X position of slider
coffeeamtpos = [];

//Set temperature
let temperature;

//Brew
pour = 0; //thickness of coffee poruing line
let pouredcoffee; //poured coffee in mug

function preload() {
  grindersound = loadSound("sound.mp3");
  machinesound = loadSound("espressomachine.mp3");
  startimg = loadImage("startimg.png");
  instructions = loadImage("instructions.png");
  loading = loadImage("pre-final.png");
  backgroundimg = loadImage("background.png");
  heartimg = loadImage("heart.png");

  for (var i = 1; i < 7; i++) {
    finalImages[i] = loadImage("final_" + i + ".png");
  }
}

function setup() {
  createCanvas(400, 500);
  background(225);

  for (let i = 0; i < 200; i++) {
    groundBeans[i] = new groundbean(grindsize);
  }
}

function draw() {
  if (state === 0) {
    //cover image
    image(startimg, 0, 0);

    //setting/resetting initial variable values
    sliderPos = 155;
    temperature = 50;
    pouredcoffee = 0;
    coffeeamt = 0;
    statechange = 0;
    amtdisplay = 0;

    for (let i = 0; i < 150; i++) {
      randx[i] = random(160, 241);
      randy[i] = random(90, 140);
    }
  }

  if (state === 1) {
    //main instructions
    image(instructions, 0, 0);
  }

  if (state === 2) {
    const grinderwidth = width / 3;
    const grinderheight = height / 2;

    image(backgroundimg, 0, 0);

    //COFFEE STORAGE BOX
    rectMode(CENTER);
    square(width / 2, 110, 90);

    //coffee beans
    for (let i = 0; i < randx.length; i++) {
      wholebean(randx[i], randy[i]);
      if (grindsize > 0.3) {
        randy[i] += 0.1;
      }
    }

    //instructions
    noStroke();
    fill(225, 225, 225, 210);

    if (coffeeamt === 0 && sliderPos < 157) {
      rect(327, 157, 84, 70);

      fill(0);
      textSize(12);
      textWrap(WORD);
      text("drag the slider to select the amount of coffee", 330, 127, 80);
    }

    if (coffeeamt > 0 && sliderPos >= 155 && grindsize === 0) {
      fill(225, 225, 225, 210);
      rect(65, 240, 84, 37);
      textSize(12);
      fill(0);
      text("select a grind size", 67, 227, 80);
    }

    //coffee storage cover transparent
    fill(225, 225, 225, 80);
    stroke(0);
    square(width / 2, 110, 90);

    fill(189, 178, 175);
    rect(width / 2, height / 2, grinderwidth, grinderheight); //grinder

    //FALLING GROUND BEANS
    for (let i = 0; i < groundBeans.length; i++) {
      groundBeans[i].drawbean();
      groundBeans[i].update();
    }

    //SLIDER
    rectMode(CORNER);
    rect(155, 140, 100, 20);
    for (let i = 0; i < 6; i++) {
      coffeeamtpos[i] = i * 15;
      line(170 + coffeeamtpos[i], 140, 170 + coffeeamtpos[i], 160);
    }
    fill(0);
    rect(sliderPos, 137, 5, 25);

    //fill color
    noStroke();
    fill(137, 59, 42, 100);
    rect(155, 140, sliderPos - 155, 20);

    stroke(0);
    rectMode(CORNER);

    //COFFEE PORTAFILTER
    fill(158, 149, 147);
    rect(170, 360, 60, 25);
    arc(width / 2, 380, 60, 40, 0, radians(180));
    quad(
      width / 2 - 3,
      378,
      width / 2 + 3,
      378,
      width / 2 + 8,
      410,
      width / 2 - 8,
      410
    );
    fill(142, 134, 132);
    circle(width / 2, 410, 15);

    //control box with buttons
    fill(172, 162, 160);
    rectMode(CENTER);
    rect(width / 2, 220, grinderwidth / 2, grinderheight / 2.8); //box
    rect(width / 2, 275, 30, 20); //mouth

    fill(255);

    //GRINDSIZE BUTTONS
    circle(width / 2, 190, 6);
    circle(width / 2, 205, 8);
    circle(width / 2, 223, 10);
    circle(width / 2, 242, 12);

    //DISPLAY COFFEE AMOUNT
    fill(0);
    textSize(10);
    text(amtdisplay, 139, 152);

    fill(255);

    //stopping machine from grinding
    if (grindsize > 0.2) {
      sliderPos -= 0.3;
    }

    if (sliderPos <= 153) {
      grindsize = 0;
      sliderPos = 153;
      grindersound.stop();
    }
    statechange = 2;
    if (sliderPos === 153 && grindsize === 0) {
      setTimeout(delayedstate, 2000);
    }
  }

  if (state === 3) {
    const grinderwidth = width / 4;
    const grinderheight = height / 1.7;
    image(backgroundimg, 0, 0);

    //instructions

    if (temperature === 50) {
      noStroke();
      fill(225, 225, 225, 210);
      rect(327, 167, 84, 60);

      stroke(0);
      fill(0);
      textSize(12);
      textWrap(WORD);
      text("click buttons to change temperature", 330, 145, 80);
    }

    fill(189, 178, 175);
    rectMode(CENTER);
    rect(width / 2, height / 2, grinderwidth, grinderheight); //coffee machine bg
    rect(width / 2, 405, grinderwidth + 20, 20); //stand
    rect(width / 2, 192, grinderwidth + 10, grinderheight / 2.3); //small box
    arc(width / 2, 256, 80, 16, 0, radians(180));

    fill(158, 149, 147);
    rectMode(CORNER);

    //portafilter
    rect(170, 260, 60, 24);
    arc(width / 2, 280, 60, 40, 0, radians(180));
    strokeWeight(pour);
    stroke(98, 40, 27);

    line(width / 2, 318, width / 2, 356);
    stroke(0);

    strokeWeight(1);
    quad(
      width / 2 - 3,
      278,
      width / 2 + 3,
      278,
      width / 2 + 8,
      310,
      width / 2 - 8,
      310
    );
    fill(142, 134, 132);
    circle(width / 2, 310, 15);

    fill(139, 85, 91);
    //cup
    ellipse(232, 365, 30, 30);
    fill(189, 178, 175);
    ellipse(232, 365, 15, 15);
    fill(139, 85, 91);

    rect(172, 345, 60, 26);
    arc(
      202,
      346, // center of the ellipse
      60,
      10, // width and height
      radians(180),
      0
    );
    arc(202, 346, 60, 10, 0, radians(180));

    arc(202, 365, 60, 60, 0, radians(180));

    image(heartimg, 195, 360);

    stroke(98, 40, 27);

    strokeWeight(pour);
    line(width / 2, 336, width / 2, 350);
    stroke(0);

    fill(255);
    strokeWeight(1);
    //buttons
    circle(180, 200, 14);
    circle(220, 200, 14);
    fill(0);
    textAlign(CENTER);
    textSize(14);

    text("-", 180, 203);
    text("+", 220, 203);
    fill(255);

    //display
    rect(183, 221, width / 4 / 3, 18);
    rectMode(CENTER);
    rect(width / 2, 165, grinderwidth / 2, 30);
    fill(0);
    text(str(temperature), width / 2, 170);

    textSize(8);
    text("BREW!", width / 2, 233);
    fill(255);

    if (pour > 0) {
      pour -= 0.01;
    }
    if (pour < 1) {
      pour = 0;
    }

    if (pour < 4 && pour > 0) {
      pouredcoffee = pouredcoffee + 0.02;
    }

    if (pouredcoffee > 3) {
      machinesound.stop();
    }
    stroke(98, 40, 27);
    fill(98, 40, 27);
    arc(202, 350, 45, pouredcoffee, radians(180), 0);
    stroke(0);
    fill(255);

    if (pouredcoffee > 4 && pour === 0) {
      statechange = 3;
      setTimeout(delayedstate, 2000);
    }
  }

  if (state === 4) {
    background(225);

    image(loading, 0, 0);

    setTimeout(changestate, 3000);
    setTimeout(delayedstate, 3000);
  }

  if (state === 5) {
    statechange = 0;
    background(225);
    let result;

    //Checking coffee variables and assessing
    if (coffeeamt < 8) {
      result = 2;
    } //lowcaf

    if (coffeeamt > 10) {
      result = 5;
    } //highcaf

    if (coffeeamt < 11 && coffeeamt > 7) {
      if ((temperature >= 70 && GRINDSIZE === 0.5) || temperature > 95) {
        result = 4;
      } //overextracted
      if (temperature < 70) {
        result = 6;
      } //underextracted

      if (
        (temperature >= 70 && temperature <= 85 && GRINDSIZE >= 1.25) ||
        (temperature > 85 && temperature <= 95 && GRINDSIZE === 0.85)
      ) {
        result = 3;
      } //good
      if (
        (temperature > 85 && temperature <= 95 && GRINDSIZE >= 1.25) ||
        (temperature >= 70 && temperature <= 85 && GRINDSIZE === 0.85)
      ) {
        result = 1;
      } //best
    }

    //displaying result
    image(finalImages[result], 0, 0);
  }
}

function mouseClicked() {
  //CHANGE STATE
  if (state === 0) {
    state = 1;
  }

  if (state === 1) {
    background(225);
    setTimeout(changestate, 500);
    delayedstate();
  }

  //CHOOSE GRIND SIZE
  if (state === 2 && coffeeamt > 0) {
    if (mouseIsWithinCircle(width / 2, 190, 6)) {
      console.log("you chose a fine grind");
      grindersound.play();
      grindsize = 0.5;
    }

    if (mouseIsWithinCircle(width / 2, 205, 8)) {
      console.log("you chose a medium grind");
      grindersound.play();
      grindsize = 0.85;
    }

    if (mouseIsWithinCircle(width / 2, 223, 10)) {
      console.log("you chose a mid-coarse grind");
      grindersound.play();
      grindsize = 1.25;
    }

    if (mouseIsWithinCircle(width / 2, 242, 12)) {
      console.log("you chose a coarse grind");
      grindersound.play();
      grindsize = 2;
    }

    GRINDSIZE = grindsize;
  }

  //CHOOSE TEMPERATURE
  if (state === 3) {
    if (mouseIsWithinCircle(180, 200, 14)) {
      temperature -= 5;
    }

    if (mouseIsWithinCircle(220, 200, 14)) {
      temperature += 5;
    }
    if (mouseIsWithinRect(183, 221, width / 4 / 3, 18)) {
      console.log("you chosen brew temperature is " + temperature);
      machinesound.play();

      if (pour === 0) {
        pour = 5;
      }
      stroke(0);
    }
  }

  if (state === 5) {
    if (mouseIsWithinRect(350, 0, 50, 20)) {
      background(225);
      state = 0;
    }
  }
}

function mouseDragged() {
  if (mouseIsWithinRect(146, 137, 110, 25)) {
    sliderPos = mouseX;

    for (let i = 0; i < 6; i++) {
      if (mouseIsWithinRect(165 + coffeeamtpos[i], 140, 10, 20)) {
        amtdisplay = 4 + i * 2;
        //str(amtdisplay);
      }
    }

    if (mouseX > 255) {
      sliderPos = 255;
      console.log("stop");
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < 6; i++) {
    if (mouseIsWithinRect(165 + coffeeamtpos[i], 140, 10, 20)) {
      coffeeamt = 4 + i * 2;
      console.log("you chose " + coffeeamt + " grams of coffee");
    }
  }
}

//FUNCTION AND OBJECT DESCRIPTIONS:
//
//
function delayedstate() {
  if (state === statechange) {
    state++;
  }
}

function changestate() {
  statechange++;
}

function mouseIsWithinRect(x, y, sizeX, sizeY) {
  if (mouseX > x && mouseX < x + sizeX && mouseY > y && mouseY < y + sizeY) {
    return true;
  }
  return false;
}

function mouseIsWithinCircle(x, y, radius) {
  if (dist(mouseX, mouseY, x, y) < radius) {
    return true;
  }
  return false;
}

function wholebean(xPos, yPos) {
  fill(137, 59, 42);
  ellipse(xPos, yPos, coffeewidth, coffeeheight);
  arc(
    xPos - 2,
    yPos - coffeeheight / 4,
    coffeewidth / 2,
    coffeeheight / 2,
    PI + HALF_PI,
    HALF_PI
  );
  arc(
    xPos + 2,
    yPos + coffeeheight / 4,
    coffeewidth / 2,
    coffeeheight / 2,
    HALF_PI,
    PI + HALF_PI
  );
  fill(255);
}

class groundbean {
  constructor(grindsize) {
    this.grindsize = grindsize;
    this.xpos = random(190, 210);
    this.ypos = random(220, 255);
    this.speed = random(1, 5);
  }

  drawbean() {
    fill(137, 59, 42);
    stroke(137, 59, 42);
    this.grindsize = grindsize;
    circle(this.xpos, this.ypos, this.grindsize);
    fill(255);
    stroke(0);
  }

  //Update position of the bean every frame
  update() {
    //randomly displaces the ground coffee
    if (this.ypos < 380) {
      this.xpos += random(-1, 1);
      this.ypos += this.speed;
    } else {
      this.xpos = random(190, 210);
      this.ypos = 255;
      this.speed = random(3, 5);
    }
  }
}
