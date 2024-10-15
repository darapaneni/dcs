/**
 * @fileoverview A simple Express server for handling user login functionality.
 * This server provides an API endpoint for logging in users with predefined credentials.
 * 
 * The server listens on a specified port and uses middleware to parse JSON request bodies.
 * Dummy user data is used for demonstration purposes.
 * 
 * @module login_api
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();   // Create an instance of Express
const PORT = 3001;  // Define the port for the server

// Middleware to parse JSON bodies
app.use(bodyParser.json());   // Middleware to parse JSON bodies from incoming requests

// Dummy user data
const users = [
  { email: 'adsingh@gmail.com', password: 'adsingh123' } 
];
/**
 * Login endpoint for user authentication.
 * 
 * This endpoint receives a POST request containing user credentials (email and password).
 * It checks the credentials against the dummy user data.
 * If the credentials match, a success response is returned with a message and a token.
 * If the credentials do not match, an error response is returned.
 * 
 * @function
 * @name login
 * @memberof module:login_api
 * @param {Object} req - The request object containing user credentials in the body.
 * @param {Object} res - The response object used to send the response back to the client.
 * @returns {void} Responds with JSON containing a success message and token or an error message.
 * 
 * @example
 * // Example request body:
 * {
 *   "email": "adsingh@gmail.com",
 *   "password": "adsingh123"
 * }
 */

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;    // Extract email and password from request body
  const user = users.find(u => u.email === email && u.password === password);   // Check for a matching user

  if (user) {
    res.status(200).json({ message: 'Login successful', token: 'dummy-token' });   // If user is found, respond with a success message and token
  } else {
    res.status(401).json({ message: 'Invalid credentials' });    // If user is not found, respond with an error message
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});