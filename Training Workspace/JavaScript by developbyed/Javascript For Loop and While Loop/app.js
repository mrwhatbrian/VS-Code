const names = ["Siri", "Alexa", "Reon", "Isaiah", "Izzy"];

// Iterate through the array and greet each name
for (name of names) {
  console.log(`Hello, ${name}`);
  // Check if the current name is "Reon"
  if (name === "Reon") {
    console.log("Reon is in my list");
    break; // Exit the loop after finding "Reon"
  }
}

console.log("\n---------------------------------------\n");

let loading = 0; // Initialize the counter variable

// Loop until the loading variable reaches 100
while (loading < 100) {
  console.log("It's going to keep looping"); // Print the message
  loading++; // Increment the loading variable
}
