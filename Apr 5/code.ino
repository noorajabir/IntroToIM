
//Variables for changing mode
int buttonPushCounter = 1;   // counter for the number of button presses
int buttonState = 0;         // current state of the button
int lastButtonState = 0;     // prev state of the button
const int  buttonPin = 2;    // pin that mode-changing switch is connected to
 int mode = 1;               // the mode that the LEDs are in
 
//varibles for changing color in mode 3
int chooseColor = 0;         // current color chosen
int lastChooseColor = 0;     // prev color chosen
int color = 0;               // the color of the LEDs being lit

void setup() {
  //setting LEDs as output
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(10, OUTPUT);
  pinMode(9, OUTPUT);
  pinMode(8, OUTPUT);
  pinMode(7, OUTPUT);

   Serial.begin(9600);
}
   
void loop() {

    buttonState = digitalRead(buttonPin);

  // compare the buttonState to its previous state
  if (buttonState != lastButtonState) {
    // if the state has changed, increment the counter
     if (buttonState == HIGH) {
      buttonPushCounter++;
      if (buttonPushCounter==4){buttonPushCounter=1;}
      }
    
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  // save the current state as the last state, for next time through the loop
  lastButtonState = buttonState;

//selecting mode depending on the state of button
 if (buttonPushCounter==1){mode=1;};
   if (buttonPushCounter==2){mode=2;};
   if (buttonPushCounter==3){mode=3;};

//mode 1:switched off
if(mode==1){
  digitalWrite(11, LOW);  
    digitalWrite(12, LOW);  
    digitalWrite(10, LOW);  
    digitalWrite(9, LOW); 
    digitalWrite(8, LOW);  
    digitalWrite(7, LOW); 
}

//mode 2:LEDs lighting in sequence
if (mode==2){
  int delaySpeed = 500;
  delaySpeed= analogRead(A0);
   color ++;
    if(color==4){color=1;};
   delay(delaySpeed);
    

if (color == 1){
  digitalWrite(11, HIGH);  
    digitalWrite(12, HIGH);  
    digitalWrite(10, LOW);  
    digitalWrite(9, LOW); 
    digitalWrite(8, LOW);  
    digitalWrite(7, LOW); 
  }
if (color == 2){
  digitalWrite(11, LOW);  
    digitalWrite(12, LOW);  
    analogWrite(10, 15);  //analog for blue lights in order to make it dimmer
    analogWrite(9, 15); 
    digitalWrite(8, LOW);  
    digitalWrite(7, LOW); 
  }
if (color == 3){
  digitalWrite(11, LOW);  
    digitalWrite(12, LOW);  
    digitalWrite(10, LOW);  
    digitalWrite(9, LOW); 
    digitalWrite(8, HIGH);  
    digitalWrite(7, HIGH); 
  }   
}

//mode 3: choosing a color that is lit indefinitely
if(mode==3){

chooseColor = digitalRead(3);

  // compare the buttonState to its previous state
  if (chooseColor != lastChooseColor) {
    // if the state has changed, increment the counter
     if (chooseColor == HIGH) {
      color++;
      if (color==4){color=1;}
      }
    
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  
  // save the current state as the last state, for next time through the loop
  lastChooseColor = chooseColor;

  if (color == 1){
  digitalWrite(11, HIGH);  
    digitalWrite(12, HIGH);  
    digitalWrite(10, LOW);  
    digitalWrite(9, LOW); 
    digitalWrite(8, LOW);  
    digitalWrite(7, LOW); 
  }
if (color == 2){
  digitalWrite(11, LOW);  
    digitalWrite(12, LOW);  
   analogWrite(10, 15);  
    analogWrite(9, 15); 
    digitalWrite(8, LOW);  
    digitalWrite(7, LOW); 
  }
if (color == 3){
  digitalWrite(11, LOW);  
    digitalWrite(12, LOW);  
    digitalWrite(10, LOW);  
    digitalWrite(9, LOW); 
    digitalWrite(8, HIGH);  
    digitalWrite(7, HIGH); 
  }   
 
}

 Serial.println(mode);
  delay(1); 
}

