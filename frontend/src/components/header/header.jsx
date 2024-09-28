import React, { useState } from "react";
import './header.css';
import { FormControl } from '@mui/material';
import Login from '../modal/login/login.jsx'; // Adjust the import path as necessary */
import Signup from '../modal/signup/signup.jsx'; // Adjust the import path as necessary

/**
 * Header component for the Documents Consultancy Services application.
 * 
 * This component serves as the navigation header for the application,
 * providing links for users to log in or sign up. It manages the state
 * to control which modal (Login or Signup) is displayed based on user
 * interactions.
 * 
 * The component maintains internal state to track the active screen:
 * - 'signup': Displays the Signup component
 * - 'login': Displays the Login component
 * 
 * @component
 * @returns {JSX.Element} The rendered header element containing navigation links and modals.
 * 
 * @example
 * // Example usage:
 * <Header />
 */
const Header = () => {
    const [activeScreen, setActiveScreen] = useState('signup'); // 'signup'
    //const [activeModal, setActiveModal] = useState(null); // 'login' or 'signup'
    //const [showLogin, setShowLogin] = useState(false);
    //const [showSignup, setShowSignup] = useState(false);

    const handleLoginClick = (event) => {
        event.preventDefault();
        //setShowLogin(true);
        setActiveScreen('login');

    }

    /*const handleSignupClick = (event) => {
        event.preventDefault();
        //setShowSignup(true);
        setActiveModal('signup');
    }

    const closeSignupModal = () => {
        setShowSignup(false);
    } */
       
    /*const closeLoginModal = () => {
        setShowLogin(false);
    }*/

    const closeLoginModal = () => {
        setActiveScreen('signup');
    };

    /*const closeModal = () => {
        setActiveModal(null);
    }; */

    return (
        <div>
            <div className='app__header'>
                <h4>Documents Consultancy Services</h4>
                <FormControl>
                    <a href='#' className='app__login' onClick={handleLoginClick}>Log In</a>
                    {/*<a href='#' className='app__signup' onClick={handleSignupClick}>Sign Up</a>*/}
                </FormControl>
            </div>
            {activeScreen === 'login' ? ( <Login onClose={closeLoginModal} />) : (<Signup />)}
        </div>
    );
}

export default Header;