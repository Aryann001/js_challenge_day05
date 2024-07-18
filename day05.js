// Task 1
function evenOrOdd(x) {
  x % 2 === 0 ? console.log("even") : console.log("odd");
}

evenOrOdd(1);

// Task 2
function square(x) {
  return x * x;
}

let result = square(4);
console.log(result);

// Task 3
function maximum(x, y) {
  if (x > y) {
    console.log(x, "is greater");
  } else if (x < y) {
    console.log(y, "is greater");
  } else {
    console.log("both are equal ", x);
  }
}

maximum(5, 2);

// Task 4
function concatenateStr(x, y) {
  return `${x} ${y}`;
}

result = concatenateStr("Chutiya", "Palak");
console.log(result);

// Task 5
const sumTwoNumbers = (x, y) => {
  return x + y;
};
result = sumTwoNumbers(100, 2);
console.log(result);

// Task 6
const specifyCharInStr = (x, y) => {
  return x.includes(y);
};

result = specifyCharInStr("Aryan", "r");
console.log(result);

// Task 7
function product(x, y = 2) {
  return x * y;
}
result = product(2, 10);
console.log(result);

// Task 8
function greetingMsg(name, age = 1) {
  return `Hello ${name}, age: ${age}`;
}
result = greetingMsg("Aryan", 19);
console.log(result);

// Task 9
function greeting(name) {
  console.log(`Have a good day ${name}`);
}

function callAgain(func, times = 1) {
  for (let i = 1; i <= times; i++) {
    func();
  }
}

callAgain(() => greeting("Aryan"), 2);

// Task 10
function higherOrder (squareFunc, greetingFunc, val) {
    const result = squareFunc(val)
    greetingFunc(result)
}

higherOrder(square, greeting, 2)