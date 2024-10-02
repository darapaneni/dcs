import React, { useState } from 'react';
import './userprofile.css';

const userprofile = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    dob: '',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

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