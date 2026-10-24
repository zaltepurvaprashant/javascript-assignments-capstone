// ==========================================
// Assignment 2: Operators, Expressions, and Input Handling
// ==========================================

// Task: Use prompt() or input simulation to capture bill amount and tip percentage[cite: 1]
// In Node.js, we simulate inputs; in a browser, you can use window.prompt()
let subtotalInput = "100"; 
let tipPercentInput = "15";

// Perform explicit type conversion using Number()[cite: 1]
let subtotal = Number(subtotalInput);
let tipPercentage = Number(tipPercentInput);

// Compute the total using arithmetic and assignment operators[cite: 1]
let calculatedTip = (subtotal * tipPercentage) / 100;
let totalAmount = subtotal + calculatedTip;

// Log the formatted string[cite: 1]
console.log(`Subtotal: $${subtotal}`);
console.log(`Tip Percentage: ${tipPercentage}%`);
console.log(`Calculated Tip: $${calculatedTip}`);
console.log(`Total Amount to Pay: $${totalAmount}`);