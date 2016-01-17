console.log("reading from js");

var d=20;

function setup(){
    var myCanvas=createCanvas(800,250);
    myCanvas.parent('mySketch');
    //link to id mySketch from header tag
    myCanvas.parent('mySketch');
    smooth();
    noCursor();
}

function draw(){
    colorMode(HSB, 360, 100, 100); //set mode to HSB 
 drawRect();
    
}

function drawRect() {
    rectMode(CENTER);
    var x, y, s; //declare variables
    x = 0;
    y = 0; 
    s = mouseX/10;
    s2 = mouseX/10;
    for (var i=0; i<800; i+=50) {
   
        for (var j=0; j<250; j+= 50){
            
            
            noStroke();
            circleStroke();
            noFill();
            
            rect(s/2+i, s/2+j, s,s2);
            
            
        }
    }
}

function circleStroke() {
    colorMode(HSB);
    stroke(mouseX/3, mouseY/3, 100);
    strokeWeight(mouseX/50);
    
}
