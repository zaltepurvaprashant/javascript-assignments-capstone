<<<<<<< HEAD
// ==========================================
// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
// ==========================================

console.log("--- Initializing Inventory System");

// 1. Data & Input Initialization: Pre-existing items + simulated prompt input
let inventory = [
    { name: 'Laptop', price: 800 },
    { name: 'Mouse', price: 25 }
];

let inputName = "Monitor";
let inputPriceStr = "150";
let newProduct = {
    name: inputName.trim(),
    price: Number(inputPriceStr)
};

inventory.push(newProduct);
console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);

// 2 & 4. Control Flow, Conditional Evaluation, and Arrow Functions for Categorization
const getCategory = (price) => {
    let category;
    switch (true) {
        case (price > 500):
            category = "Premium";
            break;
        case (price >= 50 && price <= 500):
            category = "Standard";
            break;
        default:
            category = "Budget";
            break;
    }
    return category;
};

// 3 & 5. Array Methods & Iteration (forEach)
console.log("Processing Inventory Roster (forEach)");
inventory.forEach(item => {
    let category = getCategory(item.price);
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

// Financial Analytics Calculations
console.log("Financial Analytics");
let totalValue = inventory.reduce((sum, item) => sum + item.price, 0);
console.log(`Total Inventory Value: $${totalValue}`);

// Filtered Affordable Items (Under $200) using filter()
let affordableItems = inventory.filter(item => item.price < 200);
let affordableNames = affordableItems.map(item => item.name);
console.log("Filtered Affordable Items (Under $200):");
console.log(affordableNames);

// Formatted Report List using map()
let formattedReport = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log("Formatted Report List:");
=======
// ==========================================
// Capstone Mini Project: Interactive Product Inventory & Analytics Dashboard
// ==========================================

console.log("--- Initializing Inventory System");

// 1. Data & Input Initialization: Pre-existing items + simulated prompt input
let inventory = [
    { name: 'Laptop', price: 800 },
    { name: 'Mouse', price: 25 }
];

let inputName = "Monitor";
let inputPriceStr = "150";
let newProduct = {
    name: inputName.trim(),
    price: Number(inputPriceStr)
};

inventory.push(newProduct);
console.log(`[Prompt executed: User adds "${newProduct.name}" at "$${newProduct.price}"]`);

// 2 & 4. Control Flow, Conditional Evaluation, and Arrow Functions for Categorization
const getCategory = (price) => {
    let category;
    switch (true) {
        case (price > 500):
            category = "Premium";
            break;
        case (price >= 50 && price <= 500):
            category = "Standard";
            break;
        default:
            category = "Budget";
            break;
    }
    return category;
};

// 3 & 5. Array Methods & Iteration (forEach)
console.log("Processing Inventory Roster (forEach)");
inventory.forEach(item => {
    let category = getCategory(item.price);
    console.log(`* Item: ${item.name} ($${item.price}) -> Category: ${category}`);
});

// Financial Analytics Calculations
console.log("Financial Analytics");
let totalValue = inventory.reduce((sum, item) => sum + item.price, 0);
console.log(`Total Inventory Value: $${totalValue}`);

// Filtered Affordable Items (Under $200) using filter()
let affordableItems = inventory.filter(item => item.price < 200);
let affordableNames = affordableItems.map(item => item.name);
console.log("Filtered Affordable Items (Under $200):");
console.log(affordableNames);

// Formatted Report List using map()
let formattedReport = inventory.map(item => `${item.name.toUpperCase()}: $${item.price}`);
console.log("Formatted Report List:");
>>>>>>> 3436cac48643b22153a43403123fd11798187582
console.log(formattedReport);