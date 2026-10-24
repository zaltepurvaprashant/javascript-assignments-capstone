// ==========================================
// Assignment 4: Loop Control Structures
// ==========================================

// 1. For loop to print a multiplication table up to 5[cite: 2]
console.log("Multiplication Table of 5");
for (let i = 1; i <= 5; i++) {
    console.log(`5 × ${i} = ${5 * i}`);
}

// 2. While loop with a break statement to find the first number > 10 divisible by 6[cite: 2]
console.log("First number > 10 divisible by 6");
let currentNum = 11;
while (true) {
    if (currentNum % 6 === 0) {
        console.log(`Found: ${currentNum}`);
        break;
    }
    currentNum++;
}

// 3. Do...while loop that skips numbers using continue[cite: 2]
console.log("Do...while loop skipping even numbers (1 to 5):");
let i = 0;
do {
    i++;
    if (i % 2 === 0) {
        continue; // Skips printing even numbers
    }
    console.log(`Number: ${i}`);
} while (i < 5);