class Map {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  display(){  
    push();
    fill(255);
    ellipse(this.x, this.y, 10, 10)
    pop();
  }
}