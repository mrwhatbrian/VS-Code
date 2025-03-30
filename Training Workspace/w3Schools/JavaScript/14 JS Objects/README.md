# JavaScript Object Definition

### How to Define a JavaScript Object

- Using an Object Literal
- Using the new Keyword
- Using an Object Constructor

# JavaScript Object Literal

An object literal is a list of **name:value** pairs inside curly braces **{}**.

```sh
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

# Accessing Object Properties

You can access object properties in two ways:

```sh
objectName.propertyName
```

```sh
objectName["propertyName"]
```

# JavaScript Object Methods

Methods are **actions** that can be performed on objects.

Methods are **function definitions** stored as **property values**.

| Property  | Property Value                                            |
| --------- | --------------------------------------------------------- |
| firstName | John                                                      |
| lastName  | Doe                                                       |
| age       | 50                                                        |
| eyeColor  | blue                                                      |
| fullName  | function() {return this.firstName + " " + this.lastName;} |

# In JavaScript, Objects are King.

### If you Understand Objects, you Understand JavaScript.

> **Objects** are containers for **Properties** and **Methods**.

> **Properties** are named **Values**.

> **Methods** are **Functions** stored as **Properties**.

> **Properties** can be primitive values, functions, or even other objects.

# JavaScript Objects are Mutable

Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

```sh
const x = person;
```

The object x is **not a copy** of person. The object x **is** person.

The object x and the object person share the same memory address.

Any changes to x will also change person:

```sh
//Create an Object
const person = {
  firstName:"John",
  lastName:"Doe",
  age:50, eyeColor:"blue"
}

// Create a copy
const x = person;

// Change Age in both
x.age = 10;
```
