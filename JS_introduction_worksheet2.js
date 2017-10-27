// JavaScript Introduction Worksheet

// The purpose of this worksheet is to learn the relationship between a parameter (in the function signature)
// and an argument (what is passed in when a function gets called).
// Pay special attention to the arguments being passed into function calls at the bottom of this worksheet
// and do your best to get the answers!

function getTriangleArea(height, width) {
	return height * width / 2;
}

function getRectangleArea(height, width) {
	return height * width;
}

function addTwoNumbers(num1, num2) {
	return num1 + num2;
}

function subtractTwoNumbers(num1, num2) {
	console.log("The difference is: " + (num1 - num2));
}

function addTwoAreas(num1, num2, num3, num4) {
	return getTriangleArea(num1, num3) + getRectangleArea(num2, num4);
}

function checkingConditions(value) {
	var number = 0;
	if (value % 2 !== 0) {
		if (value > 10) {
			number = 10;
			return number;
		}
		else {
			return number;
		}
	}
	else {
		return value;
	}
}

function loopingThroughNumbers(loopLimit) {
	var number = 0;
	for(var i  = 1; i <= loopLimit; i++) {
		number += i;
	}
	return number;
}

var numberOne = 24;
var numberTwo = 2;
var height = 10;
var width = 5;

var answer1 = getTriangleArea(height, width); // 25; takes values from global variables and sends a 'cloned)(?)' argument above where the values are named the same and would work without reference here: getTriangleArea() <- nothing required inside parameters
var answer2 = getRectangleArea(height, 10); // 100; 10 here is an argument to change 'width' in the function's parameter above to this
var answer3 = addTwoNumbers(1, numberTwo); // 3; 1 here is an argument to change 'num1' in the function's parameter above to this
var answer4 = subtractTwoNumbers(numberOne, numberTwo); // 22; when the function here is called it takes the global variables 'numberOne/Two' and sends those values as an argument above to change the function above's parameters 'num1/2' to equal the variables called here
var answer5 = getRectangleArea(width, numberTwo) + addTwoNumbers(height, 1); // 22; 5 * 2 = 10; 10 + 1 = 11; 10 + 11 = 22
var answer6 = addTwoNumbers(addTwoNumbers(10, 20), 30); // 60; a function is used as an argument that adds 10 + 20 first, then sends the result along with the '30' outside of the inside parenthesis to add both for the initial function call
var answer7 = addTwoAreas(numberOne, numberTwo, height, width); // 130; similar as explained above, main trick is that it's not done in order in the original function: ((num1 * num3)/2) and (num2 * num4)
var answer8 = checkingConditions(7); // 0; (7 % 2 !== 0), so the else statement returns: number = 0
var answer9 = loopingThroughNumbers(5); // 15; 1 + 2 + 3 + 4 + 5 = 15
var answer10 = loopingThroughNumbers(addTwoNumbers(numberTwo, addTwoNumbers(1, 1))); // 10; a bit similar to answer6, a single argument (which the function above is limited to 1 argument) is made here using the function addTwoNumbers and uses the parameters to add numberTwo (2) with the second function addTwoNumbers which sends the argument (1, 1) above to retrieve the 2nd number (2), 2 + 2 = 4, 1 + 2 + 3 + 4 = 10

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);
console.log(answer6);
console.log(answer7);
console.log(answer8);
console.log(answer9);
console.log(answer10);