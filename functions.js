
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