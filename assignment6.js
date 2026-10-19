// ==========================================
// Assignment 6: Arrays, Objects, and Core Methods
// ==========================================

// Create an array of product objects with name and price properties[cite: 3]
const products = [
    { name: 'Laptop', price: 800 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 45 }
];

// Use forEach() to print each product[cite: 3]
console.log("All Products (forEach)");
products.forEach(item => {
    console.log(`Item: ${item.name}`);
    console.log(`Price: $${item.price}`);
});

// Use filter() to find items under a certain price (< $50)[cite: 3]
console.log("Filtered Products (Price < $50)");
const filteredProducts = products.filter(item => item.price < 50);
console.log(filteredProducts);

// Use map() to create an array of formatted name-price strings[cite: 3, 4]
console.log("Mapped Product Tags (map)");
const mappedProducts = products.map(item => `${item.name.toUpperCase()} costs $${item.price}`);
console.log(mappedProducts);