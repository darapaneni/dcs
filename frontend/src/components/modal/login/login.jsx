/**
 * @fileoverview Login component for user authentication. The component allows users to 
 * sign in by providing their email and password. It also includes functionality to navigate
 * to the dashboard upon successful login or to the signup page if the user doesn't have an account.
 * 
 * The component uses `axios` for making HTTP requests, and `useNavigate` from `react-router-dom`
 * for navigation. It also conditionally renders the Signup component if the user clicks
 * the signup link.
 */
import React, { useState } from 'react';
import './login.css'; // Import CSS for styling
import Signup from '../signup/signup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Dashboard from '../../../pages/Dashboard/dashboard';

/**
 * Login component handles user sign-in functionality.
 * It provides form inputs for email and password and submits the credentials
 * to the server for authentication. Upon success, the user is navigated to the dashboard.
 * The component also allows navigating to the signup page.
 * 
 * @component
 * 
 * @param {Object} props - The props object.
 * @param {Function} props.onClose - Callback function for closing the login modal.
 * 
 * @returns {JSX.Element} The rendered Login component.
 * 
 * @example
 * return (
 *   <Login onClose={handleClose} />
 * )
 */

const Login = ({onClose}) => {
  /**
   * State to hold the user's email input.
   * @type {string}
   */
  const [email, setEmail] = useState('');
  /**
   * State to hold the user's password input.
   * @type {string}
   */
  const [password, setPassword] = useState('');
  /**
   * State to toggle between showing the login or signup form.
   * When `true`, the Signup component is rendered instead of the login form.
   * @type {boolean}
   */
  const [showSignup, setShowSignup] = useState(false);
  /**
   * State to store any error messages during login (e.g., invalid credentials).
   * @type {string}
   */
  const [error, setError] = useState('');
  /**
   * Hook from `react-router-dom` to programmatically navigate between routes.
   * The `navigate` function allows changing the current route programmatically.
   * @type {Function}
   */
  const navigate = useNavigate();

  /**
   * Handles the click event for the "Sign Up" link, switching the view to the Signup form.
   * 
   * @function handleSignUpClick
   * @param {React.MouseEvent} event - The click event object.
   * 
   * @returns {void}
   * 
   * @example
   * <a onClick={handleSignUpClick}>Sign Up</a>
   */

  const handleSignUpClick = (event) => {
    event.preventDefault();
    setShowSignup(true);    // Display the Signup component
  }
  /**
   * Handles the form submission for login. It checks if the email and password fields
   * are filled, validates the credentials, and makes an API request to authenticate the user.
   * If authentication is successful, the user is redirected to the dashboard.
   * 
   * @async
   * @function handleSubmit
   * @param {React.FormEvent} event - The form submission event.
   * 
   * @returns {Promise<void>} - A promise that resolves when the login attempt is processed.
   * 
   * @throws {Error} If the HTTP request fails or the credentials are invalid.
   * 
   * @example
   * <form onSubmit={handleSubmit}>...</form>
   */
  const handleSubmit = async(event) => {
    event.preventDefault();

 // Basic validation for empty fields
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    // Simulated hardcoded credentials check
    if (email === 'adsingh@example.com' && password === 'adsingh123') {
      alert('Login successful!');
      navigate('/dashboard'); // Navigate to the dashboard
      return;
    } /*else {
      alert('Invalid email or password.');
    } */
    
    setError('');   // Clear previous errors
    // Try to authenticate with the backend server using axios
    //try {
      /**
       * Make a POST request to the server for user authentication.
       * @type {Object}
       * @property {boolean} success - A flag indicating successful authentication.
       */

    try {
      const response = await axios.post('http://localhost:3301/', { email, password });

      // Assuming the response contains a success message or token
      if (response.data.success) {
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  }; 

  return (
    <div className="auth-container">
      {!showSignup ? (
        <div className="login-box">
        <span className="close-button" onClick={onClose}>&times;</span> {/* Close button */}
        <h2>Sign In</h2>
        {error && <p className="error__message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign In</button>
          <p className="app__link">Not registered with us yet?&nbsp;<a href="/signup" className="app__link" onClick={handleSignUpClick}>Sign Up</a>&nbsp;&nbsp;&nbsp;<a href="/forgot-password" className="app__link">Forgot Password?</a></p>
        </form>
      </div>
      ) : (<Signup />)}
    </div>   
  );
};

export default Login;