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
| Property | Property Value |
| --- | --- |
| firstName | John |
| lastName | Doe |
| age | 50 |
| eyeColor | blue |
| fullName | function() {return this.firstName + " " + this.lastName;} |
