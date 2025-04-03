
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


// Golf Game

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else {
        return names[6];
    }
}

console.log(golfScore(par=4, strokes=2)    )