import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuthStore from '../../../store/authStore';
import { useNavigate } from 'react-router-dom';
import DcsMicroLoader from './../../loader/DcsMicroLoader';
import { TextField, Button, Link, Divider, Box, Typography } from '@mui/material';
import ForgotPassword from '../../forgot-password/ForgotPassword';
import DcsCustomLink from '../../link/DcsCustomLink';

// const Login = ({onClose}) => {
const schema = z.object( {
  email: z.string().min( 1, 'Email is required' ).email( 'Invalid email address' ),
  password: z.string().min( 6, { message: "Must be 6 or more characters long" } )
} );

const Login = (  ) =>
{
  const { login } = useAuthStore();
  const [ error, setError ] = useState( '' );


  const navigate = useNavigate();
  const [ open, setOpen ] = React.useState( false );

  const { register, getValues, handleSubmit, formState: { errors, isSubmitting } } = useForm( {
    resolver: zodResolver( schema )
  } );
  const onSubmit = async ( data ) =>
  {
    setError( '' );
    try
    {
      const formData = getValues();
      await login( formData.email, formData.password );
      navigate( "/user/welcome" );
    }
    catch ( error )
    {
      console.log(error)
      setError( 'Invalid credentials. Please try again.' );
    }
  };

  const handleClose = () =>
  {
    setOpen( false );
  };
  const handleClickOpen = () =>
  {
    setOpen( true );
  };
  return (
    <div className="auth-container">
      <div className="login-box">
        <h2>Sign In</h2>
        { error && <Typography color="error">{ error }</Typography> }
        <form onSubmit={ handleSubmit( onSubmit ) } noValidate >
          <TextField
            { ...register( "email" ) }
            error={ !!errors.email }
            helperText={ errors.email ? errors.email.message : '' }
            margin="normal"
            size='small'
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
          />
          { errors.name && <p>{ errors.name.message }</p> }
          <TextField
            { ...register( 'password' ) }
            error={ !!errors.password }
            helperText={ errors.password ? errors.password.message : '' }
            margin="normal"
            size='small'
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
          <Divider></Divider>
          <Button type="submit" variant="contained" fullWidth disabled={ isSubmitting }>
            { isSubmitting ? (
              <span>
                <DcsMicroLoader size={ 16 } showLabel={ false } color={ 'primary' } />
              </span>
            ) : (
              'Sign in'
            ) }
          </Button>
          <Box sx={ { paddingTop: 2 } } className="app__link">
            <Typography variant="caption" gutterBottom >
              Not registered with us yet?&nbsp;
              <DcsCustomLink
                linkText={ "Sign Up" }
                targetPath={ 'signup' }
                color={ "#1976d2" }
                variant={ "body3" }
                key={ "signup" }
              />
              |
              <Link
                sx={ {
                  marginLeft: 1,
                  alignSelf: 'baseline',
                  '&:hover': { backgroundColor: 'lightgray', }
                } }
                href="#"
                onClick={ handleClickOpen }
                variant="body3"
                underline="none">  Forgot password? </Link>
            </Typography>
          </Box>
          <ForgotPassword
            open={ open }
            handleClose={ handleClose } > Forgot Password? </ForgotPassword>
        </form>
      </div>
    </div>
  );
};

export default Login;