 
function createOddArray1to255() {
  var y = [];
  for (var i = 1; i <= 255; i++) {
    if(i%2 === 1) {
      //I could push this
      // y.push(i);
      //y[i] = i;
       y[y.length] = i;
    }
  }
  return y;
}
console.log("My function returned:",createOddArray1to255());
