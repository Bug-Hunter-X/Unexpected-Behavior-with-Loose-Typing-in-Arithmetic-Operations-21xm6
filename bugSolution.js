function add(a, b) {
  // Explicit type conversion to numbers
  a = Number(a);
  b = Number(b);
  return a + b;
}

function subtract(a, b) {
  a = Number(a);
  b = Number(b);
  return a - b;
}

console.log(add(5, 3)); // Output: 8
console.log(add('5', 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6