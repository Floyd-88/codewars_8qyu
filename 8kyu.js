/*There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

number of pillars (≥ 1);
distance between pillars (10 - 30 meters);
width of the pillar (10 - 50 centimeters).
Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).
*/
function pillars(num_pill, dist, width) {
 let distance = 0;
  if(num_pill > 1 && dist >= 10 && dist <= 30 && width >= 10 && width <= 50) {
 return distance = ((num_pill - 1) * dist * 100) + ((num_pill - 2) *  width)
  } else if(num_pill = 1 && width >= 10 && width <= 50) {
    return distance = 0;
  }   
}



/*We need a function that can transform a number into a string.
What ways of achieving this do you know?*/
function numberToString(num) {
  return String(num);
}

/*Task
Given an integral number, determine if it's a square number:*/
var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
  }; // fix me
console.log(isSquare(16))


/*Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...*/
let friends = ["Ryan", "Kieran", "Mark"];
function friend(friends){
  let lengthCheck = friends.filter( item => item.length === 4);
  return lengthCheck;
}


/*Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.*/
let numbers = [2, 4, 3];
function squareSum(numbers){
let result = 0;
let sum = numbers.map((i) => {
	result += Math.pow(i, 2);
	return result;
})
return (numbers.length != 0) ? sum.pop() : 0;
}

console.log(squareSum(numbers));



/*Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.*/
function boolToWord( bool ){
return (bool === true) ? "Yes" : "No";
}
console.log(boolToWord( false ))


/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.*/
function invert(array) {
 let result = array.map( (num) => {return (num > 0 || num < 0) ? (num - num*2) :  -0})
 return result
}
let array = [1,-2,3,0,5];
console.log(invert(array));



/*In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?*/
function nbYear(p0, percent, aug, p) {
	let percentPeople = 0;
	let i = 0;
	while (p0 < p) {
	percentPeople = p0 / 100 * percent;
	p0 += aug + percentPeople;
	i = i+1;
  }
  return i;
}
console.log(nbYear(1500000, 0.25, 1000, 2000000))


/*In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?*/
function makeNegative(num) {
if(num < 0) {return num} else if (num >= 0) {return num - num * 2}
}

/*There is an array with some numbers. All numbers are equal except for one. Try to find it!*/
function findUniq(arr) {
 let result = arr.filter(function(num, i, arr) {
 	return arr.indexOf(num) === arr.lastIndexOf(num);
 });return +result.join()
}
let arr = [ 1];
console.log(findUniq(arr));