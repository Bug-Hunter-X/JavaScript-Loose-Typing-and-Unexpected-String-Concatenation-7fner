function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '2')); // Output: 3

function bar(a, b) {
  return a + b; //No change needed here
}

console.log(bar(1, 2)); // Output: 3