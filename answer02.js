// Simulating valid user credentials for authentication
const validCredentials = {
    username: "user123",
    password: "password123",
};

// Login function with error handling
function login(username, password) {
    // Check if the username is provided
    if (!username) {
        throw new Error("Username is required.");
    }

    // Check if the password is provided
    if (!password) {
        throw new Error("Password is required.");
    }

    // Check if the username and password match the valid credentials
    if (username !== validCredentials.username || password !== validCredentials.password) {
        throw new Error("Invalid username or password.");
    }

    // Simulate successful login
    console.log("Login successful!");
}

// Testing the function with error handling
try {
    login("user123", "password123"); // Valid credentials, should pass
    login("", "password456"); // Should throw an error: "Username is required."
    login("user456", ""); // Should throw an error: "Password is required."
    login("invalidUser", "invalidPassword"); // Should throw an error: "Invalid username or password."
} catch (error) {
    console.error(error.message); // Catch and log the error messages
}


// Output
// Login successful!
// Username is required.
// Password is required.
// Invalid username or password.
