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
