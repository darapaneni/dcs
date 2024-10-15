/**
 * @fileoverview Signup component that allows users to register by providing their name, email, phone, and password. 
 * It also provides a link to switch to the login form if the user is already registered. 
 * The component includes form validation and displays appropriate input fields.
 * 
 * @component
 */
import React, { useState } from 'react';
import './signup.css'; // Import CSS for styling
import Login from '../login/login';

/**
 * Signup component that renders a sign-up form for new users. The form collects 
 * the user's name, email, phone number, and password. The component also provides 
 * a link to navigate to the login form if the user already has an account.
 * 
 * @component
 * 
 * @param {Object} props - The component's props.
 * @param {Function} props.onClose - A function to close the sign-up form.
 * 
 * @returns {JSX.Element} A React component that displays the sign-up form.
 * 
 * @example
 * // Example of using the Signup component
 * return (
 *   <Signup onClose={handleClose} />
 * );
 */

const Signup = ({onClose}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  /**
   * handleLoginClick is triggered when the user clicks the "Sign In" link. 
   * It switches the view to the login form.
   * 
   * @param {Object} event - The event object.
   */

  const handleLoginClick = (event) => {
    event.preventDefault();
    setShowLogin(true);
  }
  /**
   * handleSubmit processes the form submission. It logs the user's input 
   * (name, email, phone, and password) to the console for demonstration purposes. 
   * 
   * @param {Object} event - The event object.
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  
  /**
   * closeLoginModal is a helper function to close the login form modal.
   */
  const closeLoginModal = () => {
    setShowLogin(false);
  }

  return (
    <div className="auth-container">
        {!showLogin ? (
            <div className="login-box">
            <span className="close-button" onClick={onClose}>&times;</span> {/* Close button */}
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  placeholder='Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
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
                  type="number"
                  id="phone"
                  placeholder='Phone No.'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
              <button type="submit">Sign Up</button>
              <p className="app__link">By Signing Up, you agree to our <a href="/terms-conditions" className="app__link">Terms & Condition</a>&nbsp;<a href="/privacy-policy" className="app__link">Privacy Policy</a></p>
              <p>Already registered?&nbsp;&nbsp;<a href="/login" onClick={handleLoginClick}>Sign In</a></p>
            </form>
          </div>
        ) : ( <Login onClose={() => setShowLogin(false)} />)}
    </div>
    
  );
};

export default Signup;