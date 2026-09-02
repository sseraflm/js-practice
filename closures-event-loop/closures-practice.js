// function createCounter() {
//   let count = 0;

//   function increment() {
//     return count++;
//   }

//   function decrement() {
//     return count--;
//   }

//   function getValue() {
//     return count;
//   }

//   return {
//     increment: increment,
//     decrement: decrement,
//     getValue: getValue,
//   };
// }

// const counter1 = createCounter();
// console.log(counter1.increment());
// console.log(counter1.increment());
// console.log(counter1.getValue());

// function memoize(fn) {
//   let cache = {};

//   return function (arg) {
//     if (arg in cache) {
//       return cache[arg];
//     }
//     cache[arg] = fn(arg);
//     return cache[arg];
//   };
// }

// // var task

// // No Error
// x = 5;
// console.log(x);
// var x;

// // Error

// y = 5;
// console.log(y);
// let y;

// Countdown

const countDownContainer = document.getElementById("countDown");
const stopButton = document.getElementById("stop");
let count = 10;

function updateCountDown() {
  if (count <= 0) return;
  count--;
  countDownContainer.innerText = count;
  if (count === 0) {
    clearInterval(timerID);
    countDownContainer.classList.add("stopped");
    stopButton.disabled = true;
    stopButton.innerText = "Done.";
  }
}

function handleCountdownControl() {
  if (countDownContainer.classList.contains("stopped")) {
    countDownContainer.classList.remove("stopped");
    timerID = setInterval(updateCountDown, 1000);
    stopButton.innerText = "Stop";
    return;
  }
  countDownContainer.classList.add("stopped");
  clearInterval(timerID);
  stopButton.innerText = "Start";
}
let timerID = setInterval(updateCountDown, 1000);

stopButton.addEventListener("click", handleCountdownControl);
