var c_blue, c_red, c_turquoise, c_yellow, c_green;      //making variables for colors
var ang = 0;
var x =50;
var y=50;
var bg = background(50,50,50,10);
var sizeMul;

function setup() {

createCanvas(1000,1000);   
    angleMode(DEGREES);
    rectMode(CENTER);

    c_blue = color (48,142,255);        //Setting up the colors
    c_red = color(255,77,77);
    c_green = color(43, 213, 92);
    c_yellow = color(234,255,128);
    c_turquoise = color(0,191,230);
}

function draw() {

    translate(500,500);     //making center of screen the origin
    noStroke();
    
    
    fill(247,255,204);
    ellipse(0,0,700,700);       //outermost circle(yellow)
    
    fill(179,255,217);
    ellipse(0,0,500,500);       //middle circle(green)
    
    fill(178,132,190,40);       //inner circle(grey)
    ellipse(0,0,200,200);
    
    rotate(ang);
    
    stroke(220);
    line(0,0,1000,1000);        //making lines to come out of the center
    fill(234,128,255);
    triangle(50,50, 100,100,150,500);       //spinning triangles 
    fill(c_blue);
    rect(0,0, 100*sizeMul,100*sizeMul);     //center spinning rectangle 
    sizeMul = map(mouseX,0,width,.25,2);
        
    fill(255,191,0);
    ellipse(0,0,50,50);         //center circle(orange)
    
    ang = ang+50;      //spinning green circles
    ang = ang+5;
    x = x+0.5;
    fill(c_green);
    ellipse(x,y,20,20);
    
}

function keyPressed(){
    //Change background color according to the keys pressed 
    
    if(key == 't'){
        bg = background(c_turquoise);   
    }
    
    if(key == 'y'){
        bg = background(c_yellow);
    }
    
    if(key == 'p'){
        bg = background(241,156,187);
    }
    if(key == 'i'){
        bg = background(0,65,106);
    
    }
}

function mousePressed(){
    //pressing mouse button changes background color to red
    
    bg = background(c_red);
}

