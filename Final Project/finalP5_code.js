//Final Project, Introduction to Interactive Media Spring 2022.
//All graphics from Canva.com, and sounds from both QuickSounds.com and sounds-mp3.com


//DECLARING VARIABLES

//Game settings
state = 0; //each state is one screen of the game
let statechange; //controls when the state changes
finalImages = []; //result images
instpage = 0;
reset = 0;
grindstate = 0;
//Grind

//groundbeans
groundBeans = [];
grindsize = 0;
xPos = 0;
yPos = 0;
let coffeeamt = 0; //amount of coffee
let GRINDSIZEfinal = 0; //final grindsize
grindsize = 0;
amtdisplay = 0;
coffeeamtFinal = 0;

//slider position
let sliderPos = 180; //X position of slider
coffeeamtpos = [];
grindsizeDisplay = 0;
grindsizeCircle = 0;

grindsliderPos = 180;
coffeegrind = [];

//Set temperature
let temperature = 75;

//Brew
pour = 0; //thickness of coffee poruing line
let pouredcoffee = 0; //poured coffee in mug
let prevbutton = 0;
//Grind buttons

let grindButton = 0;
let tempDownButton = 0;
let tempUpButton = 0;

//Brew temp buttons
instructionval = 7;
button1 = 0;
button2 = 0;
button3 = 0;
let button = 0;
let ledvalue = 0;
let potvalue = 0;
let potvalue2 = 0;
let buttonstate = 0;
let prevbutton2 = 0;
prevbutton3 = 0;
brewButton = 0;
result = 0;

function setup() {
  createCanvas(400, 500);

  for (let i = 0; i < 300; i++) {
    groundBeans[i] = new groundbean(grindsize);
  }
}

function preload() {
  grindersound = loadSound("grinder.mp3");
  machinesound = loadSound("coffeemachine.mp3");
  startimg = loadImage("startimg.png");
  instructions = loadImage("instructions.png");
  loading = loadImage("pre-final.png");

  for (var i = 1; i < 7; i++) {
    finalImages[i] = loadImage("final_" + i + ".png");
  }
}

