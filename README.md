# LearnJavaScript
Based on Tutorial from Free Code Camp: https://www.youtube.com/watch?v=PkZNo7MFNFg&amp;t=84s


# Running JavaScript

- Use a code editor and create scripts and see the console in the browser
- Other options include using codepen.io 
- Install VS Code Extensions

You can also use node to run files like this, install it from here if you don't have it [download node](https://nodejs.org/en): 

```javascript
node filename.js
```

# Comments

```javascript
var number =5; //in-line comment

/* this is a multi-line comment
*/
```

# Printing to the Console

```javascript
console.log(number)
```

# Data Types and Variables

Variable names are case sentitive and should be camelCase.

- undefined
- null 
- boolean 
- string
- symbol
- number
- object

```javascript
var number = 5; //number

let ourName = "freeCodeCamp"; //string

const pi = 3.14; //constant
```

The difference between var, let, and const: 

- var: can be used in the entire program
- let: can only be used in the scope of where it was declared
- const: is an unchangeable variable

```javascript
var a; //declaring a variable
var b=2; //declaring a variable and assigning a value

a=7; //assigning a value to a variable
b=a; //assigning a value to a variable

```

# Basic Math

```javascript
//basic math
var sum = 10 + 10;
console.log(sum);

var difference = 45 - 33;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66/33;
console.log(quotient);

//incrementing and decrementing
var myVar = 87;
myVar++;
console.log(myVar);

myVar--;
console.log(myVar);

//decimal numbers
var ourDecimal = 5.7;
var myDecimal = 0.0001;

//multiplication and division of decimals
var product = 2.5 * 2.0;
console.log(product);

var quotient = 4.4 / 2.0;
console.log(quotient);

//remainder
var remainder = 11 % 3;
console.log(remainder);

//compound assignment with augmented addition
a += 12;
console.log(a);

a -= 12;
console.log(a);

a *= 12;
console.log(a);

a /= 12;
console.log(a);


```

# Strings

```javascript
var myFirstName = "John";
var myLastName = "Espinoza";

//using double quotes inside a string
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr);

//quoted strings with single quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr);

//other escape characters
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);

```

You can escapte multiple characters.

For example: 

- \n = newline
- \t = tab
- etc.

```javascript
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


```

# Arrays

```javascript
var ourArray = ["John", 23]; //this is an array with two elements, a string and a number


var myArrary = ["Quincy", 1]

var multiArray = [["the universe", 42], ["everything", 101010]]


//accessing data in an array with indexes
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; //this will return 50

var myArray = [50, 60, 70];
var myData = myArray[1]; //this will return 50

console.log(ourData);
console.log(myData);

//modify data in an array with indexes
var ourArray = [18, 64, 99];
console.log(ourArray);
ourArray[1] = 45; //this will change the second element of the array to 45
console.log(ourArray);

//accessing multi-dimensional arrays with indexes
var ourArray = [["the universe", 42], ["everything", 101010]];
var ourData = ourArray[0][1]; //this will return 42
console.log(ourData);


//pushing items into an array with push(), this pushes the new item to the end of the array
var ourArray = [["John", 23], ["cat", 2]];
ourArray.push(["dog", 3]);
console.log(ourArray);

```

# Functions 

```javascript

//function that returns a value
function ourReusableFunction() {
    console.log("Hello World");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
    console.log("HIi World");
}

reusableFunction();

//passing values to functions with arguments

function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}

ourFunctionWithArgs(99, 5);

// global scope and functions
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
    
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);

}

fun1();
fun2();


//local scope and functions
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();

// console.log(myVar) this will return an error because myVar is not defined in the global scope

//local and global variables with the same name

var outerWear = "T-Shirt";

function myOutfit() {
    var outerWear = "sweater"; //this will override the global variable outerWear with the local variable outerWear
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);

//return a value from a function with return

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// undefined value returned from a function

function addFive(sum) {
    sum += 5;
}

console.log(addFive());

//assignment with a returned value

var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

console.log(changed);

// stand in line with a queue, we are going to be adding an item to the end of the array and then removing the first item from the array
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift(); //this will remove the first item from the array and return it
}

var testArr = [1,2,3,4,5]; //this is the array that we are going to be working with

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify is used to convert the array to a string
console.log(nextInLine(testArr, 6)); //this will return the item that was added to the array
console.log("After: " + JSON.stringify(testArr)); //JSON.stringify is used to convert the array to a string

//boolean values
function welcomeToBooleans() {
    return true;
}

console.log(welcomeToBooleans());

//use conditional logic with if statements
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it is true";
    }
    return "No, it is false";
}

console.log(ourTrueOrFalse(false));

function wasThatTrue(wasThatTrue) {
    if (wasThatTrue) {  
        return "Yes, that was true";
    }
    return "No, that was false";
}

console.log(wasThatTrue(true));

//comparison with the equality operator

function testEqual(val) {
    if (val == 12) { //this is the equality operator
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(12));

// == is the equality operator
// === is the strict equality operator 
// the difference between the two is that the equality operator will convert the data types of the values being compared, while the strict equality operator will not


// test strict equality
function testStrict(val) {
    if (val === 7) { //this is the strict equality operator
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict('7'));
console.log(testStrict(7));

// comparison with the inequality operator
function testNotEqual(val) {
    if (val != 99) { //this is the inequality operator
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(97));


 // test greater than or equal to
 function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";

 }

 console.log(testGreaterOrEqual(20));

 // and operator

 function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) { // && is the and operator which means both conditions must be true
        return "Yes";
    }
    return "No";
 }

console.log(testLogicalAnd(25));

// or operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) { // || is the or operator which means at least one of the conditions must be true
        return "Outside";
    }
    return "Inside";
}

console.log(testLogicalOr(25));

```

# Time Stamp in Video: 1 hr 28 minutes