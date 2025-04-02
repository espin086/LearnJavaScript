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

//adding strings with variables
var a = "John";
var b = "Doe";

var ourStr = "Hello " + a + " " + b + "!";
console.log(ourStr);

//appending variables to strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr);

//length of a string
var firstNameLength = 0;
var firstName = "JJ";


firstNameLength = firstName.length;
console.log(firstNameLength);

//bracket notation to find the first character in a string
var firstName = "JJ";
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName);

// updating string characters
var myStr = "Jello World";
myStr[0] = "H"; //this will not work
myStr = "Hello World";

console.log(myStr);

//find last character in a string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

//third to last character in a string
var thirdToLastLetterOfLastName = lastName[lastName.length - 3];
console.log(thirdToLastLetterOfLastName);

// Creating a madlib, this is a function that takes 4 arguments and returns a string

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result = ""; //this is the result string that will be returned


    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
    return result; //this is the result string that will be returned
}

sentence = wordBlanks("dog", "big", "ran", "quickly");
console.log(sentence);