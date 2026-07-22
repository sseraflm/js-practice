# JS Practice

## Currently done:

### Javascript Alerts.

it goes like this:

```javascript
alert("any text you want!");
```

or like this:

```javascript
const jsAlert = "An javascript alert has appeared!";
alert(jsAlert);

// or you can use

let jsAlert;
jsAlert = "An javascript alert has appeared!";

alert(jsAlert);
```

### Variables and Constants.

You can declare a variable with:

```javascript
let thisIsAVariable = "Ado";

// After a variable is set it can be simply changed.

thisIsAVariable = "Abo";
```

You can declare a const like this.

```javascript
const thisIsAConst = "Ado";

// Watch out once a const is set it cannot be changed.

thisIsAConst = "Abo"; // Will result in an error
```

### Data Types.

JavaScript has many different data types. You can simply check the type of a variable using `typeof` operator.

```javascript
let text = "Ado"; // This is a string
let number = 2; // This is a number
let isTrue = true; // This is a boolean

console.log(typeof text); // this outputs: string
```

### Interactions.

Javascript has three main interactions which are `alert`, `prompt` and `confirm`.

This is alert.

```javascript
alert("Ado"); // This will show an alert on the website.
```

This is prompt.

```javascript
let result = prompt("What is your favorite ado.", ""); //This is like an alert but with a place where you can write your answer, then save it into the result variable.
```

This is confirm.

```javascript
let isAdo = confirm("Are you Ado?"); // This will show an window with the question and two buttons "OK" and "Cancel", "OK" will output true and "Cancel" Will output false.

alert(isAdo); // This will display the saved result (true or false).
```

### Type Conversions

With type conversions you can convert Data types to each other.

This is how you do it.

```javascript
let adoNumber = 2;
console.log(typeof adoNumber); // Right now it will show a number.

adoNumber = String(adoNumber);

console.log(typeof adoNumber); // Now it will show a String.
```

### Basic operators.

`+` is addition.
`-` is subtraction.
`*` is multiplication.
`/` is division.
`%` is Remainder.
`**` is exponentiation.

### Incrementation.

`++` Increases the value by 1.
`--` Decreases the value by 1.
`+=` Adds a value to the variable. Example: `x += 2` is `x = x + 2`
`-=` Subtracts a value from the variable. Example: `x -= 2` is `x = x - 2`

### Comparison.

`==` checks for equality ( it performs type conversion. )
`===` checks for strict equality. (it doesnt perfom type conversion. it compares value and type.)

`>`, `<`, `>=`, `<=` these are used for relational comparisions.

### Conditional statements.

`if` If the statement is true executes code inside the block.

it works like this.

```javascript
let adoFan = confirm("Are you ado's fan?");

if (adoFan) {
    alert("You are an ado fan!");
}
```

`else` provides an alternative block of code that will run if the `if` condition is false.

this is how it would look added to an if.

```javascript
let adoFan = confirm("Are you Ado's fan?");

if (adoFan) {
    alert("You are Ado's fan!");
} else {
    alert("Go listen to some Ado then.");
}
```

### Logical operators.

There are four logical operators in JS.

`||` which is OR. It is used to check multiple conditions. It will return `true` if at least one condition is `true`.

`&&` which is AND. It checks multiple conditions and returns `true` only when all the conditions are `true`.

`!` which is NOT. It is used to reverse a boolean value, meaning if something is `true`, it will become `false`.

`??` which is the nullish coalescing operator. It will return the value on the right side only if the value on the left side is either `null` or `undefined`

Unlike `||`, the `??` operator does not treat `0`, `false` or an empty string as a missing value.

### Loops.

We can use loops when we want to repeat code multiple times.

`while` repeats code as long as the condition is `true`

Here is an example.

```javascript
let ado = 0;

while (ado < 5) {
    console.log(ado);
    ado++;
}
```

`do...while` works like `while`, except it runs the code at least once before checking the condition.

```javascript
let ado = 0;

do {
    console.log(ado);
    ado++;
} while (ado < 5);
```

`for` is used when we know how many times we want to repeat something.

It has three parts: `begin;` `condition;` and `step`.

It works like this.

```javascript
for (let ado = 0; ado < 22; ado++) {
    console.log(ado);
}
```

### Switch statement.

a `switch` statement can replace many `if` checks.

It is very useful when we want to compare one value against many cases.

It uses `case` and `break`.

`default` is executed if none of the cases match.

### Functions

Functions are used to group code that can be reused multiple times.

A function can have parameters, which can then be used inside its code.

Arguments are the actual values passed when the function is called.

An example:

```javascript
function welcomeUser(adoName) {
    let message = "Hello, " + adoName;
    alert(message);
}

welcomeUser("Akhuri-Chan");
```

A parameter can have a default value that will be used if no argument is passed.

### Return

`return` is used to send a value back from a function.

`return` does not display anything. It simply gives back the result, which can be saved into a variable or used somewhere else.

Example:

```javascript
function adoSum(a, b) {
    return a + b;
}

let result = adoSum(2, 2);
console.log(result);
```

### Function Expressions

A Function Expression is a function stored inside a variable.

it can be called using the name of the variable.

```javascript
const checkTemperature = function (temperature) {
    if (temperature <= 0) {
        return "Freezing";
    } else {
        return "Above freezing";
    }
};

let result = checkTemperature(5);
```

### Arrow Functions

Arrow Functions are a shorter way to write functions stored inside variables.

they use `=>` symbols instead of `function` keyword.

example:

```javascript
const add = (a, b) => {
    return a + b;
};
```

If an Arrow Function only returns one expression, the brackets and `return` can be removed.

```javascript
const add = (a, b) => a + b;
```

### Objects

Objects are used to store collections of various data and more complex entities.

We can create an object in two common ways.

```javascript
let user = new Object(); // This is called an "object constructor" syntax
```

or:

```javascript
let user = {}; // This is called an "object literal" syntax
```

Example of an object:

```javascript
let ado = {
    name: "Naima",
    age: 22,
};
```

You can delete a property of an object using the `delete` operator:

```javascript
delete ado.age;
```

To loop over all the keys in an object, we can use the `for...in` loop.

It works like this:

```javascript
for (const key in object) {
    // It will execute body for each key in the object.
}
```

### Arrays

An array is used to store multiple values in one variable.
Every element has an index. which goes up from `0`.
The `.length` property returns the number of elements in an array.

The `push()` method adds an element to the end of an array.
The `pop()` method removes an element from the end of an array.

The `for..of` loop can be used to go through all values in an array.

### Arrays methods

`map()` creates a new array, changing every element.
`filter()` creates a new array with only the matching elements.
`find` returns the first matching element.
`some()` checks if at least one element fulfills the condition.
`every()` checks if all the elements fulfill the condition.
