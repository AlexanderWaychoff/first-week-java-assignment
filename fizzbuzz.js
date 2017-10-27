"use strick"


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


let word = alterWord();

function alterWord(){
	let word = askForWord();
	let backWords = reverseWord(word);
}

function askForWord(){
	let word = [];
	word = prompt ("Type something at me and I'll type it backwards!");
	console.log(word);
	console.log(word[3]);
	return word;
}
function reverseWord(word){
	let i = word.length;
	console.log(word);
	word = [];			//this is needed to prevent word.pop() from giving an error, but deletes the string entered in the prompt
	console.log(word);
	let letterRemove;
	let wordBackwards = [];
	console.log(i);
	for(i; i > 0; i--){
		letterRemove = word.pop();
		console.log(i);
		console.log(word);
		wordBackwards.push(letterRemove);
	}
	console.log(wordBackwards);
	return wordBackwards;
	
}