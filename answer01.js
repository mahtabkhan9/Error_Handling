let cart = []; // Array to hold the items in the cart

// Task 1: Add Product to Cart Function
function addToCart(name, price, quantity) {
  // if the product name is provided
  if (!name) {
    throw new Error("Product name is required.");
  }

  // if the product price is a positive number
  if (typeof price !== 'number' || price <= 0) {
    throw new Error("Invalid product price.");
  }

  // if the quantity is a positive integer
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Invalid quantity.");
  }

  // Add the product to the cart
  cart.push({ name, price, quantity });
  console.log(`${name} added to cart.`);
}

// Task 2: Checkout Function
function checkout() {
  // Check if the cart is empty
  if (cart.length === 0) {
    throw new Error("Cart is empty. Add items before checkout.");
  }

  // Simulate the checkout process
  console.log("Checkout successful!");
}

// Testing the functions with error handling
try {
  addToCart("Laptop", 1200, 2); 
  // Valid product
  addToCart("", 30, 1); 
  // Should throw an error: "Product name is required."
  addToCart("Mouse", 15, 3); 
  // Valid product
  addToCart("Keyboard", 50, "abc"); 
  // Should throw an error: "Invalid quantity."
  checkout(); 
  // Should throw an error: "Cart is empty. Add items before checkout."
} catch (error) {
  console.error(error.message); 
  // Catch and log the error messages
}


// Output
// Laptop added to cart.
// Product name is required.
// Mouse added to cart.
// Invalid quantity.
// Cart is empty. Add items before checkout.
