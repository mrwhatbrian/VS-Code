/* TRADITIONAL */

let x = 5;
let y = 5;

function toAdd(x, y) {
  return x + y;
}

function toSubtract(x, y) {
  return x - y;
}

function toMultiply(x, y) {
  return x * y;
}

function toDivide(x, y) {
  return x / y;
}

function toModule(x, y) {
  return x % y;
}

console.log(`Addition: ${x} + ${y} = ${toAdd(x, y)}`);
console.log(`Difference: ${x} - ${y} = ${toSubtract(x, y)}`);
console.log(`Multiplication: ${x} * ${y} = ${toMultiply(x, y)}`);
console.log(`Division: ${x} / ${y} = ${toDivide(x, y)}`);
console.log(`Module: ${x} % ${y} = ${toModule(x, y)}`);

console.log("\n-----------------------------------------------------------------------\n");

function vehicleDescription(vin = "1FTWW31F") {
  const make = "Ford";
  const year = 2006;
  const model = "F350";
  const style = "Truck";
  const bodyColor = "Midnight Blue";
  const fuelType = "Diesel";

const display = `VIN: ${vin}
Make: ${make}
Year: ${year}
Model or Series: ${model}
Style: ${style}
Body Color: ${bodyColor}
Fuel Type: ${fuelType}`;

  return display;
}

console.log(vehicleDescription());