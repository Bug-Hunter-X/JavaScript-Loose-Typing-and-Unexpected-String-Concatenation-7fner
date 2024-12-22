# JavaScript Loose Typing and Unexpected String Concatenation

This repository demonstrates a common error in JavaScript stemming from its loose typing system. Specifically, it showcases the unexpected behavior of the `+` operator when used with a mix of numbers and strings.

## The Bug

The `bug.js` file contains two functions: `foo` and `bar`.  Both functions aim to add two values. However, `foo` adds a number and a string, resulting in string concatenation instead of numerical addition. `bar`, on the other hand, correctly adds two numbers.

## The Solution

The `bugSolution.js` file provides a solution by explicitly converting the operands to numbers using `parseInt()` or `Number()` before performing the addition.  This ensures consistent numerical addition, regardless of the input types.

This example highlights the importance of careful type handling in JavaScript to avoid unexpected behavior and ensure the correctness of your code.