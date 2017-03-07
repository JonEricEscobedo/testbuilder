// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  
  // Take in credit card number string
  // Pluck out first two digits, convert to number
	// Create if statement
		// If 38 or 39 && cardNumber.length == 14--> Diner Club
  	// Else if 34 or 37 && cardNumber.length == 15 --> AMEX

  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
	// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
	// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
	// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
	// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
	// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
	var ccLength = cardNumber.length;

	if ( ((parseInt(cardNumber.slice(0,4)) === 4903 || parseInt(cardNumber.slice(0,4)) === 4905 || parseInt(cardNumber.slice(0,4)) === 4911 || parseInt(cardNumber.slice(0,4)) === 4936) || (parseInt(cardNumber.slice(0,6)) === 564182 || parseInt(cardNumber.slice(0,6)) === 633110) || (parseInt(cardNumber.slice(0,4)) === 6333 || parseInt(cardNumber.slice(0,4)) === 6759)) && (ccLength === 16 || ccLength === 18 || ccLength === 19)) {
			return 'Switch';
	} else if (parseInt(cardNumber.slice(0,1)) === 4 && (ccLength === 13 || ccLength === 16 || ccLength === 19)) {
			return "Visa";
	} else if ((parseInt(cardNumber.slice(0,2)) >= 51 && parseInt(cardNumber.slice(0,2)) <= 55) && ccLength === 16) {
			return "MasterCard";
	} else if ((parseInt(cardNumber.slice(0,2)) === 38 || parseInt(cardNumber.slice(0,2)) === 39) && ccLength === 14) {
			return "Diner's Club";
	} else if ((parseInt(cardNumber.slice(0,2)) === 34 || parseInt(cardNumber.slice(0,2)) === 37) && ccLength === 15) {
			return "American Express";
	} else if (((parseInt(cardNumber.slice(0,4)) === 6011 || (parseInt(cardNumber.slice(0,3)) >= 644 && parseInt(cardNumber.slice(0,3)) <= 649) || parseInt(cardNumber.slice(0,2)) === 65) && (ccLength == 16 || ccLength == 19))) {
			return 'Discover';
	} else if ((parseInt(cardNumber.slice(0,4)) === 5018 || parseInt(cardNumber.slice(0,4)) === 5020 || parseInt(cardNumber.slice(0,4)) === 5038 || parseInt(cardNumber.slice(0,4)) === 6304) && (ccLength >= 12 && ccLength <= 19)) { 
			return 'Maestro';
	} else if (((parseInt(cardNumber.slice(0,6)) >= 622126 || parseInt(cardNumber.slice(0,6)) <= 622925) || (parseInt(cardNumber.slice(0,3)) >= 624 || parseInt(cardNumber.slice(0,6)) <= 626) || (parseInt(cardNumber.slice(0,4)) >= 6282 || parseInt(cardNumber.slice(0,4)) <= 6288)) && (ccLength >= 16 && ccLength <= 19)) {
			return 'China UnionPay';
	} else {
		return "Unknown network or invalid card number";
	}  
	
};

var output = detectNetwork('6249876543212345'); // diners
console.log(output);
// output = detectNetwork('39345678901234'); // diners
// console.log(output);
// var output = detectNetwork('343456789012345'); // amex
// console.log(output);
// output = detectNetwork('373456789012345'); // amex
// console.log(output);
// var output = detectNetwork('4123456789012'); // visa
// console.log(output);
// output = detectNetwork('4123456789012345'); // visa
// console.log(output);
// var output = detectNetwork('4123456789012345678'); // visa
// console.log(output);
// output = detectNetwork('5112345678901234'); // MC
// console.log(output);
// var output = detectNetwork('5212345678901234'); //  MC
// console.log(output);
// output = detectNetwork('5312345678901234'); // MC
// console.log(output);
// var output = detectNetwork('5412345678901234'); // MC 
// console.log(output);
// output = detectNetwork('5512345678901234'); // MC
// console.log(output)


