class Bin {
  
  constructor(x, y, num){
    this.x = x;
    this.y = y;
    this.num = num;
  }
  
  display(){
    
    push();
    fill(255);
    image(binImage, this.x-5, this.y-5, 20, 20)
    //ellipse(this.x, this.y, 10, 10);
    pop();
  }
  
  touch(){
    if(this.x - mouseX > -5 && this.x - mouseX < 5 && this.y - mouseY > -5 && this.y - mouseY < 5) {
      
      push();
      // console.log(this.x);
      fill(255);
      
      let text1 = positionData[this.num].point.coordinates[0];
      let text2 = positionData[this.num].point.coordinates[1];
      let text3 = positionData[this.num].address;
      let text4 = positionData[this.num].operation_date_time;
          
      text('Longitude: ' + text1.toString(), this.x+5, this.y-10);
      text('Latitude: ' + text2.toString(), this.x+5, this.y);
      text('Address: ' + text3, this.x+5, this.y-20)
      text('Operation Time: ' + text4, this.x+5, this.y-30)
      
      stroke(255);
      line(this.x+3, this.y+3, xP+17, yP+21);
      
      push();
      stroke(255);
      let d = int(dist(this.x+3, this.y+3, xP+17, yP+21));
      translate((this.x+3 + xP+17) / 2, (this.y+3 + yP+21) / 2);
      rotate(atan2(yP+21 - this.y-3, xP+17 - this.x-3));
      
      text(nfc(d, 1), 0, -5);
      pop();
      
      noLoop();
      pop();
      
    } else{
      //console.log(centerLon);
      loop();
    }
  }
  
}