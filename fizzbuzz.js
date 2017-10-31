"use strict"


// let fizz = "fizz";		//fizz = divisible by 3
// let buzz = "buzz";		//buzz = divisible by 5

// for(let i = 0; i <=100; i++){
	// if(i % 3 === 0 && i % 5 === 0){
		// console.log(fizz + buzz);	
	// }
	// else if (i % 3 === 0){
		// console.log(fizz);
	// }
	// else if(i % 5 === 0){
		// console.log(buzz);
	// }
	// else{
		// console.log(i);
	// }
// }


//reverse word

// alterWord();

// function alterWord(){
	// let word = askForWord();
	// let backwards = reverseWord(word);
	// alert(backwards);
// }

// function askForWord(){
	
	// let word = prompt ("Type something at me and I'll type it backwards!");
	
	// console.log(word);
	// console.log(word[3]);
	
	// let wordSplit = word.split("");
	
	// console.log(wordSplit);
	// console.log(wordSplit[2]);
	
	// return wordSplit;
// }
// function reverseWord(word){
	
	// let wordBackwards;
	
	// let letterRemove;
	// console.log(word);

	// wordBackwards = word.reverse();
	// wordBackwards = wordBackwards.join("");
	
	// console.log(wordBackwards);
	// return wordBackwards;
	
// }


//capitalize word

// alterWord();

// function alterWord(){
	// let word = askForWord();
	// let cappedWord = capitalize(word);
	// alert(cappedWord);
// }

// function askForWord(){
	
	// let word = prompt ("Type any word(s) and I'll capitalize the first letter for you!");
	
	// console.log(word);
	// console.log(word[1]);
		
	// let wordSplit = word.split(" ");
	
	
	// return wordSplit;
// }

// function capitalize(word){

	// let modifyWord;
	// let firstLetter; 		
	// console.log(word);
	// for(let i = 0; i < word.length; i++){
		// modifyWord = word[i];
		// modifyWord = modifyWord.toString()
		// firstLetter = modifyWord.charAt(0).toUpperCase();
		// modifyWord = modifyWord.split("");
		// modifyWord[0] = firstLetter;
		// modifyWord = modifyWord.join("");
		// word[i] = modifyWord;
		
	// }
	
	// word = word.join(" ");
	
	// return word;
	
// }


//compress word

// alterWord();

// function alterWord(){
	// let word = askForWord();
	// let compressed = compressWord(word);
	// alert(compressed);
// }

// function askForWord(){
	
	// let word = prompt ("Type anything and I will tell you in order how much of each character you typed in a row!");
	
	// console.log(word);
	// console.log(word[3]);
	
	// let wordSplit = word.split("");
	
	// console.log(wordSplit);
	// console.log(wordSplit[2]);
	
	// return wordSplit;
// }

// function compressWord(word){
	// wordLength = word.length;
	// let comparedWord = word;
	// let compressedWord = [];
	// let sameLetterCount = 0;
	// let cycleCounter = 0;
	// let iEqualizer;
	
	// for(i = 0; i <= wordLength; i++){
		// if ( word[i] === word[i + 1] ){
			// sameLetterCount += 1;	
		// }else{
			// sameLetterCount += 1;
			// if(i === wordLength){
				// iEqualizer = i - 1;
			// }else{
				// iEqualizer = i;
			// }
			// sameLetter = word[iEqualizer];
			// compressedWord.push(sameLetterCount);
			// console.log(compressedWord);
			// compressedWord.push(sameLetter);
			// console.log(compressedWord);
			
			// sameLetterCount = 0;
		// }
	// }
	// compressedWord = compressedWord.join("");
	
	// return compressedWord;		
// }



//palindrome

// alterWord();

// function alterWord(){
	
	// let userWord = askForWord();
	// let sendWord = keepOnlyLetters(userWord);
	// let backwards = reverseWord(userWord);
	// testPalindrome(sendWord, backwards, userWord);
// }

// function askForWord(){
	
	// let word = prompt ("Type a Palindrome and I'll let you know if it is one!");	
	// let lowerCaseWord = word.toLowerCase();
	
	// return lowerCaseWord;
// }
// function reverseWord(sendBackwards){	

	// let checkForLetters = /[A-z]/g;
	// let checkBackwards = sendBackwards.match(checkForLetters);
	// checkBackwards.reverse();
	// return checkBackwards;
