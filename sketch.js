function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  let xStart = width/2;
  let yStart = height;
  let length = mouseX;
  let angle = 90;
  let levels = 15;
  line(xStart, yStart, xStart, yStart-length);
  drawFractalTree(xStart, yStart-length, length, angle, levels);
}

function drawFractalTree(xStart, yStart, length, angle, levels) {
    //startX startY endX endY, growing upwards.
    let add = mouseY;
    let newLength = length*(2/3);
    let xLengthL = length*cos(angle+add);
    let xLengthR = length*cos(angle-add);
    let yEndL = yStart-length*sin(angle+add);
    let yEndR = yStart-length*sin(angle-add);
    line(xStart, yStart, xStart+xLengthL, yEndL);
    line(xStart, yStart, xStart+xLengthR, yEndR);
    if(levels>1 && newLength >= 2) {
      drawFractalTree(xStart+xLengthL, yEndL, newLength, 
                      angle+add, levels-1);
      drawFractalTree(xStart+xLengthR, yEndR, newLength,
                      angle-add, levels-1);
    }
}