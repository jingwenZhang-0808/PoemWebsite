let url = 'https://data.cityofnewyork.us/resource/8i9k-4gi5.json';
let positionData;

let myFont;

var mapImg;

let leavesNum = 10;
let leaves = [];
let leafImage;

let pinImage;

var bins = [];
let num = 0; 
let binImage;

let lon =0;
let lat = 0;

let zoom = 10;
let centerLon = -73.845686;
let centerLat = 40.741073;

let input;
let submit;
let inputPos;

let xP = 10;
let yP = 590;

function preload(){
  
  mapImg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' + centerLon.toString() +',' + centerLat.toString() + ','+ zoom.toString() + ',0,0/600x600?access_token=pk.eyJ1Ijoiemhhbmo2NDUiLCJhIjoiY2tpbTQ5cG1rMHB6dzJ4bmE2aGZ5eHJveCJ9.-ldRdMVF-uzXh8O9ahi01Q');
  
  leafImage = loadImage('leaf.png');
  binImage = loadImage('bin1.png');
  pinImage = loadImage('pin.png')
  
  myFont = loadFont('andale_mono.otf');
  
  positionData = loadJSON(url);
}

function setup() {
  createCanvas(600, 600);
  textFont(myFont);
  textSize(12);
  
  //construct leaves
  for (let i=0; i<leavesNum; i++){
    leaves[i] = new Leaf (random(width), 0, random(4, 8), random(20, 40));
  };
  

  
  //construct bins
  for (let k = 0; k < 42; k++){
      
      let lonValue = mercX(positionData[k].point.coordinates[0]) - mercX(centerLon) + width/2;
      let latValue = mercY(positionData[k].point.coordinates[1]) - mercY(centerLat) + height/2;
    
     // console.log(mercY(centerLat));
      bins[k] = new Bin(lonValue, latValue, num);
      bins[k].touch();
      num ++;
    
  }

  //construct input box
  input = createInput('YOUR POSITION VALUE HERE');
  input.size(220);
  
  //construct button
  submit = createButton('SUBMITT')
  //submit.mousePressed(findUser);
  //setInterval(leavesScene, 3000);
  
  
}

function draw() {
  //background(255);
  zoomMove();
  image(mapImg, 0, 0);

  binsScene();
  leavesScene();
  
  push();
  stroke(255);
  line(mouseX, mouseY, mouseX, 0);
  line(mouseX, mouseY, width, mouseY);
  pop();
  
  push();
  textSize(20);
  fill(255);
  image(pinImage,xP, yP, 35, 42);
  text('YOU ARE HERE', xP-20, yP-5);
  
  pop();
  
  submit.mousePressed(findUser);
  
  push();
  textSize(30);
  fill(255);
  text('Leaf Drop-Off', 350, 40);
  text('Locations in NYC', 295, 75);
  pop();
  
  

}

function zoomMove() {
  if (keyIsDown(38)) {
    zoom = zoom + 1;
  } else if (keyIsDown(40)) {
    zoom = zoom - 1;
  }
}
  
