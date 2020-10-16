// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

nestedFunction can  access the variable internal because it is all within the function myFunction.  This is basically function level scope where functions can reach out and grab variables outside of their scope. It's a one-way street since you can reach outside of a function from within, but not the other way around. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(param) {
  let summation = 0;

  for (let i = 0; i <= param; i++) {
    summation += i;
  }
  return summation;
}

console.log(summation(4));