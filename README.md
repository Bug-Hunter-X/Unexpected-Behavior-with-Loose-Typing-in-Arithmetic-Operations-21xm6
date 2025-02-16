# Unexpected Behavior with Loose Typing in Arithmetic Operations

This repository demonstrates a common JavaScript bug related to loose typing and its impact on arithmetic operations.  JavaScript's dynamic typing allows for flexibility but can lead to unexpected results if not handled carefully.  This example highlights the issues that can arise when combining numbers and strings in arithmetic expressions.

## Bug Description

In JavaScript, when a number is added to a string, the '+' operator performs string concatenation instead of numerical addition. This can cause unexpected behavior, particularly in calculations. This example shows this issue and how to fix it.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js`.
3. Run `bug.js` using Node.js or a similar JavaScript runtime.
4. Observe the unexpected output.

## Solution

The solution is to ensure that all operands in arithmetic operations are of the same data type (numbers in this case). The `bugSolution.js` file shows this solution implemented.  Type coercion should be explicitly performed when necessary.

## Learning Points

- Always be mindful of JavaScript's type coercion behavior.
- Use strict type checking or explicit type conversion to prevent unexpected results.