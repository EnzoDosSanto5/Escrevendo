function setup() {    
    createCanvas(600, 600);
    background("#2196F3");
}
  
function draw() {
    stroke("blue");
    fill("red");
    
    if (mouseIsPressed) {
        rect(mouseX, mouseY, 30, 35);
    }
}
