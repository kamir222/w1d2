var parameter = process.argv[2];

//generate a random number within the range of 1 - 6(Math.random)
function randomDice () {
	return Math.trunc(Math.random() * 6 + 1);
}

//call randomDice() a p number of times 
function numberOfTimes (p) {
	var input2 = [];
	for (var i = 1; i < p; i ++) {
	  input2.push(randomDice());
	}
	return 'Rolled ' + p + ' dice: ' + input2;
}

console.log(numberOfTimes(parameter));