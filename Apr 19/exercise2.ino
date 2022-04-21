//same code as exercise 1, except lines 25-30 added
let serial; // variable to hold an instance of the serialport library
let portName = "/dev/tty.usbmodem14201"; // fill in your serial port name here
let xPos=0;
let yPos=0;
let onOff=0;

function setup() {
  createCanvas(640, 480);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", serialEvent); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
}

function draw() {
  background(255);
  ellipse(xPos, 200, 50, 50); // draw the circle
  if(mouseIsPressed===true){
    let outByte = parseInt(1);
    console.log("Sending " + outByte);
    //serial.write(Number(outByte)); // Send as byte value
    serial.write(outByte);
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
  // read a string from the serial port
  // until you get carriage return and newline:
  let inString = serial.readLine();
 
  //check to see that there's actually a string there:
  if (inString.length > 0) {
    let sensors = split(inString, ","); // split the string on the commas
      xPos = map(sensors[0], 0, 1023, 0, width); // element 0 is the locH
    
  }

  serial.write(onOff);
}

function serialError(err) {
  print("Something went wrong with the serial port. " + err);
}

function portClose() {
  print("The serial port closed.");
}

/* ARDUINO CODE
void setup() {
  Serial.begin(9600);
  pinMode(2, OUTPUT);
  pinMode(5, OUTPUT);
  while (Serial.available() <= 0) {
    Serial.println("0,0"); // send a starting message
    delay(300);              // wait 1/3 second
  }
}
void loop() {
  while (Serial.available() > 0) {
    // read the incoming byte:
   int inByte = Serial.read();
    switch (inByte) {
      case 0:
        digitalWrite(2, LOW);
        digitalWrite(5, LOW);
        break;
      case 1:
        digitalWrite(2, HIGH);
        break;
      case 2:
        digitalWrite(5, HIGH);
        break;
    }
    int sensorValue = analogRead(A0);
    Serial.print(sensorValue);
    Serial.print(",");
    sensorValue = analogRead(A1);
    Serial.print(sensorValue);
    Serial.println();
  }
}
//REFERENCES:
//serialCommunication by aaronsherwood, https://editor.p5js.org/aaronsherwood/sketches/v8OM9VbGe
*/
