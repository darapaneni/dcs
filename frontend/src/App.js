/**
 * @fileoverview The main application component that sets up the routing for different pages such as Home, Dashboard, Signup, Login, and others.
 * It uses React Router for client-side navigation and Bootstrap for styling. This is the entry point of the React application.
 * 
 * The application handles user authentication, registration, and document-related features such as a Sale Deed, and provides
 * a dashboard interface for users. Each page is mapped to a specific route in the application.
 * 
 * @component
 */
import './App.css';
import React from 'react';
import Home from './components/home/home.jsx';
import Signup from './components/modal/signup/signup.jsx';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary React Router components
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/modal/login/login.jsx';
import RichTextEditorTest from './pages/RichTextEditor/RichTextEditor_test';  // Path to your RichTextEditor component

/**
 * The App component that serves as the main entry point for the application.
 * It defines the client-side routing using `react-router-dom` and renders the appropriate components based on the route.
 * 
 * The main routes are:
 * - `/`: Renders the Home page, typically the landing page for users.
 * - `/dashboard`: Renders the Dashboard, where users can access various functionalities after authentication.
 * - `/saleDeed`: Renders the Sale Deed page, which handles sale deed documentation.
 * - `/signin`: Renders the Login page for user authentication.
 * - `/signup`: Renders the Signup page for user registration.
 * - `/RichTextEditor`: Renders a rich text editor interface where users can interact with a rich text editor.
 * 
 * The App component includes routing logic to manage these different routes, and it wraps all components with the `Router`
 * for client-side navigation without reloading the entire page.
 * 
 * @component
 * @returns {JSX.Element} The root JSX structure of the application, with routing logic to display different components based on the URL path.
 * 
 * @example
 * // Example usage of the App component to enable routing in a React application:
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import App from './App';
 * 
 * ReactDOM.render(<App />, document.getElementById('root'));
 * 
 * @see https://reactrouter.com/web/guides/quick-start for more details on React Router setup.
 */

//STATE = How to write a variable in React
function App() {
  return (

      <div className="app">  
        <Router>  {/* The `Router` component wraps the entire application to enable client-side routing */}
          <Routes>   {/* The `Routes` component manages all the different routes in the application */}
            <Route path="/" element={<Home />} />   {/* Home route: renders the `Home` component when the user navigates to the root URL ("/") */}
            <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard route: renders the `Dashboard` component when the user navigates to "/dashboard" */}
            <Route path="/saleDeed" element={<saleDeed />} /> {/* Sale Deed route: renders the `saleDeed` component when the user navigates to "/saleDeed" */}
            <Route path="/signin" element={<Login />} /> {/* Login route: renders the `Login` component for user authentication when the user navigates to "/signin" */}
            <Route path="/signup" element={<Signup />} />  {/* Signup route: renders the `Signup` component for user registration when the user navigates to "/signup" */}
            <Route path="/RichTextEditor" element={<RichTextEditorTest />} />  {/* Rich Text Editor route: renders the `RichTextEditorTest` component for text editing when the user navigates to "/RichTextEditor" */}
          </Routes>
        </Router>
      </div>
  );
}

export default App;