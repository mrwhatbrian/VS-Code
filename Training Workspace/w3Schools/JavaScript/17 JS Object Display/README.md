# JavaScript Display Objects

## How to Display JavaScript Objects?

Displaying a JavaScript object will output **[object Object]**.

```js
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

document.getElementById("demo").innerHTML = person;
```

Some solutions to display JavaScript objects are:

- Displaying the Object Properties by name
- Displaying the Object Properties in a Loop
- Displaying the Object using Object.values()
- Displaying the Object using JSON.stringify()

## Displaying Object Properties

The properties of an object can be displayed as a string:

```js
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Display Properties
document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;
```

## Displaying Properties in a Loop

The properties of an object can be collected in a loop:

```js
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
}

// Display the Text
document.getElementById("demo").innerHTML = text;
```

> **NOTE**
>
> You must use **person[x]** in the loop.
>
> **person.x** will not work (Because **x** is the loop variable).

## Using Object.values()

`Object.values()` creates an array from the property values:

```js
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Create an Array
const myArray = Object.values(person);

// Display the Array
document.getElementById("demo").innerHTML = myArray;
```

## Using Object.entries()

`Object.entries()` makes it simple to use objects in loops:

```js
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + "<br>";
}
```

## Using JSON.stringify()

JavaScript objects can be converted to a string with JSON method `JSON.stringify()`.

`JSON.stringify()` is included in JavaScript and supported in all major browsers.

> **NOTE**
>
> The result will be a string written in JSON notation:
>
> {"name":"John","age":50,"city":"New York"}

```js
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

// Stringify Object
let myString = JSON.stringify(person);

// Display String
document.getElementById("demo").innerHTML = myString;
```