function draw() {
  background(220);

  if (!serialActive) {
    text("Press Space Bar to select Serial Port", 20, 30);
  }

  button = prevbutton;
  prevbutton = tempUpButton;
  button2 = prevbutton2;
  prevbutton2 = tempDownButton;
  button3 = prevbutton3;
  prevbutton3 = brewButton;

  if (state == 0) {
    
    //RESETTING VALUES
    instructionval = 0;
    coffeeamt = 0; 
    GRINDSIZEfinal = 0; 
    grindsize = 0;
    amtdisplay = 0;
    coffeeamtFinal = 0;
    instpage = 0;
    reset = 0;
    temperature = 75;
    pouredcoffee = 0;
    grindstate = 0;
    statechange = 0;

    //cover image
    image(startimg, 0, 0);
    if (button > prevbutton || button2 > prevbutton2 || button3 > prevbutton3) {
      state = 1;
    }
  }

  if (state == 1) {
    instructionval = 1;
    image(instructions, 0, 0);
    
  //change state if any button pressed
    if (button < prevbutton || button2 < prevbutton2 || button3 < prevbutton3) {
      instpage = 1;
    }
    if (instpage == 1) {
      if (
        button > prevbutton ||
        button2 > prevbutton2 ||
        button3 > prevbutton3
      ) {
        state = 2;
      }
    }
  }

  if (state == 2) {
    instructionval = 2;

    if (button3 > prevbutton3 && grindstate == 1) {
      coffeeamtFinal = amtdisplay;
      GRINDSIZEfinal = grindsizeDisplay;
      grindersound.play();
      if (grindsizeDisplay == 1) {
        console.log("you chose a fine grind");
        grindsize = 2;
      }

      if (grindsizeDisplay == 2) {
        console.log("you chose a medium grind");
        grindsize = 3;
      }

      if (grindsizeDisplay == 3) {
        console.log("you chose a mid-coarse grind");
        grindsize = 4;
      }

      if (grindsizeDisplay == 4) {
        console.log("you chose a coarse grind");
        grindsize = 5;
      }
    }
    grindstate = 1;
    //FALLING GROUND BEANS
    for (let i = 0; i < groundBeans.length; i++) {
      groundBeans[i].drawbean();
      groundBeans[i].update();
    }

    if (grindsize == 0) {
      background(225);
    }
    // GRINDSIZE SLIDER
    if (GRINDSIZEfinal == 0) {
      grindsliderPos = map(potvalue2, 0, 1023, 180, 280);
    }
    rectMode(CORNER);
    rect(185, 450, 100, 20);
    for (let i = 0; i < 4; i++) {
      coffeegrind[i] = i * 22;
      line(200 + coffeegrind[i], 450, 200 + coffeegrind[i], 470);
      if (grindsliderPos >= 200 + coffeegrind[i]) {
        grindsizeDisplay = i + 1;
        grindsizeCircle = (i + 2) * 2;
        instructionval = 3;
      }
    }
    if (grindsliderPos < 200 + coffeegrind[0]) {
      grindsizeDisplay = 0;
      grindsizeCircle = 0;
    }
    fill(0);
    rect(grindsliderPos, 447, 5, 25);

    //fill color
    noStroke();
    fill(137, 59, 42, 100);
    rect(185, 450, grindsliderPos - 185, 20);

    stroke(0);
    rectMode(CORNER);

    //DISPLAY COFFEE AMOUNT
    fill(0);
    textSize(14);
    //text(grindsizeDisplay, 165, 465);
    text("grindsize", 100, 465);
    circle(167, 461, grindsizeCircle);

    fill(255);

    //COFFEE AMOUNT SLIDER
    if (coffeeamtFinal == 0) {
      let amt = map(potvalue, 0, 1023, 0, 100);
      amt = amt * 10;
      sliderPos = map(amt, 0, 1023, 180, 280);
    }
    rectMode(CORNER);
    rect(185, 410, 100, 20);
    for (let i = 0; i < 6; i++) {
      coffeeamtpos[i] = i * 15;
      line(200 + coffeeamtpos[i], 410, 200 + coffeeamtpos[i], 430);
      if (sliderPos >= 200 + coffeeamtpos[i]) {
        amtdisplay = 4 + i * 2;
      }
    }
    if (sliderPos < 200 + coffeeamtpos[0]) {
      amtdisplay = 0;
    }
    fill(0);
    rect(sliderPos, 407, 5, 25);

    //fill color
    noStroke();
    fill(137, 59, 42, 100);
    rect(185, 410, sliderPos - 185, 20);

    stroke(0);
    rectMode(CORNER);

    //DISPLAY COFFEE AMOUNT
    fill(0);
    textSize(14);
    text(amtdisplay, 165, 425);
    text("amount", 100, 425);

    fill(255);

    //COFFEE cup
    fill(158, 149, 147);
    rect(140, 270, 120, 80);
    arc(width / 2, 345, 120, 60, 0, radians(180));

    //stopping machine from grinding
    if (grindsize > 0.2) {
      sliderPos -= 0.3;
    }

    if (sliderPos <= 179) {
      sliderPos = 179;
    }
    statechange = 2;
    if (sliderPos === 179 && GRINDSIZEfinal > 0) {
      grindersound.stop();
      setTimeout(delayedstate, 2500);
    }
  }

  if (state == 3) {
    instructionval = 4;

    if (button > prevbutton && temperature < 100) {
      temperature = temperature + 5;
    }

    if (button2 > prevbutton2 && temperature > 30) {
      temperature = temperature - 5;
    }

    if (button3 > prevbutton3) {
      machinesound.play();
      pour = 8;
    }

    if (temperature > 60) {
      instructionval = 5;
    }
    //display

    fill(0);
    text("chosen temperature:", 110, 430);
    text(str(temperature), 260, 430);

    //cup
    fill(139, 85, 91);
    ellipse(252, 305, 60, 60);
    fill(220);
    ellipse(252, 305, 35, 35);
    fill(139, 85, 91);

    rect(152, 260, 100, 66);
    arc(
      202,
      262, // center of the ellipse
      100,
      30, // width and height
      radians(180),
      0
    );
    arc(202, 262, 100, 30, 0, radians(180));

    arc(202, 320, 100, 100, 0, radians(180));
    fill(0);

    stroke(98, 40, 27);

    strokeWeight(pour);
    line(width / 2, 0, width / 2, 275);
    stroke(0);
    strokeWeight(1);

    if (pour > 0) {
      pour -= 0.02;
    }
    if (pour < 1) {
      pour = 0;
    }

    if (pour < 6 && pour > 0) {
      pouredcoffee = pouredcoffee + 0.08;
    }

    if (pouredcoffee > 1 && pour == 0) {
      statechange = 3;
      machinesound.stop();
      setTimeout(delayedstate, 2500);
    }
    stroke(98, 40, 27);
    fill(98, 40, 27);
    arc(202, 270, 80, pouredcoffee, radians(180), 0);
    arc(202, 270, 70, pouredcoffee / 2, 0, radians(180));

    stroke(0);
    fill(255);
  }

  if (state == 4) {
    background(225);

    image(loading, 0, 0);
    setTimeout(changestate, 3000);
    setTimeout(delayedstate, 3000);
  }

  if (state == 5) {
    instructionval = 6;
    statechange = 0;
    background(225);

    //Checking coffee variables and assessing
    if (coffeeamtFinal < 8) {
      result = 5;
    } //lowcaf

    if (coffeeamtFinal > 10) {
      result = 6;
    } //highcaf

    if (coffeeamtFinal < 11 && coffeeamtFinal > 7) {
      if ((temperature >= 70 && GRINDSIZEfinal === 1) || temperature > 95) {
        result = 3;
      } //overextracted
      if (temperature < 70) {
        result = 4;
      } //underextracted

      if (
        (temperature >= 70 && temperature <= 85 && GRINDSIZEfinal >= 3) ||
        (temperature > 85 && temperature <= 95 && GRINDSIZEfinal === 2)
      ) {
        result = 2;
      } //good
      if (
        (temperature > 85 && temperature <= 95 && GRINDSIZEfinal >= 3) ||
        (temperature >= 70 && temperature <= 85 && GRINDSIZEfinal === 2)
      ) {
        result = 1;
      } //best
    }

    //displaying result
    image(finalImages[result], 0, 0);

    if (button < prevbutton || button2 < prevbutton2 || button3 < prevbutton3) {
      reset = 1;
    }
    if (reset == 1) {
      if (
        button > prevbutton ||
        button2 > prevbutton2 ||
        button3 > prevbutton3
      ) {
        state = 0;
      }
    }
  }
  print(result);
  print(state);
}

