import React, { useState } from 'react';
import './signup.css'; // Import CSS for styling
import { Button, Link, Box, Typography } from '@mui/material';
import DcsCustomLink from '../../link/DcsCustomLink';

const Signup = ( { onClose } ) =>
{
  const [ name, setName ] = useState( '' );
  const [ email, setEmail ] = useState( '' );
  const [ phone, setPhone ] = useState( '' );
  const [ password, setPassword ] = useState( '' );

  const handleSubmit = ( event ) =>
  {
    event.preventDefault();
    console.log( 'Email:', email );
    console.log( 'Password:', password );
  };
  return (
    <div className="auth-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={ handleSubmit }>
          <div className="input-group">
            <input
              type="text"
              id="name"
              placeholder='Name'
              value={ name }
              onChange={ ( e ) => setName( e.target.value ) }
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              id="email"
              placeholder='Email'
              value={ email }
              onChange={ ( e ) => setEmail( e.target.value ) }
              required
            />
          </div>
          <div className="input-group">
            <input
              type="number"
              id="phone"
              placeholder='Phone No.'
              value={ phone }
              onChange={ ( e ) => setPhone( e.target.value ) }
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              placeholder='Password'
              autoComplete="off"
              value={ password }
              onChange={ ( e ) => setPassword( e.target.value ) }
              required
            />
          </div>
          <Button type="submit" variant="contained" fullWidth >Sign Up</Button>
          <Box sx={ { paddingTop: 1 } } className="app__link">Already registered?&nbsp;&nbsp;
            {/* <Link
                sx={ { alignSelf: 'baseline', '&:hover': { backgroundColor: 'lightgray', } } }
                href="/login"
                onClick={ handleLoginClick }
                variant="body3"
                underline="none">Sign In</Link> */}
            <DcsCustomLink
              linkText={ "Sign In" }
              targetPath={ "/" }
              color={ '#1976d2' }
              key={ "login" }
              variant={ "body3" }
            />
            {/* <a href="/login" onClick={ handleLoginClick }>Sign In</a> */ }
          </Box>

          <Typography variant="caption" gutterBottom >
            By Signing Up, you agree to our
            <Link href="/terms-conditions" className="app__link">Terms & Condition | </Link>
            <Link href="/privacy-policy" className="app__link"> Privacy Policy</Link>
          </Typography>
        </form>
      </div>
    </div>
  );
};

export default Signup;