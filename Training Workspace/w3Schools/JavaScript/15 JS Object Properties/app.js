const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Mazda",
    car4: "Tesla",
  },
};

let p1 = "myCars";
let p2 = "car4";

console.log(myObj.myCars.car1);
console.log(myObj.myCars["car2"]);
console.log(myObj["myCars"]["car3"]);
console.log(myObj[p1][p2]);
