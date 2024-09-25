import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import Rental_agreement from './components/agreements/Rental_agreement.jsx';
import RichTextEditorTest from './pages/RichTextEditor/RichTextEditor_test';

// Wrapper Component
const RentalAgreementWrapper = ({ onInputChange }) => {
  return <Rental_agreement onInputChange={onInputChange} />;
};

function App() {
  const handleInputChange = (field, value) => {
    console.log(`${field}: ${value}`);
    // Handle state updates or other logic here
  };

  return (
    <div className="app">
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/RichTextEditor" element={<RichTextEditorTest />} />
            <Route 
              path="/Rental_agreement" 
              element={<RentalAgreementWrapper onInputChange={handleInputChange} />} 
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
