## Final Project

### Description
For my final project, I turned the game on coffee brewing I made for my midterm assignment into a physical game, with buttons and potentiometers controlling the variables that go into brewing good coffee. Instructions to play are displayed on the LCD, which direct the player to first set the amount of coffee, then choose grind size, then select the brew temperature. Using the choices a player makes, the program determines whether the brew is good or not. Additional features include sound effects for grinding and brewing the coffee, as well as hints given at the end to improve one's brew the next time. 

## Overview of Code
The game uses serial communication to communicate with arduino and send information across to P5. 

#### P5 Code
On P5js, the game has 6 states: the first being a homescreen, second instructions, third for grinding, fourth for temperature and brewing, a 5th buffer state, and 6th for results. The state of the buttons (on/off) and the value of the potentiometers are constantly being sent to P5 from Arduino, which control what happens in the game. The serial communication is based off of [this](https://editor.p5js.org/aaronsherwood/sketches/q2Pl77SWl) example by professor Aaron Sherwood.

#### Arduino Code
On Arduino, the code is quite simple-it sends a series of values to P5, and receives one value, which tells it which string to display. 

## User Testing

I performed user testing at various stages throughout the development process, which really helped. Some of the feedback I got was:
- Show selected amount of size/temperature on the screen instead of LCD display, which is where it initially was
- Use potentiometer instead of buttons for selecting grindsize, which is easier
- Make it look like the last coffee grounds falling actually reach the cup, instead of disappearing midair as it did first.

With this feedback in mind, I made the necessary changes to the game. The last one was a little hard to figure out, but it did make the visuals look so much better once I was done.

https://user-images.githubusercontent.com/98478196/169105354-985048ff-3a2a-4867-a3f9-bef3b647e526.MOV

## Problems & Discoveries

## Schematic


[LINK TO P5 SKETCH](https://editor.p5js.org/noorajabir/sketches/mv0XpdIBU)
