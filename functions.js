
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

console.log(myVar)