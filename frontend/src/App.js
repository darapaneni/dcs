/**
 * Main application component for handling routing and rendering of different pages
 * in the application. This component manages the loading state, simulating a loading
 * screen before rendering the main application routes.
 *
 * @module App
 * @requires React
 * @requires useEffect
 * @requires useState
 * @requires {Route} from 'react-router-dom'
 * @requires DcsPageLoader from './components/loader/DcsPageLoader.js'
 * @requires HomeLayout from './components/layouts/HomeLayout.jsx'
 * @requires ProtectedLayout from './components/layouts/ProtectedLayout.jsx'
 * @requires Login from './components/modal/login/login.jsx'
 * @requires Signup from './components/modal/signup/signup.jsx'
 * @requires SupportPage from './pages/additional-pages/SupportPage.js'
 * @requires MailSendConfirmation from "./components/confirmation/MailSendConfirmation"
 * @requires MailSendError from "./components/confirmation/MailSendError"
 * @requires VerifyEmail from "./components/confirmation/VerifyEmail"
 * @requires UserProfile from "./components/userProfile/userprofile"
 * @requires WelcomePage from "./components/Welcome/WelcomePage"
 * @requires PricingPage from "./components/pricing/PricingPage"
 * @requires ChangePassword from "./components/userProfile/ChangePassword"
 * @requires GitHubCallback from "./components/github/GitHubCallback"
 * @requires ResetPassword from "./components/reset-password/ResetPassword"
 *
 * @component
 * @example
 * return (
 *   <App />
 * );
 */

import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/modal/login/login.jsx';
import { Route, Routes } from 'react-router-dom';
import DcsPageLoader from './components/loader/DcsPageLoader.js';
import { HomeLayout } from './components/layouts/HomeLayout.jsx';
import { ProtectedLayout } from './components/layouts/ProtectedLayout.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import SupportPage from './pages/additional-pages/SupportPage.js';
import Signup from './components/modal/signup/signup.jsx';
import MailSendConfirmation from "./components/confirmation/MailSendConfirmation";
import MailSendError from "./components/confirmation/MailSendError";
import VerifyEmail from "./components/confirmation/VerifyEmail";
import UserProfile from "./components/userProfile/userprofile";
import WelcomePage from "./components/Welcome/WelcomePage";
import PricingPage from "./components/pricing/PricingPage";
import ChangePassword from "./components/userProfile/ChangePassword";
import GitHubCallback from "./components/github/GitHubCallback";
import ResetPassword from "./components/reset-password/ResetPassword";

function App () 
{
  const [ loading, setLoading ] = useState( true );
  useEffect( () =>
  {
    // Simulate loading time
    const timer = setTimeout( () =>
    {
      setLoading( false );
    }, 2000 ); // Adjust time as needed

    return () => clearTimeout( timer );
  }, [] );
  if ( loading )
  {
    return <DcsPageLoader />;
  }
  return (
    <Routes>
      <Route path="/" element={ <HomeLayout /> }>
        <Route index element={ <Login /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="support" element={ <SupportPage /> } />
        <Route path="mail-confirmation" element={<MailSendConfirmation />} />
        <Route path="mail-error" element={<MailSendError />} />
        <Route path='/otp/verify' element={<VerifyEmail/>}/>
        <Route path="/auth/callback" element={<GitHubCallback />} />
        <Route path="api/v1/auth/password-reset-confirm/:uid/:token" element={<ResetPassword />} />
      </Route>
      <Route path="/user" element={ <ProtectedLayout /> }>
        <Route path="welcome" element={ <WelcomePage /> } />
        <Route path="pricing" element={ <PricingPage /> } />
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="support" element={ <SupportPage /> } />
        <Route path="change-password" element={ <ChangePassword /> } />
        <Route path="profile" element={ <UserProfile /> } />
      </Route>
    </Routes>

  );
};
export default App;