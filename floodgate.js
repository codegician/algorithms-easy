function negativeToFloodgate(x) {
    for(i=0;i<negativeToFloodgate.length;i++){
      if (negativeToFloodgate[i]<0){
        negativeToFloodgate[i]='floodgate';
      }
    }
}
 var x = [-2,-3,-5,0]
negativeToFloodgate(x);
