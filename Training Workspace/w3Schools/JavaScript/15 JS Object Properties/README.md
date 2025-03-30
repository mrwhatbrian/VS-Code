# JavaScript Object Properties

## An Object is an Unordered Collection of Properties

Properties are the most important part of JavaScript objects.

Properties can be changed, added, deleted, and some are read only.

## Accessing JavaScript Properties

The syntax for accessing the property of an object is:

```js
// objectName.property
let age = person.age;
```

OR

```js
//objectName["property"]
let age = person["age"];
```

OR

```js
//objectName[expression]
let age = person[x];
```

### Examples

```js
person.firstname + " is " + person.age + " years old.";
```

```js
person["firstname"] + " is " + person["age"] + " years old.";
```

```js
let x = "firstname";
let y = "age";
person[x] + " is " + person[y] + " years old.";
```

## Adding New Properties

You can add new properties to an existing object by simply giving it a value:

```js
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue",
};

person.nationality = "English";

console.log(person.firstname + " is " + person.nationality + ".");
```

## Deleting Properties

The **delete** keyword deletes a property from an object:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person.age;

console.log(person.firstname + " is " + person.age + " years old.");
// Output : John is undefined years old.
```

OR

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

delete person["age"];
```

### Note

> The delete keyword deletes both the value of the property and the property itself.

> After deletion, the property cannot be used before it is added back again.

## Nested Objects

Property values in an object can be other objects:

```js
myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
```

You can access nested objects using the dot notation or the bracket notation:

```js
myObj.myCars.car2;
```

```js
myObj.myCars["car2"];
```

```js
myObj["myCars"]["car2"];
```

```js
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
```
