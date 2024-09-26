// Exercise 2: Rest Operator
// Instructions: Write a function named `subtract` that takes any number of arguments and returns their difference. 
// Use the rest operator to handle the variable number of arguments. 
// Test your function with different numbers of arguments.

function subtract(...numbers) {
  // Your code here
  let previous = 0;
  return numbers.map(val => {
    let tmp = previous - val;
    previous = val;
    return tmp;
  })
}

console.log(subtract(10, 2, 3)); // Example usage
