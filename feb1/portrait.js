function setup() {
  createCanvas(600,475); 
  background(232, 193, 185); 
  
  //earrings
    fill(247, 200, 72);
  line(230, 320, 233, 290)
    line(370, 320, 367, 290)
  ellipse(230, 320, 20, 40)
  ellipse(370, 320, 20, 40)
      
  //neck and ears
  fill(203, 142, 103);
  rect(260, 300, 80, 40);
  ellipse(235, 270, 20, 40)
  ellipse(365, 270, 20, 40)
  
  //turtleneck
  fill(43, 68, 49);
  rect(250, 340, 100, 30);
  
  //body
 rect(150, 400, 300, 225);
    arc(300, 403, // center of the ellipse
      300, 90, // width and height
      radians(180), 0); // start and stop angle
  
  //head
  fill(203, 142, 103);
    ellipse(300, 250, 140, 200);
  
  //head hide layer
  fill(232, 193, 185);
    stroke(232, 193, 185);

    rect(240, 130, 130, 50);
  
  //hair
    fill(87,63,58);
  stroke(87,63,58);
  circle(238, 237, 15)
  circle(247, 225, 30)
  circle(260, 205, 30)
  circle(270, 205, 30)
  circle(290, 185, 30)
  circle(310, 195, 40)
  circle(340, 235, 30)
  circle(360, 245, 30)
  circle(330, 215, 40)
  circle(340, 225, 40)
  
  //hijab
   fill(144,46,28);
  stroke(144,46,28);
  arc(302,195, // center of the ellipse
      120, 70, // width and height
      radians(170), 0); // start and stop angle
    triangle( 360, 185, 315, 196, 370, 240);
      triangle( 246, 188, 235, 222, 281, 189);
  triangle( 242, 190, 232, 222, 292, 195);
  
  //face
  stroke(0);
  noFill(); 
  
  //left eye
  arc(265, 260, // center of the ellipse
      30, 15, // width and height
      radians(180), 0)
  line(250, 260, 245, 257)
  line(252, 257, 247, 254)
  line(253, 254, 249, 251)
  
  //right eye
  arc(335, 260, // center of the ellipse
      30, 15, // width and height
      radians(180), 0)
  line(350, 260, 355, 257)
  line(348, 257, 353, 254)
  line(346, 254, 351, 251)
  
  fill(239, 230, 220)
  arc(300, 300, // center of the ellipse
      50, 40, // width and height
      0, radians(180))
  
  //coffee
      //cup
  ellipse(330, 430, 30, 30)
  fill(43, 68, 49)
  ellipse(330, 430, 15, 15)
  
   fill(239, 230, 220)
  rect(270, 410, 60, 40)
  arc(300, 411, // center of the ellipse
      60, 10, // width and height
      radians(180),0)
  arc(300, 411, // center of the ellipse
      60, 10, // width and height
      0, radians(180))
  arc(300, 440, // center of the ellipse
      60, 60, // width and height
      0, radians(180))
  
  
      //coffee
  fill(87,63,58);
  stroke(87,63,58);
  arc(300, 415, // center of the ellipse
      45, 10, // width and height
      radians(180),0)
  
  
}

