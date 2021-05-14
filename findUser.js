function findUser(){
  
  inputPos = input.value()
  let splitString = split(inputPos, ',');
  
  //-73.845686,40.741073
  let inputX = Number(splitString[0]); 
  let inputY = Number(splitString[1]);
  
  let inputLon = mercX(inputX) - mercX(centerLon) + width/2;
  let inputLat = mercY(inputY) - mercY(centerLat) + height/2;
  
  xP = inputLon;
  yP = inputLat;
  
//   push();
//   fill(255);
  console.log(inputLon);
  console.log(inputLat);
//   // console.log(centerLat);
//   // console.log(mercY(centerLat));
//   // console.log(inputLat - mercY(centerLat) + height/2);
  
//   ellipse(inputLon, inputLat, 20, 20);
//   pop();
}