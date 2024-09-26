import React, { useState } from 'react';
import '../../../css/signup.css'; // Import CSS for styling
import Login from '../login/login';

const Signup = ({onClose}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = (event) => {
    event.preventDefault();
    setShowLogin(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

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