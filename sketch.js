let circuits = [];
let redColor;
let greenColor;
let blueColor;
let yellow;
let purple;
let pink;
let white;
let black;
let colors = []
let strokeColors = [];
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  redColor = color(255, 0, 0);
  greenColor = color(0, 255, 0);
  blueColor = color(0, 0, 255);
  yellow = color(255, 159, 28);
  purple = color(255, 0, 255);
  pink = color(255, 16, 240);
  white = color(255, 255, 255);
  black = color(0,0,0);

  colors = [redColor, yellow, purple, pink];

  strokeColors =  [color(0,255, 255), //cyan 
    color(255, 100, 0), //orange
    color(255, 255, 255), //white
    color(255, 50, 100)] //coral

    bgColor = random(colors);

  //shapes loop come after color creation

  for (let i = 0; i < 50; i++) {
    let circuit = new Circuit();
    circuits.push(circuit);
  }

} 

function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  background(black);
 
  for (let circuit of circuits) {
    circuit.render();
  }
 
}

class Circuit {
  constructor() {
    this.x = random(width + 200);
    this.y = random(0, height / 2);
    this.size = random(50, 100);
    this.weight = random(2,4);

    let i = floor(random(colors.length));
    let next = (i + 1) % colors.length;

    this.colorA = colors[i];
    this.colorB = colors[next];
    this.strokeColor = random(strokeColors);
   

  }

  render() {

    let x = this.x;
    let y = this.y;
    let size = this.size;

    let t = constrain(map(mouseX, 0, width, 0, 1), 0, 1);

    this.color = lerpColor(this.colorA, this.colorB, t);
    this.opposite = color(255 - red(this.color), 255 - green(this.color) * 0.02, 255 - blue(this.color));


    while (y < height + 1000 && x < width + 500) {
      strokeWeight(this.weight);
      stroke(this.strokeColor);
      fill(this.color);

      ellipse(x, y, size, size);

      x += 3;
      y += 10;
      size += 7;
    }


    }
     

  }
  
