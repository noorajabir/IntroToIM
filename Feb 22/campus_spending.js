// An array of strings to hold the entire file
let strings = [];

function preload() {
  // The text from the file is loaded into an array.
  strings = loadStrings("data.csv");
}

function setup() {
  createCanvas(600, 600);
  background(255);

  //checking if file was loaded
  if (strings == null) {
    print("failed to load the file, stopping here");
    while (true) {}
  }

  //creating key
  text("KEY:", 10, 20);
  fill(193, 15, 64);
  text("Library Cafe", 10, 35);
  fill(255, 195, 0);
  text("Dining Hall", 10, 50);
  fill(182, 66, 207);
  text("Marketplace", 10, 65);
  fill(0);
  text("Convenience Store", 10, 80);
  fill(185, 193, 15);
  text("Blacksmith Coffee", 10, 95);

  //CREATING LEGEND
  
  //bottom
  textAlign(CENTER, CENTER);
  fill(0);
  text(" June 2021 - Feb 2022", width / 2, height - 15);

  //side
  push();
  let angle2 = radians(270);
  translate(20, 300);
  rotate(angle2);
  text("Campus AED spent", 0, 0);
  pop();

  print(
    "strings loaded from file successfully, read " + strings.length + " lines"
  );
}

let csvRowNumber = 1;
let xpos = 20; //starting a little ahead of the edge
let Totaldm = 0;
let Totalcoffee = 0;
let Totalmp = 0;
let Totald2 = 0;
let Totaldeposit = 0;


//creating arrays for remembering previous position in order to draw lines

//previous x position
let prevx = [];
for (let i = 0; i < 8; i++) {
  prevx[i] = 0;
}

//previous y position
let prevy = [];
for (let i = 0; i < 8; i++) {
  prevy[i] = 0;
}

function draw() {
  let singleRow = [];
  translate(20, 570);

  // splitting rows into individual words
  singleRow = split(strings[csvRowNumber], ",");

  let outlet = str(singleRow[1]);//where campus aed was spent
  let dhs = float(singleRow[2]); //how much was spent

  //for debugging use:
  //print(outlet + dhs);

  if (isNaN(dhs)) {
    print("conversion to float failed; skipping row " + csvRowNumber);
    //skipping rows without valid data
  } else {
    
    let ypos = 1.5 * dhs;
    //multiplied in order to make 
    //the data slightly more spread out
    
    noStroke();

    //giving color to each outlet and 
    //drawing a line from the amount spent at 
    //that instance to the amount spent 
    //at the previous instance
    if (outlet.includes("Day Mart")) {
      fill(0);
      stroke(0);
      line(prevx[1], prevy[1], xpos, ypos);
      prevx[1] = xpos;
      prevy[1] = ypos;
    } 

    if (outlet.includes("Library Cafe")) {
      fill(193, 15, 64);
      stroke(193, 15, 64);
      line(prevx[2], prevy[2], xpos, ypos);
      prevx[2] = xpos;
      prevy[2] = ypos;
    } 
    
    if (outlet.includes("Blacksmith")) {
      fill(185, 193, 15);
      stroke(185, 193, 15);
      line(prevx[3], prevy[3], xpos, ypos);
      prevx[3] = xpos;
      prevy[3] = ypos;
    } 
    
    if (outlet.includes("Marketplace") || outlet.includes("NY Pizza")) {
      fill(182, 66, 207);
      stroke(182, 66, 207);
      line(prevx[4], prevy[4], xpos, ypos);
      prevx[4] = xpos;
      prevy[4] = ypos;
    } 
    
    if (outlet.includes("Campuseast") || outlet.includes("Campuswest")) {
      fill(255, 195, 0);
      stroke(255, 195, 0);
      line(prevx[5], prevy[5], xpos, ypos);
      prevx[5] = xpos;
      prevy[5] = ypos;
    } 
    
    if (outlet.includes("Deposit")) {
      fill(255);
    }//filling deposit with white so that 
    //it doesnt appear on screen

    // Put a mark there
    circle(xpos, ypos, 5);
    stroke(0);

    xpos = xpos + 2.5;

    //Calculating total amoount spent
    if (outlet.includes("Deposit")) {
      Totaldeposit = round(Totaldeposit + dhs);
    } 
    if (outlet.includes("Day Mart")) {
      Totaldm = round(Totaldm - dhs);
    } 
    if (outlet.includes("Library Cafe") || outlet.includes("Blacksmith")) {
      Totalcoffee = round(Totalcoffee - dhs);
    } 
    if (outlet.includes("NY Pizza") || outlet.includes("Marketplace")) {
      Totalmp = round(Totalmp - dhs);
    }
    if (outlet.includes("Campuseast") || outlet.includes("Campuswest")) {
      Totald2 = round(Totald2 - dhs);
    }
  } // end of valid data

  csvRowNumber++;
  if (csvRowNumber >= strings.length) {
    print("finished");
    print("you got a deposit of " + Totaldeposit + " aed in total");
    print("you spent " + Totaldm + " aed on groceries");
    print("you spent " + Totalmp + " aed at the Marketplace");
    print("you spent " + Totald2 + " aed at the dining hall");
    print("you spent " + Totalcoffee + " aed in cafes");
    noLoop();
  }
}
