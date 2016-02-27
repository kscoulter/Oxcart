// console.log('Custom JS');

// console.log('jquery');

function checkSum () {
  var numArray = $(".num");
  var total = 0;
  for (var i=0; i < numArray.length; i++){
    var number = parseInt($(numArray[i]).val())
    if(isNaN(number)){
      number = 0;
    }
    total = total + number;
  }
  $("#sum").append("<h3>The sum is: " + total + "</h3>")

}

$("#getSum").click(function(){
  checkSum();
})

//# sourceMappingURL=scripts.js.map
