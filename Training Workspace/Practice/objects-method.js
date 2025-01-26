const person = {
  firstCat: "Siri",
  secondCat: "Alexa",
  message: function() {
    return `First Cat: ${this.firstCat} , Second Cat: ${this.secondCat}`;
  }
};

console.log("Accessing Object Methods: " + person.message());
console.log();
console.log("Using JavaScript Methods: " + person.message().toUpperCase());