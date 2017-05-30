//Write a program that takes a single parameter 
//from the command line, a number, 
//and rolls that many six-sided dice. 


//take one parameter from command line (process.argv)
var parameter = process.argv[2];
//generate a random number within the range of 1 - 6(Math.random)
function randomDice () {
	return Math.trunc(Math.random() * 6 + 1);
}

//do the above operation parameter number of times 
function numberOfTimes (p) {
	var input = 'Rolled ' + p + ' dice: ';
	var input2 = randomDice();
	for (var i = 1; i < p; i ++) {
	  input2 += ', ' + randomDice();
	}
	return input + input2;
}

console.log(numberOfTimes(parameter));


//print to the console "Rolled n dice: ",  ....


