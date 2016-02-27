// console.log('Custom JS');

// console.log('jquery');


$("#check").click(function(){
  checkAnagram();
});

function checkAnagram(){
  $("#answerOne").empty();
  // turn the strings from the inputs into arrays and sort the letters alphabetically
  var array1 = $("#word1").val().split("").sort();
  var array2 = $("#word2").val().split("").sort();
  // compare the two arrays
	if (array1.length == array2.length){
    // if the length matches, start to compare each letter
    // match the letters using a for loop
		for (var i=0;i<array1.length; i++){
      // if the values match then continue looping
	    if(array1[i] === array2[i]){
		    continue
      // if the values don't match at any point, stop and  return false
      } else {
	      $("#answerOne").append('<p>false</p>')
      }
    }
    // if it makes it through the for loop, then all the values match so it is true
    $("#answerOne").append('<p>true</p>')
  // if the length doesn't match, then it will always be false:
  }else {
    $("#answerOne").append('<p>false</p>')
  }
}


////////////////////////////////////////////////////

// var x = first number in array, y = second number in array
// compare x & y
// whichever is lower, compare to next number z; if y > z, continue; if y < z,

// take in array of numbers
function findPenultimate(numArray){
  // create variables to keep state
  var highest = 0;
  var penultimate = 0;
  // for loop to run through full array and compare numbers
  for (var i=0; i<numArray.length; i++){
    // the current number is the index of the array at [i]
    var current = numArray[i];
    // if the current is larger than the current 2nd highest
    if (current > penultimate) {
      // check to see if the current is greater than the highest
      // if it is:
      if (current > highest){
        // reset the state variables
        penultimate = highest;
    	  highest = current;
      // if the current is not greater than the highest
      } else {
        // reset the state variable
        penultimate = current
      }
    }
  }
  console.log(penultimate)
}

// call the function
findPenultimate([1,7,12,1234,83475,5,4,3])

//# sourceMappingURL=scripts.js.map