// }
// function keepOnlyLetters(word){
	
	// let checkForLetters = /[A-z]/g;
	// let result = word.match(checkForLetters);
	// return result;
// }
// function testPalindrome(wordForwards2, wordBackwards, userWord){
	
	// let wordLength = wordForwards2.length;
	// let checkLetterForward;
	// let checkLetterBackward;
	
	// for(let i = 0; i <= wordLength; i++){
		
		// if(wordForwards2 [i] === wordBackwards [i]){
			
		// }else{
			// return alert(userWord + " is not a Palindrome.");
		// }
	// }
	// return alert(userWord + " is a Palindrome!");
// }




//happy numbers

// seeIfHappy();

// function seeIfHappy (){
	
	// let userNumber = askForNumber ();
	// let numberLength = calculateNumberLength (userNumber);
	// let happyTest = [];
	// let testNumber = 0;
	// let addNumbers = 0;
	// let splitNumber = splitNumberUp (userNumber, numberLength);
	// calculateHappiness (splitNumber, numberLength, happyTest, testNumber, addNumbers);
// }

// function askForNumber (){
	
	// let number = prompt("Please enter a positive integer and I'll tell you if it's a happy number!");
	// let numberCheck = parseInt(number);
	
	// if ( Number.isInteger (numberCheck) && number >= 0 ){
		// return number;
	// }else{
		// alert(number + " is not a valid input.  Please refresh and try again.");
	// }
	// return;
// }

// function splitNumberUp (userNumber, numberLength){
	
	// let numberSplit = userNumber.split("");
	// let turnIntoNumbers;
	// let reformedNumber = [];
	// for (let i = 0; i < numberLength; i++){
		// turnIntoNumbers = numberSplit[i];
		// turnIntoNumbers = parseInt(turnIntoNumbers, 10);
		// reformedNumber.push(turnIntoNumbers);
	// }
	// return reformedNumber;
// }

// function calculateNumberLength (userNumber){
	
	// let numberLength = userNumber.length;
	// return numberLength;	
// }

// function calculateHappiness (reformedNumber, numberLength, happyTest, testNumber, addNumbers){
	
	// for (let i = 0; i < numberLength; i++){
		
		// testNumber = reformedNumber[i];
		// testNumber = testNumber * testNumber;
		// addNumbers += testNumber;
		// happyTest.push(testNumber);	
	// }
	// if(addNumbers === 1){
		// return alert("This is a happy number!")
	// }else if(addNumbers === 4){
		// return alert("This is not a happy number.");
	// }else{
		// addNumbers = addNumbers.toString();
		// numberLength = addNumbers.length;
		// reformedNumber = splitNumberUp(addNumbers, numberLength);
		// addNumbers = 0;
		// testNumber = 0;
		// happyTest = [];
		// calculateHappiness (reformedNumber, numberLength, happyTest, testNumber, addNumbers);
	// }
	
// }





//1-100 prime number

// getPrimeNumber();

// function getPrimeNumber(){
	// let questionedNumber = askForNumber();
	// let answer = calculateIfPrime(questionedNumber);
	
// }
// function askForNumber(){
	// let userNumber = prompt("Enter a positive integer and I'll determine if it is a prime number!");
	// return userNumber;
// }


// function calculateIfPrime(userNumber){
	// let notPrime = 0;
	// for(let i = 1; i <= userNumber; i++){
		// if(userNumber % i == 0){
			// notPrime += 1;
		// }else{
		// }
	// }
	// if(notPrime == 2){
		// return alert("This number is not prime.");
	// }else{
		// return alert("This number is prime!");
	// }
// }




// Fiobonacci

// startFiobonacci();

// function startFiobonacci(){
	// let userInput = getUserStartNumber();
	// calculateFiobonacci(userInput);
// }
// function getUserStartNumber(){
	// let userNumber = prompt("Please enter a positive integer and I'll calculate the next 10 numbers as a Fiobonacci!");
	// //let numberToArray = userNumber.split(", ");
	// //return numberToArray;	
	// return userNumber;
