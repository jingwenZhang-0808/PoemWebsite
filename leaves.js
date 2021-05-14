class Leaf {
  constructor(x, y, speed, size){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.size = size;
  }
  
  display(){
    push();
    
    image(leafImage, this.x, this.y, this.size, this.size);
    
    pop();
  }
  
  move(){
    this.y=this.y+this.speed;
    
    if (this.y > height) {
        this.y = 0;
        };
}
}
