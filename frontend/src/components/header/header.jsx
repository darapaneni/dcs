import '../../css/header.css';
import React, { useState } from "react";
import { FormControl } from '@mui/material';
import Login from '../modal/login/login.jsx'; // Adjust the import path as necessary */
import Signup from '../modal/signup/signup.jsx'; // Adjust the import path as necessary

/**
 * 
 * @returns 
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