function arrayValuesGreaterThanY(inputArray, threshold) {
  var count = 0;
  for(i=0; i<inputArray.length; i++){
    if(inputArray[i] > threshold){
      count++;
    }
  }
  console.log("There were", count+"values greater than, ",threshold +" in the array.")
}

var test = [21, 3, 5, 6, 9, 11, 44, 45];
var threshold = 6;

arrayValuesGreaterThatY(test,threshold);
