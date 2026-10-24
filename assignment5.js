// ==========================================
// Assignment 5: Function Architecture and Scope
// ==========================================

// Define a standard function with default parameters (length and width)[cite: 2, 3]
function calculateStandardArea(length = 5, width = 4) {
    return length * width;
}

// Define an arrow function with parameters (length and width)[cite: 2, 3]
const calculateArrowArea = (length = 10, width = 3) => length * width;

console.log(`Standard Function Area (Default 5x4): ${calculateStandardArea()}`);
console.log(`Arrow Function Area (Custom 10x3): ${calculateArrowArea(10, 3)}`);

// Demonstrate block scope limits and handling the expected reference error[cite: 2, 3]
try {
    {
        let blockVar = "I am inside a block";
    }
    // Trying to access blockVar outside its block scope
    console.log(blockVar); 
} catch (error) {
    console.log(`Scope Test Error: ${error.name}: ${error.message} (when accessed outside block)`);
}