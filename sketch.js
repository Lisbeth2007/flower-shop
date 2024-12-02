var bag=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(255,185,228);//pink
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(143,88,223); // an RGB color for the circle's border
  strokeWeight(3);
  fill(80,bag,127,230); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  
  triangle(30,75,random(height),20,86,75);
  fill(200,random(130,255),164,mouseY);
  ellipse(mouseX,mouseY,50,50);
  fill(255,50,50);
  stroke(255,255,255);
  strokeWeight(5);

  fill(255,95,197);//pink text
  stroke(255,255,255);//white stroke
  textFont("Papyrus");//font
  textSize(60);
  text("Flowers",150,250);



}
function mousePressed() {

if (bag>=500){
  sandy=0;
}else{
  bag=bag+5;
}


}
