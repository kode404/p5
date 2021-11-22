
   
function setup(){
  createCanvas(100, 100, WEBGL);
}

function draw(){
  background(200);
  rotate(frameCount * 0.01, [1, 1, 0]);   // <---
  box(200, 200, 200);
}
