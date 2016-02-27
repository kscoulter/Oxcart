// Two solutions here, one using regex and one not

// function checkBrackets(str) {
//   // using a regular expression to find the number '(' characters in the string,
//   // escaping with a '\' because '(' is a special character within a regular
//   // expression; if no matches are found, and the result of 'match()' is falsey,
//   // we instead assign an empty array (in order that calling 'length', later, on
//   // a potentially-null object, won't create an error):
//   var opens = str.match(/\(/g) || [],
//     closes = str.match(/\)/g) || [];
//
//   // if there are equal numbers of '(' and ')' characters, we return true,
//   // otherwise false:
//   return opens.length === closes.length;
// }
//
// // unnecessary, this is just a means of iterating over the <li> elements, to work on
// // a range of inputs for the function:
// Array.prototype.forEach.call(document.getElementsByTagName('li'), function(li) {
//   // li is the <li> element/node itself, li.textContent is the text contained within
//   // that <li>, using the classList API to add a 'valid' class (if brackets are balanced)
//   // or an 'invalid' class (if the brackets are not balanced):
//   li.classList.add(checkBrackets(li.textContent) ? 'valid' : 'invalid');
// });


function isBalanced(string){
  var count = 0;
  for(var i = 0; i < string.length; i++) {
    if (string[i] === '(') count ++;
    if (string[i] === ')') count --;
    if (count < 0) return false;
  }

  return count === 0;
}
// unnecessary, this is just a means of iterating over the <li> elements, to work on
// a range of inputs for the function:
Array.prototype.forEach.call(document.getElementsByTagName('li'), function(li) {
  // li is the <li> element/node itself, li.textContent is the text contained within
  // that <li>, using the classList API to add a 'valid' class (if brackets are balanced)
  // or an 'invalid' class (if the brackets are not balanced):
  li.classList.add(isBalanced(li.textContent) ? 'valid' : 'invalid');
});