// }
// function calculateFiobonacci(userInput){
	// let nextNumber = 0;
	// let nextNumber2 = 0;
	// let userInputSplit = [];
	// userInput = parseInt(userInput, 10);
	// if((userInput >= 0)){
		// for(let i = 0; i <= 9; i++){
			// if(i === 0){
				// nextNumber = userInput;
				// userInputSplit.push(nextNumber);
				// userInputSplit.push(nextNumber);
				
				// nextNumber = parseInt(nextNumber, 10);
				
				// nextNumber += nextNumber;
				// userInputSplit.push(nextNumber);
			// }else{
				// nextNumber2 = userInputSplit [i];
				// parseInt(nextNumber2, 10);
				
				// nextNumber += nextNumber2;
				// userInputSplit.push(nextNumber);
			// }
		// }		
	// }else{
		// return alert("The value you entered isn't valid.  Please try again.");
	// }
	
	// return alert("The Fiobonacci for the number you entered is: " + userInputSplit);
	
// }



// extra problems
//Given a non-empty string like "Code" return a string like "CCoCodCode".
// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

// explodeString();

// function explodeString(){
	
	// let userString = getUserString();
	// splosionTime(userString);
// }

// function getUserString(){
	
	// let userString = prompt("Enter a word and I'll string-splosion it!");
	// return userString;
// }

// function splosionTime(userString){
	
	// userString = userString.split("");
	// let stringLength = userString.length;
	// let splodedIndex;
	// let splodedString = [];
	// let stringAccumulator = 0;
	// console.log(userString);
	// splodedIndex = userString[0];
	// splodedString.push(splodedIndex);
	
	// for (let i = 0; i < stringLength; i++){
		// if (i === 0){
			// console.log(i);
			// splodedIndex = userString[i];
			// splodedString.push(splodedIndex);
			// if (stringAccumulator < stringLength){
				// stringAccumulator += 1;
				// console.log(stringAccumulator);
			// }
		// }else{
			// splodedIndex = userString[i];
			// splodedString.push(splodedIndex);
			// console.log(splodedString);
			// console.log(i);
			// if (i === stringAccumulator && stringAccumulator < stringLength - 1){
				// i = -1;
			// }
		// }
	// }
	// splodedString = splodedString.join("");
	// return alert(splodedString);
	// console.log(splodedString);
// }




// Consider the leftmost and right most appearances of some value in an array. We'll say 
//that the "span" is the number of elements between the two inclusive. A single value has 
//a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)
// maxSpan([1, 2, 1, 1, 3]) → 4
// maxSpan([1, 4, 2, 1, 4, 1, 4]) → 6
// maxSpan([1, 4, 2, 1, 4, 4, 4]) → 6

calculateSpan();

function calculateSpan(){
	
	let userInput = askForNumber();
	determineSpan(userInput);
}

function askForNumber(){
	
	let getNumber = prompt("Give me a number array and I'll calculate the largest span!");
	return getNumber;
}

