import React, { useState } from 'react';
import './login.css'; // Import CSS for styling
import Signup from '../signup/signup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Dashboard from '../../../pages/Dashboard/dashboard';

const Login = ({onClose}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = (event) => {
    event.preventDefault();
    setShowSignup(true);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
 
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (email === 'adsingh@example.com' && password === 'adsingh123') {
      // Set admin role in localStorage --> 
      /* for existing funtionality to work i have hardcoded the role, 
      line 60 will work in integration phase so we can delete this section from here that time
      */
      localStorage.setItem('role', 'admin');
      localStorage.setItem('isAuthenticated', 'true');
      alert('Admin login successful!');
      navigate('/dashboard'); // Navigate to the dashboard
      return;
    }
    else if (email === 'user@example.com' && password === 'user123') {
      // Set user role in localStorage -> This should be removed at integration phase
      localStorage.setItem('role', 'user');
      localStorage.setItem('isAuthenticated', 'true');
      alert('User login successful!');
      navigate('/dashboard');
    }
     /*else {
      alert('Invalid email or password.');
    } */
    

    setError('');
    try {
      const response = await axios.post('http://localhost:3301/', { email, password });

      // Assuming the response contains a success message or token
      if (response.data.success) {

        const token = response.data.token;
        const role = response.data.role; 
        
        // Store token and role in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);

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