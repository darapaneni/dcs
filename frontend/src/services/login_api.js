/**
 * A simple Express server that provides a login endpoint.
 * This server listens on a specified port and allows users to log in 
 * using their email and password. The login functionality is currently 
 * backed by dummy user data for demonstration purposes.
 * 
 * @module server
 * 
 * @requires express
 * @requires body-parser
 * 
 * @constant {number} PORT - The port number on which the server listens.
 * 
 * @constant {Array<Object>} users - An array of dummy user data objects, each containing:
 * - {string} email - The email address of the user.
 * - {string} password - The password of the user.
 * 
 * @function loginUser - Endpoint for user login.
 * 
 * @param {Object} req - The request object, containing:
 * - {Object} body - The request body containing user credentials.
 * - {string} body.email - The email address entered by the user.
 * - {string} body.password - The password entered by the user.
 * 
 * @param {Object} res - The response object used to send the response back to the client.
 * 
 * @returns {void} Returns a JSON response indicating the login status:
 * - On successful login: 
 *    - {number} status - HTTP status code 200.
 *    - {Object} json - JSON object with a success message and a dummy token.
 * - On failed login:
 *    - {number} status - HTTP status code 401.
 *    - {Object} json - JSON object with an error message.
 * 
 * @example
 * POST /api/login
 * {
 *   "email": "adsingh@gmail.com",
 *   "password": "adsingh123"
 * }
 * 
 * @example
 * Successful Response:
 * {
 *   "message": "Login successful",
 *   "token": "dummy-token"
 * }
 * 
 * @example
 * Failed Response:
 * {
 *   "message": "Invalid credentials"
 * }
 * 
 * @function startServer - Starts the Express server and listens on the specified PORT.
 * 
 * @returns {void} Logs a message indicating the server is running and listening.
 * 
 * @example
 * startServer();
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy user data
const users = [
  { email: 'adsingh@gmail.com', password: 'adsingh123' }
];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful', token: 'dummy-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});