function keyPressed() {
  if (key == " ") {
    // start the serial connection:
    setUpSerial();
  }
}

function readSerial(data) {
  ////////////////////////////////////
  //READ FROM ARDUINO HERE
  ////////////////////////////////////

  if (data != null) {
    // make sure there is actually a message
    // split the message
    let fromArduino = split(trim(data), ",");
    // if the right length, then proceed
    //if (fromArduino.length == 3) {
    // only store values here
    // do everything with those values in the main draw loop
    button1 = fromArduino[0];
    button2 = fromArduino[1];
    button3 = fromArduino[2];
    potvalue = fromArduino[3];
    potvalue2 = fromArduino[4];

    grindButton = button3;
    tempDownButton = button2;
    tempUpButton = button1;
    brewButton = button3;

    // }

    //////////////////////////////////
    //SEND TO ARDUINO HERE (handshake)
    //////////////////////////////////
    let sendToArduino = instructionval + "\n";
    //let sendToArduino = left + "," + right + "\n";
    writeSerial(sendToArduino);
  }
}

function delayedbuttonON() {
  if (buttonstate == 0) {
    buttonstate = 1;
  }
}

function delayedbuttonOFF() {
  if (buttonstate == 1) {
    buttonstate = 0;
  }
}

function delayedstate() {
  if (state === statechange) {
    state++;
  }
}

function changestate() {
  statechange++;
}

class groundbean {
  constructor(grindsize) {
    this.grindsize = grindsize;
    this.xpos = random(190, 210);
    this.ypos = random(220, 255);
    this.speed = random(5, 10);
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
    if (this.ypos < 280) {
      this.xpos += random(-1, 1);
      this.ypos += this.speed;
    }
    if (this.ypos > 280 && sliderPos > 183) {
      this.xpos = random(160, 240);
      this.ypos = 0;
      this.speed = random(3, 5);
    }
  }
}
