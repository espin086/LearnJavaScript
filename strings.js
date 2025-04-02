var myFirstName = "John";
var myLastName = "Espinoza";

//using double quotes inside a string
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr);

//quoted strings with single quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

//other escape characters
var myStr = "FirstLine\n\t\SecondLine\nThirdLine";
console.log(myStr);

//concatenating strings with plus operator
var ourStr = "I come first. " + "I come second.";

console.log(ourStr);

//concatenating strings with the += operator
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr);