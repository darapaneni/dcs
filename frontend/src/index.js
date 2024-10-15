import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * The entry point of the React application.
 * This file is responsible for rendering the main App component 
 * and initializing the application within the DOM.
 * 
 * @module index
 */
/**
 * Creates a root for the React application and renders the main App component.
 * The app is wrapped in <React.StrictMode> to enable additional checks 
 * and warnings for its children.
 * 
 * @function
 * @returns {void}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

/**
 * Measure performance in the app. You can log results (for example: 
 * reportWebVitals(console.log)) or send them to an analytics endpoint.
 * 
 * @function
 * @param {function} reportWebVitals - Function to log or send performance metrics.
 * @returns {void}
 */
reportWebVitals();
