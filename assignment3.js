<<<<<<< HEAD
// ==========================================
// Assignment 3: Conditional Logic Implementation
// ==========================================

let score = 85;
let grade;

// Determine letter grade using a switch statement[cite: 2]
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

// Use a ternary operator to print whether they passed or failed[cite: 2]
let status = (score >= 50) ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
=======
// ==========================================
// Assignment 3: Conditional Logic Implementation
// ==========================================

let score = 85;
let grade;

// Determine letter grade using a switch statement[cite: 2]
switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    default:
        grade = 'F';
}

// Use a ternary operator to print whether they passed or failed[cite: 2]
let status = (score >= 50) ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
>>>>>>> 3436cac48643b22153a43403123fd11798187582
console.log(`Status: ${status}`);