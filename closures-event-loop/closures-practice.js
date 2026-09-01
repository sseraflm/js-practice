function createCounter() {
  let count = 0;

  function increment() {
    return count++;
  }

  function decrement() {
    return count--;
  }

  function getValue() {
    return count;
  }

  return {
    increment: increment,
    decrement: decrement,
    getValue: getValue,
  };
}

const counter1 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.getValue());

function memoize(fn) {
  let cache = {};

  return function (arg) {
    if (arg in cache) {
      return cache[arg];
    }
    cache[arg] = fn(arg);
    return cache[arg];
  };
}

// var task

// No Error
x = 5;
console.log(x);
var x;

// Error

y = 5;
console.log(y);
let y;
