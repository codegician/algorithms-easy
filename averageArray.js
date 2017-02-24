

function averageArray(inputArray) {
          var sum=0;
         for(i=0;i<inputArray.length;i++) {
           sum += inputArray[i];
           }
           console.log("Average of", (sum/inputArray.length))
       return;
     }

var test = [2,3,4];
averageArray(test);
