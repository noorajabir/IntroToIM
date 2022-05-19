

#include <LiquidCrystal.h>          //the liquid crystal library contains commands for printing to the display

LiquidCrystal lcd(13, 12, 11, 10, 9, 8);   // tell the RedBoard what pins are connected to the display

void setup() {
  
  lcd.begin(16, 2);                 //tell the lcd library that we are using a display that is 16 characters wide and 2 characters high
  lcd.clear();  //clear the display

  Serial.begin(9600);
  pinMode(6, INPUT);
  pinMode(5, INPUT);
   pinMode(7, INPUT);

}

void loop() {

  String text = ".";
  String text2 = ".";

   int instructionval = 0;
  // wait for data from p5 before doing something
 //while (Serial.available()) {
     instructionval = Serial.parseInt();

  if (instructionval == 0){
      text= "press any button  ";
      text2= "to start         ";
    }

    if (instructionval == 1){
      text= "press any button  ";
      text2= "to proceed       ";
    }

 if (instructionval == 2){
     text= "turn knob to set  ";
      text2= "amount & size    ";
    } 

 if (instructionval == 3){
     text= "press blue       ";
      text2= "button to grind       ";
    } 
    
     if (instructionval == 4){
     text= "press buttons to   ";
      text2= "change temperature";
    }

      if (instructionval == 5){
     text= "press blue       ";
      text2= "button to brew       ";
    } 

     if (instructionval == 6){
     text= "press any button";
      text2= "to play again     ";
     }
  //  } 

lcd.setCursor(0, 0);              //set the cursor to the 0,0 position (top left corner)
  lcd.print(text);       //print hello, world! starting at that position

  lcd.setCursor(0, 1);              //move the cursor to the first space of the bottom row
  lcd.print(text2); 
    

      int button = digitalRead(7);
      int button2 = digitalRead(6);
      int button3 = digitalRead(5);
      int potvalue = analogRead(A0);
      int potvalue2 = analogRead(A1);
      
      Serial.print(button);
      Serial.print(',');
      Serial.print(button2);
      Serial.print(',');
      Serial.print(button3);
      Serial.print(',');
      Serial.print(potvalue);
      Serial.print(',');
      Serial.println(potvalue2);
     
    }
 // }
//}
