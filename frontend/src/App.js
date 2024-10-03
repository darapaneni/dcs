import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './components/modal/login/login.jsx';
import { Route, Routes } from 'react-router-dom';
import DcsPageLoader from './components/loader/DcsPageLoader.js';
import { HomeLayout } from './components/layouts/HomeLayout.jsx';
import { ProtectedLayout } from './components/layouts/ProtectedLayout.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import SupportPage from './pages/additional-pages/SupportPage.js';
import Signup from './components/modal/signup/signup.jsx';

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
      </Route>
      <Route path="/user" element={ <ProtectedLayout /> }>
        <Route path="dashboard" element={ <Dashboard /> } />
        <Route path="support" element={ <SupportPage /> } />
      </Route>
    </Routes>

  );
};
export default App;