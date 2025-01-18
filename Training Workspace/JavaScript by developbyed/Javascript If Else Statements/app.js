const age = 16;

/*
  == checks for equality after converting types if needed.
  === checks for equality without converting types (strict comparison).
*/

if (age > 18) {
  console.log("You are good to go!");
} else if (age < 15) {
  console.log("Wow you're really young...");
} else {
  console.log("You aren't old enough");
}

console.log("\n---------------------------\n");

const dice1 = 6;
const dice2 = 3;

/*
  && AND Operator
  || OR Operator
*/
if (dice1 === 6 && dice2 === 6) {
  console.log("You rolled a double");
} else {
  console.log("You didn't");
}
