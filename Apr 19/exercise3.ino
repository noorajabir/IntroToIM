let serial;
let portName = "/dev/tty.usbmodem14101";
let outgoingData = 0;
let incomingData = 0;

let velocity;
let gravity;
let position;
let acceleration;
let wind;
let drag = 0.99;
let mass = 50;
let hDampening;

function setup() {
  
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", serialEvent); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
  
  createCanvas(640, 360);
  noFill();
  position = createVector(width/2, 0);
  velocity = createVector(0,0);
  acceleration = createVector(0,0);
  gravity = createVector(0, 0.5*mass);
  wind = createVector(0,0);
  hDampening=map(mass,15,80,.98,.96);
}

function draw() {
   let incomingData = serial.readLine();
  background(255);
  if (!keyPressed){
    wind.x=0;
    velocity.x*=hDampening;
  }
  applyForce(wind);
  applyForce(gravity);
  velocity.add(acceleration);
  velocity.mult(drag);
  position.add(velocity);
  acceleration.mult(0);
  ellipse(position.x,position.y,mass,mass);
  if (position.y > height-mass/2) {
   
      velocity.y *= -0.9;  // A little dampening when hitting the bottom
      position.y = height-mass/2;
    }
  
   if (position.y >= height-mass) {
     if(velocity.y>0){
    serial.write(1);
     }
}
  
  if (incomingData>511){
    wind.x=-1;
  }
  if (incomingData<511){
    wind.x=1;
  }
  print(incomingData)
}

function applyForce(force){
  // Newton's 2nd law: F = M * A
  // or A = F / M
  let f = p5.Vector.div(force, mass);
  acceleration.add(f);
}

function keyPressed(){
  if (keyCode==LEFT_ARROW){
    wind.x=-1;
  }
  if (keyCode==RIGHT_ARROW){
    wind.x=1;
  }
  if (key==' '){
    mass=random(15,80);
    position.y=-mass;
    velocity.mult(0);
  }
}


// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (let i = 0; i < portList.length; i++) {
    // Display the list the console:
    print(i + " " + portList[i]);
  }
}

function serverConnected() {
  print("connected to server.");
}

function portOpen() {
  print("the serial port opened.");
}

function serialEvent() {
   
   
  serial.write(outgoingData);
   if (incomingData.length > 0) {
    print("incoming: " + incomingData + " outgoing: " + outgoingData);
  }
}

function serialError(err) {
  print("Something went wrong with the serial port. " + err);
}

function portClose() {
  print("The serial port closed.");
}
