//var age = 15;
//
//if (age < 20) {
//	console.log("John is a teenager");
//} else if (age > 20 && age < 30) {
//
//	console.log("John is a young man");
//} else {
//	console.log("John is a man");
//}
//
//var job = "teacher";
//
//job = prompt("What does John do?");
//
//switch (job) {
//	case 'teacher':
//		console.log("John teaches kids.");
//		break;
//
//	case 'driver':
//		console.log("John drive a cab in Lisbon.");
//		break;
//
//	case 'cop':
//		console.log("John helps fight crime.");
//		break;
//	default:
//		console.log("John does something else.");
//}

//////////////////////////////////////
// CODING CHALLENGE 1

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :) */

//var johnHeight = 1.27
//var johnAge = 25
//
//var friendHeight = 1.27
//var friendAge = 25
//
//var thirdHeight = 1.27
//var thirdAge = 25
//
//var johnScore = johnHeight + johnAge * 5;
//console.log(johnScore);
//var friendScore = friendHeight + friendAge * 5;
//console.log(friendScore);
//var thirdScore = thirdHeight + thirdAge * 5;
//console.log(thirdScore);
//
//if (johnScore > friendScore && johnScore > thirdScore){
//	console.log("John wins with a score of " + johnScore);
//} else if (friendScore > johnScore && friendScore > thirdScore) {
//	console.log("Frind wins with a score of " + friendScore);
//} else if (thirdScore > johnScore && thirdScore > friendScore) {
//	console.log("The third guy wins with a score of " + thirdScore);
//} else {
//	console.log("It\'s a draw!");
//}

/* function calculateAge(yearOfBirth) {
	var age = 2017 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);

function yearsUntilRetirement(name = 'Sexy', year = 1991) {
	var age = calculateAge(year);
	var retirement = 65 - age;
	if (retirement >= 0) {
		console.log(name + " retires in " + retirement + " years.");
	} else {
		var yearsSinceRetirement = 0 - retirement;
		console.log(name + " retired " + yearsSinceRetirement + " years ago.");
	}

}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
yearsUntilRetirement(); */

/* var names = [
	['John', 1990],
	['Jane', 1969],
	['Mark', 1948]
	];

console.log(names[2][1]);

var john = ['John', 'Smith', 1990, 'driver', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();
console.log(john.indexOf('Smith'));
console.log(john);
console.log(names);

if (john.indexOf('teacher') === -1){
	console.log('John is NOT a teacher');
} */


////////////////////////////////////////////////////////
///////// LECTURE: OBJECTS /////////////////////////////
////////////////////////////////////////////////////////

//var john = {
//	name: 'John',
//	lastName: 'Smith',
//	yearOfBirth: 1990,
//	job: 'teacher',
//	isMarried: false,
//	family: ['Jane', 'Mark', 'Bob'],
//	calculateAge: function() {
//		this.age = 2017 - this.yearOfBirth;
//	}
//	
//};
//
//
//
//john.calculateAge();
//console.log(john);

////////////////////////////////////////////////////////
///////// LECTURE: LOOPS ///////////////////////////////
////////////////////////////////////////////////////////

//for (var i = 0; i < 10; i++){
//	console.log(i+1);
//}

//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob', 'Sam', 'Darius', 'Harry'];
//
////for (var i = 0; i < names.length; i++){
////	console.log(names[names.length - i -1]);
////}
//
////for (var i = names.length - 1; i >= 0; i--){
////	console.log(names[i]);
////}
//
//var i = 0
//while (i < names.length){
//	console.log(names[i]);
//	i++
//}
//
//for (var i = 1; i <= 5; i++) {
//	if (i === 3){
//		continue;
//	}
//	
//	console.log(i);
//}

///////////////////////////////////////
// CODING CHALLENGE 2

/*
1. Create an array with some years where persons were born
2. Create an empty array (just [] )
3. Use a loop to fill the array with the ages of the persons
4. Use another loop to log into the console whether each person is of full age (18 or older), as well as their age

5. Finally, create a function called printFullAge which receives the array of years as an argument, executes the steps 2., 3. and 4. and returns an array of true/false boolean values: true if the person is of full age (>= 18 years) and false if not (< 18 years)
6. Call the function with two different arrays and store the results in two variables: full_1 and full_2

Example input:  [1965, 2008, 1992]
Example output: [true, false, true]

Hint: you can use a loop not only to read from an array, like y[i], but also to set values in an array, like y[i] = ... You can also use the specific array methods.
*/

var years = [1990, 2001, 1954, 1987, 1999, 2000, 1984];


function printFullAge(dob) {
	var ages = []
	var ofAge = []

	for (var i = 0; i < dob.length; i++) {
		ages.push(2017 - dob[i]);
	}


	for (var i = 0; i < ages.length; i++) {
		if (ages[i] < 18) {
			console.log(ages[i] + " is too young!");
		} else {
			console.log(ages[i] + " is fine.");
		}
	}

	for (var i = 0; i < ages.length; i++) {
		if (ages[i] < 18) {
			ofAge.push(false);
		} else {
			ofAge.push(true);
		}
	}
	
	return ofAge;
}


console.log(printFullAge([1990, 2014, 1944]));

