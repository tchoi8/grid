

function setup() {
 createCanvas(500,500);
 
}

function draw()  {

if(mouseIsPressed){
 fill(random(0, 255),random(0, 255),random(0, 255));
 noStroke();
 ellipse(mouseX,mouseY,random(50,200),random(50,200));
} 
}



