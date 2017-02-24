function findMaxInArray(inputArray) {
    var max = inputArray[0];
    for(i=1; i < inputArray.length;i++) {
      if(max < inputArray[i]){
        max = inputArray[i];
      }
    }
    console.log("Maximum # is; ",max)
}

findMaxInArray([10,23,3,4,44,0,-1,-1000,85448383,-22,-.409]);
