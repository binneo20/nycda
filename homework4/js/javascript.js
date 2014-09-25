// Variables

var x = 9

var y = 11

console.log(x+y);

// returns 20

// Debugging (alerts, comments, the console)

alert("hello world");

// This is a single line comment

/* Multiple-line
comment */

console.log(“This is logged to the console”);

/* Different data types

String - “Hello World”
Number - 5, 5.5, 1000 (all numbers in JS
are floats)
Boolean - true, false
Undefined (no value, var with no value)*/

// Arrays

var makeup = ["light","formal","evening"]
var outfit = ["jeans","suit","gown"]
var prep = [makeup,outfit]
console.log(prep [1][1])

// Testing

var1 = ["light","formal","evening"]
var2 = ["casual","formal","evening"]

var1===var2

// Logic

if (5 > 10) {
	console.log("you won't see this");
} else if (5===5) { 
	console.log("this is true");
}	else {
	console.log ("you won't see this either");
}

// Functions

function addTwo(some_number){
return some_number + 2;
}
console.log(addTwo(4));

// Write 3 different functions that take input and return something via the console or an alert

function addTwo(some_number){
return some_number + 2;
}
console.log(addTwo(4));

function alertName(somePersonsName){
return alert(somePersonsName);
}
alertName("Binbin");

function none() {
	console.log("what2")
}
none();
