console.log("reading from js");

var d=20;

function setup(){
    var myCanvas=createCanvas(800,250);
    myCanvas.parent('mySketch');
    //link to id mySketch from header tag
    myCanvas.parent('mySketch');
}

function draw(){
    if (mouseIsPressed){
        fill(0)
    } else {
        fill(255);
    }
    
    ellipse(mouseX,mouseY, d,d);
}