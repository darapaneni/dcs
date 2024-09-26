import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/home/home.jsx';
import Signup from './components/modal/signup/signup.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import Login from './components/modal/login/login.jsx';
import RichTextEditorTest from './pages/RichTextEditor/RichTextEditor_test';
import SessionWarningModal from './SessionWarningModal.jsx';
import Rental_agreement from './pages/Agreements/Rental_agreement.jsx';

const SESSION_DURATION = 5 * 60 * 1000; // 5 minutes
const WARNING_DURATION = 1 * 60 * 1000;  // 1 minute before session expires

const handleInputChange = (field, value) => {
  console.log(`${field}: ${value}`);
  // Handle state updates or other logic here
};

// Wrapper Component
const RentalAgreementWrapper = ({ onInputChange }) => {
  return <Rental_agreement onInputChange={onInputChange} />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [isSessionWarningVisible, setIsSessionWarningVisible] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(null);
  const [sessionWarningTimeout, setSessionWarningTimeout] = useState(null);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    alert('Session expired. Logging out...');
    setIsAuthenticated(false);
    clearTimeout(sessionTimeout);
    clearTimeout(sessionWarningTimeout);
    navigate('/signin');
  }, [sessionTimeout, sessionWarningTimeout, navigate]);

  const resetSession = useCallback(() => {
    clearTimeout(sessionTimeout);
    clearTimeout(sessionWarningTimeout);
    setIsSessionWarningVisible(false);

    const newWarningTimeout = setTimeout(() => {
      setIsSessionWarningVisible(true);
    }, SESSION_DURATION - WARNING_DURATION);

    const newSessionTimeout = setTimeout(() => {
      logout();
    }, SESSION_DURATION);

    setSessionWarningTimeout(newWarningTimeout);
    setSessionTimeout(newSessionTimeout);
  }, [logout, sessionTimeout, sessionWarningTimeout]);

  useEffect(() => {
    if (isAuthenticated) {
      resetSession();
    }

    return () => {
      clearTimeout(sessionTimeout);
      clearTimeout(sessionWarningTimeout);
    };
  }, [isAuthenticated, resetSession]); // Make sure resetSession is memoized correctly

  const handleUserActivity = () => {
    resetSession();
  };

  return (
    <div className="app" onClick={handleUserActivity} onKeyDown={handleUserActivity}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route path="/signin" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/RichTextEditor" element={isAuthenticated ? <RichTextEditorTest /> : <Login />} />
        <Route path="/Rental_agreement" element={<RentalAgreementWrapper onInputChange={handleInputChange} />} />
        <Route path="*" element={<Login />} />
      </Routes>
      {isSessionWarningVisible && (
        <SessionWarningModal onContinue={resetSession} onLogout={logout} />
      )}
    </div>
  );
}

export default App;
