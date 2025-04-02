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

