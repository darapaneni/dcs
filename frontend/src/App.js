import './App.css';
import React from 'react';
import Home from './components/home/home.jsx';
import Signup from './components/modal/signup/signup.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary React Router components
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/modal/login/login.jsx';
import RichTextEditorTest from './pages/RichTextEditor/RichTextEditor_test';
import SessionWarningModal from './SessionWarningModal.jsx';
// import { setToken } from './auth/auth.js';
// import { removeToken } from './auth/auth.js';
  // Path to your RichTextEditor component

//STATE = How to write a variable in React

// Session timeouts (in milliseconds)
const SESSION_DURATION = 5 * 60 * 1000; // 5 minutes
const WARNING_DURATION = 1 * 60 * 1000;  // 1 minute before session expires

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulate login status
  const [isSessionWarningVisible, setIsSessionWarningVisible] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(null);
  const [sessionWarningTimeout, setSessionWarningTimeout] = useState(null);
  const navigate = useNavigate(); // For redirecting the user to login on logout

  const logout = useCallback(() => {
    // removeToken() // Remove AuthToken
    alert('Session expired. Logging out...');
    setIsAuthenticated(false);
    clearTimeout(sessionTimeout);
    clearTimeout(sessionWarningTimeout);
    navigate('/signin'); // Redirect to login page on logout
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
  }, [logout]);

  useEffect(() => {
    if (isAuthenticated) {
      resetSession();
    }
    return () => {
      clearTimeout(sessionTimeout);
      clearTimeout(sessionWarningTimeout);
    };
  }, [isAuthenticated, resetSession, sessionTimeout, sessionWarningTimeout]);

  const handleUserActivity = () => {
    resetSession(); // Reset session timer on any user activity
  };

  return (
    <div className="app" onClick={handleUserActivity} onKeyDown={handleUserActivity}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Login />} />
          <Route path="/saleDeed" element={isAuthenticated ? <SaleDeed /> : <Login />} />
          <Route path="/signin" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/RichTextEditor" element={isAuthenticated ? <RichTextEditorTest /> : <Login />} />
          <Route path="*" element={<Login />} /> {/* Default to Login if no match */}
        </Routes>
      </Router>
      {isSessionWarningVisible && (
        <SessionWarningModal onContinue={resetSession} onLogout={logout} />
      )}
    </div>
  );
}

export default App;