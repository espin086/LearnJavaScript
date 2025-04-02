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

