## Final Project

### Description
For my final project, I turned the game on coffee brewing I made for my midterm assignment into a physical game, with buttons and potentiometers controlling the variables that go into brewing good coffee. Instructions to play are displayed on the LCD, which direct the player to first set the amount of coffee, then choose grind size, then select the brew temperature. Using the choices a player makes, the program determines whether the brew is good or not. Additional features include sound effects for grinding and brewing the coffee, as well as hints given at the end to improve one's brew the next time. 

## Overview of Code
The game uses serial communication to communicate with arduino and send information across to P5. 

#### P5 Code
On P5js, the game has 6 states: the first being a homescreen, second instructions, third for grinding, fourth for temperature and brewing, a 5th buffer state, and 6th for results. The state of the buttons (on/off) and the value of the potentiometers are constantly being sent to P5 from Arduino, which control what happens in the game. The serial communication is based off of [this](https://editor.p5js.org/aaronsherwood/sketches/q2Pl77SWl) example by professor Aaron Sherwood.

[LINK TO P5 SKETCH](https://editor.p5js.org/noorajabir/sketches/mv0XpdIBU)

#### Arduino Code
On Arduino, the code is quite simple-it sends a series of values to P5, and receives one value, which tells it which string to display. 

## Circuitry and Schematic

![IMG_0740](https://user-images.githubusercontent.com/98478196/169965868-5f208875-5c5d-456b-a1bd-fa25ef6c72bf.jpg)

![IMG_0657](https://user-images.githubusercontent.com/98478196/169966210-bce08d48-dfc1-42e6-aae9-dab7182b01cc.JPG)
![IMG_0659](https://user-images.githubusercontent.com/98478196/169966310-96459f2c-d9fd-4ffd-8a32-5c1546ec7f56.JPG)

 I found an old shoebox that I used, and cut out a part for the ipad screen display. I borrowed a laptop and ipad from the library so I could connect the arduino to my laptop and share the screen to the ipad. This made both the display and controls fit onto the box, which I liked. I soldered most of the wires so that it's more durable and won't fall off easily. I placed the buttons and potentiometers close by so it would all be in one place, except the potentiometer for adjusting the brightness of the LCD, which is on the side so as to not be mistaken for a game control knob.

## User Testing

I performed user testing at various stages throughout the development process, which really helped. Some of the feedback I got was:
- Show selected amount of size/temperature on the screen instead of LCD display, which is where it initially was
- Use potentiometer instead of buttons for selecting grindsize, which is easier
- Make it look like the last coffee grounds falling actually reach the cup, instead of disappearing midair as it did first.

With this feedback in mind, I made the necessary changes to the game. The last one was a little hard to figure out, but it did make the visuals look so much better once I was done.

https://user-images.githubusercontent.com/98478196/169370097-169fa1db-fa87-49eb-897e-db3b57ff950b.mov

## Problems & Discoveries

One of my biggest difficulties was figuring out serial communication. Even after I understood the sequence, I wasn't able to figure out how to send string data from p5 to Arduino. I ended up getting the LCD to display strings by sending a number from P5 to Arduino, and using if statements to assign which statement to display depending on the number. Another difficulty was building the circuit itself-although my circuit was relatively simple with two switches, two potentiometers and an LCD, the LCD had 12 pins that needed to be connected, which was a little complicated. The wires kept getting loose, so I soldered the wires to a pin header attached to the LCD. This also didn't help and the wires would keep snapping because of the way the LCD was stuck to the enclosure-in the end, soldering the LCD to a breadboard and the wires to it solved the issue. 
I faced some difficulties while working on the code for the game as well, a significant one being getting the button pressed once to perform an action once, instead of continuing to do it for multiple times while its still pressed. I fixed this by tracking the change in the state of the button (1 if on and 0 if off) and performing the action only when the state changes, and not constantly when the state is on. 

## References

- [webSerial_handshake_simpler by Aaron Sherwood](https://editor.p5js.org/aaronsherwood/sketches/q2Pl77SWl)
- [SparkFun Experiment Guide: 'LCD "Hello, World!"'](https://learn.sparkfun.com/tutorials/sparkfun-inventors-kit-experiment-guide---v40/circuit-4a-lcd-hello-world)
