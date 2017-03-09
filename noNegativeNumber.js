function noNegativeNumber(x) {
  for(i=0;i<x.length;i++) {
      if(x[i] < 0){
        x[i] = 0
      }
  }
  return x;
}

var x = [1,5,10,-2, -4, -10,9,-1000]
noNegativeNumber(x);
