const msg = "Hello, World!"; // GLOBAL SCOPE

/* Function Declaration (Traditional Function) */
function add(num1, num2) {
  console.log(num1 + num2);
}

add(50, 50);

function toUpper(text) {
  const upperCase = text.toUpperCase();
  console.log(upperCase);
}

toUpper(msg);

const name = "Siri";

/* Function Expression */
const greet = function (name) {
  return "Hello, " + name;
};

/* Arrow Function (ES6+) */
const greet2 = (name) => {
  return "Hello, " + name;
};

// For a single line return:
const greet3 = (name) => "Hello, " + name;
