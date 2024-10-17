/**
 * @file Login.js
 * @description This file contains the Login component, which provides a user interface for users to log in.
 * It captures the username and password inputs and performs basic validation before submission.
 * The component utilizes React hooks for state management and CSS for styling.
 */

// Login.js
import React, { useState } from 'react';
import './Login.css'; // Ensure this matches the styling of SignUp.css

/**
 * Login component for user authentication.
 *
 * @component
 * @returns {JSX.Element} A styled login form that captures the username and password,
 * displays an error message if validation fails, and handles form submission.
 *
 * @example
 * <Login />
 */
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /**
   * Handles the form submission event.
   * Validates the input fields and logs the username and password.
   * Displays an error message if validation fails.
   *
   * @param {React.FormEvent} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    setError('');
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect or show a success message
    // Example: history.push('/dashboard');
  };

  return (
    <div className="login-container">
      {/* <a href="#" class="login-link">Login</a> */}
      <h2 className="login-title">Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;