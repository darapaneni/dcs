import './App.css';
import React from 'react';
import Home from './components/home/home.jsx';
import Signup from './components/modal/signup/signup.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary React Router components
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/modal/login/login.jsx';
import RichTextEditorTest from './pages/RichTextEditor/RichTextEditor_test';  // Path to your RichTextEditor component

//STATE = How to write a variable in React

function App() {
  return (

      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/saleDeed" element={<saleDeed />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/RichTextEditor" element={<RichTextEditorTest />} />
          </Routes>
        </Router>
      </div>
  );
}

export default App;