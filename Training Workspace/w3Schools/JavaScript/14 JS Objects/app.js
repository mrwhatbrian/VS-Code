/*
  NOTE
  It is common practice to declare objects with the const keyword.
*/
console.log("----------------------------");
console.log("JavaScript Object");
console.log("----------------------------\n");
const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

console.log(car.type);

/*
  NOTE
  name:value pairs are also called key:value pairs.

  object literals are also called object initializers.
*/

console.log("\n----------------------------");
console.log("Creating a JavaScript Object");
console.log("----------------------------\n");

const cat = {
  firstName: "Siri",
  lastName: "Cabs",
  age: 1,
  eyeColor: "brown",
};

console.log(`${cat.firstName} is ${cat.age} years old.`);

// This example creates an empty JavaScript object, and then adds 4 properties
const person = {};

person.firstName = "Reon";
person.secondName = "Isaiah";
person.age = 4;
person.eyeColor = "brown";

console.log(
  `${person.firstName} ${person.secondName} is ${person.age} months old.`
);

console.log("\n----------------------------");
console.log(`Using the new Keyword`);
console.log("----------------------------\n");

const alexa = new Object();

alexa.name = "Alexa";
alexa.age = 4;
alexa.eyeColor = "brown";

console.log(
  `${alexa["name"]} is ${alexa["age"]} and she has ${alexa["eyeColor"]} eyes.`
);

console.log("\n----------------------------");
console.log(`JavaScript Object Methods`);
console.log("----------------------------\n");

const info = {
  firstName: "Lil",
  secondName: "Siri",
  id: 5566,
  fullName() {
    return this.firstName + " " + this.secondName;
  },
};

console.log(info.fullName());
