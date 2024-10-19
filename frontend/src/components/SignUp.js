/**
 * @file SignUp.js
 * @description This file contains the SignUp component, which provides a user interface for new users to create an account.
 *              It captures the user's username, email, password, and password confirmation.
 */

import React, { useState } from 'react';
import './SignUp.css'; // Assuming you'll create a CSS file for styling

/**
 * SignUp component that renders a registration form for new users.
 *
 * This component manages the state of the form inputs using the `useState` hook.
 * Upon form submission, it logs the entered user data to the console.
 * 
 * @component
 * @returns {React.ReactNode} The rendered SignUp component containing a form for user registration.
 *
 * @example
 * <SignUp />
 */
const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  /**
   * Handles changes to the form inputs.
   *
   * This function updates the state of the formData object based on the user's input.
   * 
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the input change event.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * Handles form submission.
   *
   * This function prevents the default form submission behavior and logs the formData to the console.
   * 
   * @param {React.FormEvent<HTMLFormElement>} e - The event object from the form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="signup-container">
        {/* <a href="#" class="signup-link">SignUp</a> */}
      <h2 className="signup-title">Create Your Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;