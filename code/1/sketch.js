function setup() {
 createCanvas(500,500);
 
}

function draw()  {

background('green');
ellipse(270,250,300,300);
fill('red');
ellipse(mouseX,200,50,50);
 fill('blue');
ellipse(mouseX+100,200,50,50);
fill('yellow');
rect(200,300,100,20);

ellipse(250,250,30,30);

}