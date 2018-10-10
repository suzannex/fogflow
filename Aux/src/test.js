
let test = function(p) {
  p.setup = function() {
    p.frameRate(10);
    p.createCanvas(200,200);
    p.loop();
  }
  
  p.draw = function() {
    p.stroke(3);
    p.fill(200);
    p.rect(10, 10, 150, 175);
  
  }
}

let t = new p5(test, 'test');

