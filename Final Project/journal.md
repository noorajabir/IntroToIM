### Initial ideas:

I really enjoyed creating my [midterm game](https://editor.p5js.org/noorajabir/sketches/7erJ7QDXq) modelled on a coffee machine, and I decided to build a physical version of the game for my final project. The idea was to create a coffee machine that would allow the player to physically select the grind size, amount of coffee and set the temperature, which would have coffee pour into a virtual cup that would be scored on the basis of the decisions the player made. 

### Planning and Initial Tests

![IMG_0240](https://user-images.githubusercontent.com/98478196/169378212-d145ecc9-0cdd-4aae-a3c1-f1e393fefa14.jpg)

I started off by making a block diagram, pictured above. I planned out exactly what would happen in the game and in what sequence. I then created a rough schematic for the circuitry. 

![Screen Shot 2022-05-19 at 10 54 09 PM](https://user-images.githubusercontent.com/98478196/169379121-87d723c9-9164-4dcd-b3ca-826de62fa3c6.png)

My game would have the following displays:

1. Start page
2. Instructions
3. Coffee Grinder
    1. choose amount of bean
    2. choose grind size
    3. grind
4. Coffee Machine- set temperature and brew
    1. temp dial on coffee machine
5. Results & end screen

I then identified the most difficult parts of my project as being the following:

- Making the ipad the display, or if it doesnt work, figuring out how to use laptop instead and where to position it in enclosure and how to easily fit in/ take out
- controlling arduino through p5
- changing info on lcd depending on the state machine 

I started with working on these first. The first two I figured out with some time- it was the third that took the longest, as I wasn't able to figure out how to send string data from p5 to Arduino. I ended up getting the LCD to display strings by sending a number from P5 to Arduino, and using if statements to assign which statement to display depending on the number. 

I then worked on creating the circuit on a solderless breadboard and ran a test code to make sure everything is working. 

![IMG_0409](https://user-images.githubusercontent.com/98478196/169388749-9b6fc602-6a0b-48f6-82dd-3aa4577ecf59.JPG)

### Working on the code

I proceeded to then edit my midterm code so that the game's software corresponds to the hardware. I edited the first part so the following happens:

2. When the potentiometer is turned, the slider would slide across the array of coffee amount values. 
3. The same mechanism is used to set the grind size. 
4. once both deicisions have been made, the player is prompted to press the blue button, which sets specific values as the amount of coffee and the grind size. it also puts the following in motion:
    1. change the grindsize (circle diameter), making the ground coffee appear as falling from the grinder to the cup
    3. decrease the x position of the slider, making it move to its initial zero position
    4. when the slider is back to its initial position, it changes the grindsize back to zero which makes the coffee stop falling.

One difficulty I had at this stage was that although the ground beans didnt appear on my laptop screen when the radius was set as zero, they still appeared as small spots on another laptop I had borrowed for the project. I fixed this by creating a background that appears over the ground beans only if the grind size is zero. 

### Creating the enclosure

I then worked on creating the enclosure and made sure 