function determineSpan(userInput){
	
	let inputSplit = userInput.split("");
	let spanLength = inputSplit.length;
	let inputValue = parseInt(userInput);
	let index;
	let check0 = 0;
	let check1 = 0;
	let check2 = 0;
	let check3 = 0;
	let check4 = 0;
	let check5 = 0;
	let check6 = 0;
	let check7 = 0;
	let check8 = 0;
	let check9 = 0;
	
	let spanCheck0 = 0;
	let spanCheck1 = 0;
	let spanCheck2 = 0;
	let spanCheck3 = 0;
	let spanCheck4 = 0;
	let spanCheck5 = 0;
	let spanCheck6 = 0;
	let spanCheck7 = 0;
	let spanCheck8 = 0;
	let spanCheck9 = 0;
	
	let spanTotal = [];
	
	let spanTotal0 = 0;
	let spanTotal1 = 0;
	let spanTotal2 = 0;
	let spanTotal3 = 0;
	let spanTotal4 = 0;
	let spanTotal5 = 0;
	let spanTotal6 = 0;
	let spanTotal7 = 0;
	let spanTotal8 = 0;
	let spanTotal9 = 0;
	
	console.log(inputValue);
	
	for(let i = 0; i < spanLength; i++){
		index = inputSplit[i];
		spanTotal.push(index);
		 if (index === 0){
			// check0 += i;
			
			// if{spanCheck0 >= 1){
				
			// }
			// spanCheck0 += 1;
		// }
			
			// check +=1;
		 }
	}
	
	check0 = spanTotal.indexOf("0");
	spanCheck0 = spanTotal.lastIndexOf("0");
	spanTotal0 = spanCheck0 - check0;
	
	check1 = spanTotal.indexOf("1");
	spanCheck1 = spanTotal.lastIndexOf("1");
	spanTotal1 = spanCheck1 - check1;
	
	check2 = spanTotal.indexOf("2");
	spanCheck2 = spanTotal.lastIndexOf("2");
	spanTotal2 = spanCheck2 - check2;
	
	check3 = spanTotal.indexOf("3");
	spanCheck3 = spanTotal.lastIndexOf("3");
	spanTotal3 = spanCheck3 - check3;
	
	check4 = spanTotal.indexOf("4");
	spanCheck4 = spanTotal.lastIndexOf("4");
	spanTotal4 = spanCheck4 - check4;
	
	check5 = spanTotal.indexOf("5");
	spanCheck5 = spanTotal.lastIndexOf("5");
	spanTotal5 = spanCheck5 - check5;
	
	check6 = spanTotal.indexOf("6");
	spanCheck6 = spanTotal.lastIndexOf("6");
	spanTotal6 = spanCheck6 - check6;
	
	check7 = spanTotal.indexOf("7");
	spanCheck7 = spanTotal.lastIndexOf("7");
	spanTotal7 = spanCheck7 - check7;
	
	check8 = spanTotal.indexOf("8");
	spanCheck8 = spanTotal.lastIndexOf("8");
	spanTotal8 = spanCheck8 - check8;
	
	check9 = spanTotal.indexOf("9");
	spanCheck9 = spanTotal.lastIndexOf("9");
	spanTotal9 = spanCheck9 - check9;
	
	
	if( spanTotal0 >= spanTotal1 + spanTotal2 + spanTotal3 + spanTotal4 + spanTotal5 + spanTotal6 + spanTotal7 + spanTotal8 + spanTotal9){
		return alert("0 has the largest span of " + spanTotal0);
	}else if( spanTotal1 >= spanTotal0 + spanTotal2 + spanTotal3 + spanTotal4 + spanTotal5 + spanTotal6 + spanTotal7 + spanTotal8 + spanTotal9){
		return alert("1 has the largest span of " + spanTotal1);
	}else if( spanTotal2 >= spanTotal0 + spanTotal1 + spanTotal3 + spanTotal4 + spanTotal5 + spanTotal6 + spanTotal7 + spanTotal8 + spanTotal9){
		return alert("2 has the largest span of " + spanTotal2);
	}else if( spanTotal3 >= spanTotal0 + spanTotal1 + spanTotal2 + spanTotal4 + spanTotal5 + spanTotal6 + spanTotal7 + spanTotal8 + spanTotal9){
		return alert("3 has the largest span of " + spanTotal3);
	}else if( spanTotal4 >= spanTotal0 + spanTotal1 + spanTotal2 + spanTotal3 + spanTotal5 + spanTotal6 + spanTotal7 + spanTotal8 + spanTotal9){
		return alert("4 has the largest span of " + spanTotal4);
	}else if( spanTotal5 >= spanTotal0 + spanTotal1 + spanTotal2 + spanTotal3 + spanTotal4 + spanTotal6 + spanTotal7 + spanTotal8 + spanTotal9){
		return alert("5 has the largest span of " + spanTotal5);
	}else if( spanTotal6 >= spanTotal0 + spanTotal1 + spanTotal2 + spanTotal3 + spanTotal4 + spanTotal5 + spanTotal7 + spanTotal8 + spanTotal9){
		return alert("6 has the largest span of " + spanTotal6);
	}else if( spanTotal7 >= spanTotal0 + spanTotal1 + spanTotal2 + spanTotal3 + spanTotal4 + spanTotal5 + spanTotal6 + spanTotal8 + spanTotal9){
		return alert("7 has the largest span of " + spanTotal7);
	}else if( spanTotal8 >= spanTotal0 + spanTotal1 + spanTotal2 + spanTotal3 + spanTotal4 + spanTotal5 + spanTotal6 + spanTotal7 + spanTotal9){
		return alert("8 has the largest span of " + spanTotal8);
	}else if( spanTotal9 >= spanTotal0 + spanTotal1 + spanTotal2 + spanTotal3 + spanTotal4 + spanTotal5 + spanTotal6 + spanTotal7 + spanTotal8){
		return alert("9 has the largest span of " + spanTotal9);
	}
	//almost working, but way too tedious and out of time
	
	console.log(check0);
	console.log(spanCheck0);
	
	console.log(spanTotal);
	console.log(spanLength);
	
}






