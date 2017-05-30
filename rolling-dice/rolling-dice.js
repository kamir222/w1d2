//Write a program that takes a single parameter 
//from the command line, a number, 
//and rolls that many six-sided dice. 


//take one parameter from command line (process.argv)
var parameter = process.argv[2];
//generate a random number within the range of 1 - 6(Math.random)
function randomDice () {
	return Math.trunc(Math.random() * 6 + 1)
}

console.log(randomDice());

//do the above operation parameter number of times 

//parameter * randomDice()

//print to the console "Rolled n dice: ",  ....


