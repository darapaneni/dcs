/**
 * @fileoverview UserProfile component that allows users to view and edit their profile information.
 * It includes fields for full name, username, email, phone number, and date of birth. 
 * The component supports editing mode and form submission.
 * 
 * @component
 */

import React, { useState } from 'react';
import './userprofile.css';
/**
 * UserProfile component renders a user profile view with fields for full name, 
 * username, email, phone number, and date of birth. Users can edit their 
 * profile information in a form and submit the changes.
 * 
 * @component
 * 
 * @returns {JSX.Element} A React component that displays the user's profile and an edit form.
 * 
 * @example
 * // Example of using the UserProfile component
 * return (
 *   <UserProfile />
 * );
 */

const userprofile = () => {         // State to manage user profile information
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    dob: '',
  });
  
  const [editing, setEditing] = useState(false); // State to manage editing mode

  /**
  * handleChange updates the userInfo state when the user edits input fields.
  * 
  * @param {Object} e - The event object.
  * @param {string} e.target.name - The name of the input field being changed.
  * @param {string} e.target.value - The new value for the input field.
  */
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  /**
   * handleSubmit processes the form submission, logging the user information
   * to the console and switching the component out of editing mode.
   * 
   * @param {Object} e - The event object.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Info Submitted:', userInfo);
    setEditing(false);
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={userInfo.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userInfo.username}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={userInfo.phone}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Date of Birth:
            <input
              type="date"
              name="dob"
              value={userInfo.dob}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div>
          <p>Full Name: {userInfo.fullName || 'Not provided'}</p>
          <p>Username: {userInfo.username || 'Not provided'}</p>
          <p>Email Address: {userInfo.email || 'Not provided'}</p>
          <p>Phone Number: {userInfo.phone || 'Not provided'}</p>
          <p>Date of Birth: {userInfo.dob || 'Not provided'}</p>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default userprofile;