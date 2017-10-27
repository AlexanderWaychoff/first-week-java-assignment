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

function addTwoNumbers(numberOne, numberTwo) {
	return numberOne + numberTwo;
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

var answer1 = getTriangleArea(height, width); // 25, no change was needed
var answer2 = getRectangleArea(height, width); // 50, changed '10' to 'width'
var answer3 = addTwoNumbers(1, numberTwo); // 26, changed '1' here to 'numberOne', and above changed both parameters to 'numberOne' and 'numberTwo'
var answer4 = subtractTwoNumbers(numberOne, numberTwo); // ANSWER
var answer5 = getRectangleArea(width, numberTwo) + addTwoNumbers(height, 1); // ANSWER
var answer6 = addTwoNumbers(addTwoNumbers(10, 20), 30); // ANSWER
var answer7 = addTwoAreas(numberOne, numberTwo, height, width); // ANSWER
var answer8 = checkingConditions(7); // ANSWER
var answer9 = loopingThroughNumbers(5); // ANSWER
var answer10 = loopingThroughNumbers(addTwoNumbers(numberTwo, addTwoNumbers(1, 1))); // ANSWER

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