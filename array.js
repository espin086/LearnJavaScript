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

//shopping list
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];
console.log(myList);



