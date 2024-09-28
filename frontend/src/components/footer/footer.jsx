import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';


/**
 * Footer component for the DCS application.
 * 
 * This component is used to display the footer at the bottom of every page.
 * It includes several sections: support contact, navigation links, 
 * privacy policy and terms of use, and the company contact number.
 * It also displays copyright information.
 * 
 * The component consists of the following sections:
 * 
 * - **Support Section**: Shows the support email address.
 * - **Navigation Section**: Contains navigation links, such as to a Rich Text Editor page.
 * - **Privacy and Terms Section**: Displays links for the privacy policy and terms and conditions.
 * - **Contact Section**: Shows the customer support contact number.
 * - **Copyright Section**: Displays copyright information.
 *
 * @component
 * @returns {JSX.Element} JSX code to render the footer for the DCS application.
 * 
 * @example
 * // Example usage of the Footer component in an App component
 * return (
 *   <Footer />
 * )
 */
const Footer=()=>{
    return(
        <footer className="main__footer">
            <div className="app__footer">
                <div className="footer__support">
                    <p>support@dcs.com</p>
                    <a href = "mailto:support@dcs.com">support@dcs.com</a>
                </div>
                <div className="app__navigations">
                    <Link to="/RichTextEditor">Test Rich Text Editor</Link>
                </div>
                <div className="footer__privacy__terms">
                    <a href="/privacypolicy">Privacy Policy | </a>
                    <a href="termsandconditions">Terms and Conditions</a>
                </div>
                <div className="app__contact">
                    <a href = "tel:080-69169760">080-69169760</a>
                </div>
            </div>
            <div className="app__copyright"><p>Copyright 2024 by DCS.com. All Rights Reserved</p></div>
        </footer>
    )

}

export default Footer;