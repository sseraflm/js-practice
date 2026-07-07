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
