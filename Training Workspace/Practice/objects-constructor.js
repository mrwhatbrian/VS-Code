function Cat(name, age, nationality, eyeColor, color) {
  this.name = name;
  this.age = age;
  this.nationality = nationality;
  this.eyeColor = eyeColor;
  this.color = color;
  this.catInfo = function () {
    return  "Name: " + this.name +
            "\nAge: " + this.age +
            "\nNationality: " + this.nationality +
            "\nEye Color: " + this.eyeColor +
            "\nColor: " + this.color;
  }
}

const siri = new Cat("Siri", 1, "Domestic", "Brown", "White & Black");

console.log(siri.catInfo());
