import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import React from 'react';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';
import SideBar from './components/Sidebar/sidebar.jsx';
import RichTextEditorTest from './pages/RichTextEditor/RichTextEditor_test';  // Path to your RichTextEditor component

//STATE = How to write a variable in React

function App() {
  return (
    <div className="app">
      <Router>
      <Header />
      <div>
      <Routes>
            <Route path="/RichTextEditor" element={<RichTextEditorTest />} />
      </Routes>
      <SideBar />
      <Footer />
      </div>
      </Router>
    </div>
  );
}

export default App;
