// var debug = new Boolean(false);
//
// //Broken greeting
// (function() {
// 	var language = "spanish"; //set a default language.
//   if(navigator.language == "en-US" || navigator.language == "en" ){
//   	  changeLanguage("english");
//   }
//   var changeLanguage = function(lang) {
//         language = lang;
//         function language() {
//         	console.log(lang);
//         };
//         if(debug){
//         	language();
//         }
//   };
//   var greet = function(name){
//     var languages = {
//           english: "Hello ",
//           french: "Bonjour ",
//           spanish: "Hola "
//       };
//       alert( languages[language] + name);
//   };
// 	$(".greeting").click(function(){
//     if(debug){
//       console.log('Debugging:', $('.name'));
//     } else {
//       var person = $('.name').value();
//       greet(person);
//     }
// 	});
// })();
//

var debug = new Boolean(false);

//Broken greeting
(function() {
	var language = "spanish"; //set a default language.

  //   // HOISTING! only function declarations get hoisting; assignments to variables do not
  if(navigator.language == "en-US" || navigator.language == "en" ){
      changeLanguage("english");
  }
  function changeLanguage(lang) {
    //http://javascriptissexy.com/javascript-variable-scope-and-hoisting-explained/    //If you declare a global variable and a local variable with the same name, the local variable will have priority when you attempt to use the variable inside a function (local scope)
    function thelanguage(){
      console.log(lang);
    };
    //The value passed as the first parameter is converted to a boolean value, if necessary. If value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object or the string "false", create an object with an initial value of true.
    //
    // Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.
    //
    //Any object whose value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement.
    if(!debug){
    	thelanguage();
    }
    language = lang;
  };
  var greet = function(name){
    var languages = {
          english: "Hello ",
          french: "Bonjour ",
          spanish: "Hola "
    };
    alert( languages[language] + name);
  };
  // change from . to # since it is an ID in the markup
	$("#greeting").click(function(){
    // change to !debug because debug Boolean evaluates to true
    if(!debug){
      console.log('Debugging: ', $('#name'));
    } else {
      var person = $('#name').val();
      greet(person);
    }
	});
})();
