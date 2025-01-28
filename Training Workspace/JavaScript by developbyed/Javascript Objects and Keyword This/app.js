const user = {
  name: "Siri", // Name of the user
  age: 1, // Age of the user
  cat: true, // Indicates whether the user is a cat (true or false)
  purchase: ["Food", "Snacks", "Toys"], // Array of items purchased

  // Method to log the user's name
  sayName: function () {
    console.log(this.name);
  },
};

console.log(user.purchase); // Outputs the list of purchased items: ["Food", "Snacks", "Toys"]

console.log("\n-------------------------------------\n");

user.sayName(); // Outputs the name of the user: Siri

function sayMyAge() {
  // Logs the age using 'this', but 'this' refers to the global context, so the output is undefined.
  console.log(`My AGE is ${this.age}`);
}

sayMyAge(); // Since 'this' is in the global context, the result will be undefined
