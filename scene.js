function leavesScene(){
  for (let i = 0; i < leavesNum; i++){
    leaves[i].display();
    leaves[i].move();
  }
}

function binsScene(){
  for (let k = 0; k < 42; k++) {
    bins[k].display();
    bins[k].touch();
    //console.log(k);
  }
}