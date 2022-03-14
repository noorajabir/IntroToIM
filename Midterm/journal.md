As a child I often played [Papa’s Pizzeria](http://www.flipline.com/search.html?q=papa%27s+pizzeria) and its other versions—with a food blogger mom, I was fascinated by the process of making food and playing around with its intricate elements and tastes, and Papa’s games gave me some sense of that while still being easy to play. 

Fast forward to college and I’ve retained much of that fascination, except it is now with coffee: I’ve spent more time perfecting my understanding of the various elements that go into the making of a good cup of coffee than anything else. And NYUAD has given me all the tools and resources to do that, both with the Blacksmith Roastery & Cafe right on campus, as well as a global student body, consequently giving me access to coffee knowedge, flavors and recipies from all over the world. Initially, I wanted to embody all of this in my game, with the main player being a barista at a cafe serving coffee to people from all over the world, each cup brewed with the customer’s preferences and tastes in mind. 

However, I quickly realised that with my current skill and time constriants, this would be too big of a project to undertake. There would be way too many variables to account for, and an understanding of programming that I don’t currently have. With this, I decided to scale down my idea to a smaller game that would focus on making a good cup of coffee by manipulating three variables—amount of coffee, grind size, and temperature.  

With this plan, my game would have the following displays:

1. Start page
2. Instructions
3. Coffee Grinder
    1. choose amount of bean
    2. choose grind size
    3. grind
4. Coffee Machine- set temperature and brew
    1. temp dial on coffee machine
5. Person drinks coffee
6. Results & end screen

I think the most difficult part would be getting ground coffee of a particular grind size fall out of the grinder depending on the size chosen by the player. I decided to code that part first.

I planned the grinder as having a top coffee storage box, with settings to change the amount of coffee being ground and the size of the grind. The mechanics of this part was as follows:

1. There were three arrays: the ground coffee randomly placed within the storage box, the ground coffee set to a variable diameter that falls from the mouth of the grinder, and the coffee amount setting.
2. When the mouse is clicked and dragged on the slider, it would slide across the array of coffee amount values, and depending on when the mouse is released, the amount of coffee would be set.
3. When mouse is clicked on any one of the grind size buttons, it would set the variable determining the size of the ground coffee as a certain value above zero, which would set the following things into motion:
    1. change the grindsize (circle diameter), making the ground coffee appear as falling from the grinder to the cup
    2. increase the y position of the coffee beans, appearing as if its moving into the grinder
    3. decrease the x position of the slider, making it move to its initial zero position
    4. when the slider is back to its initial position, it changes the grindsize back to zero which makes the coffee stop falling.

Some of the most difficult parts that I had to work through were:

1. Getting the ground coffee to fall in a natural manner: No matter what I tried, I couldn’t figure out how to make the coffee fall gradually and naturally—it would either fall in short batches or in lines. Thankfully, I found [this example](https://happycoding.io/examples/p5js/arrays/falling-points) of falling snow on Happy Coding, which has a code for snow falling that I tailored to fit to my context instead.
3. Creating the slider to choose amount of coffee: I initially used the MousePressed() function to create the slider, but it wasn’t working smoothly. It took some time until I figured that MouseDragged() and MouseReleased() are much better for this purpose, and it made the game look much better.
4. Making the coffee beans move into the grinder as the coffee is ground: I intially tried to create a function that would change the location of the coffee and move it downward, but it was time consuming and not working very well. So I tried creating an array of random locations within the coffee storage box, and changing the value of the array when the ground coffee is falling, which worked much better.
5. Stopping the coffee from falling: I had a long and convoluted idea for making the ground coffee stop after a certain time, but realized that if I changed the size of the ground coffee (i.e. the diameter of the circle) to zero, there wouldn’t be any more coffee falling.

Next, I worked on creating the coffee machine itself, which would just allow the player to choose a temperature and brew the coffee. After the complications with the coffee grinder bit, this was much easier to code-I just needed one variable for setting the temperature, and have control keys to change it. However, one part was quite tough-making the brewed coffee appear to be pouring into the cup. 

I wasn't quite sure how to make it look like liquid was pouring into a cup-I initially thought of an array similar to the ground coffee, except it would be much more frequent and fluid-like. For the coffee itself, I thought of having a circle moving upwards to imitate the coffee filling up, but wasn't sure how to make it appear as though the circle was in the cup. After trying a few things (and watching my coffee machine closely), I figured that creating a line whose thickness decreases as the pouring coffee, and an arc whose thickness increases as the poured coffee in the cup, actually resembles a coffee machine working quite closely. 

Once these two parts were complete, I just had to put the final touches-create if statements to determine whether the player's coffee was good or not, and add a cover image and an instructions page. One other thing I had difficulty with was restarting the game, since all the variable values would be set already and I didn't know how to make it start over without running the code again. But I realized that resetting all the values in the first state at the beginning of the draw function would fix that issue.









