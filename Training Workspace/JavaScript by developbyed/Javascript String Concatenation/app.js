const seperateLine = "\n------------------------------------------\n";

console.log("JavaScript String Concatenation" + seperateLine);
console.log("Hello," + "World!"); // Double Quote ("")
console.log(seperateLine);

/*
  The Backslash(\) is known as the escape character. 
  Used to insert special characters in strings, like quotes (\', \"), newlines (\n), and tabs (\t). 
  It’s also used in regular expressions to escape special characters.
*/

console.log("Hello, World! It\'s Me Siri"); // Single Quote ('')
console.log(seperateLine);

/*
  Backticks (`) are used for template literals, 
  allowing multi-line strings and string interpolation. 
  You can still use escape sequences with backticks, 
  like \n for newlines or \\ for a backslash.
*/
const whoami = "Siri";
const age = 1;
console.log(`WHO AM I: ${whoami}, AGE : ${age}`);
console.log(seperateLine);

/*
  Note
  typeof is an operator used to determine the type of a given operand (variable, value, or expression).
  It returns a string representing the type of the operand.
*/

console.log(typeof whoami);