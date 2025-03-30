const cat = {
  name: "Siri",
  age: 1,
  color: "White",
  eyes: "Brown",
  gender: "Male",
  information: function() {
    return  "Name: " + this.name +
            "\nAge: " + this.age +
            "\nColor: " + this.color +
            "\nEyes: " + this.eyes +
            "\nGender: " + this.gender
  }
};

console.log(cat.information());
