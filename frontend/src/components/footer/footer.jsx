import React from "react";
import { Link } from 'react-router-dom';
import '../../css/footer.css';

/**
 * Represents Footer Code
 */
const Footer = () => {
    return (
        <footer className="main__footer">
            <div className="app__footer">
                <div className="app__contact">
                    <h3>Contacts</h3>
                    <ul>
                        <li>
                            Email: <a href="mailto:support@dcs.com">support@dcs.com</a>
                        </li>
                        <li>
                            Contact: <a href="tel:080-69169760">080-69169760</a>
                        </li>
                    </ul>
                </div>

                <div className="app__navigations">
                    <h3>Navigations</h3>
                    <ul>
                        <li>
                            <Link to="/RichTextEditor">Test Rich Text Editor</Link>
                        </li>
                        <li>
                            <Link to="/Rental_agreement">Rental Agreement</Link>
                        </li>
                    </ul>
                </div>

                <div className="app__terms">
                    <h3>Terms</h3>
                    <ul>
                        <li>
                            <Link to="/privacypolicy">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/termsandconditions">Terms and Conditions</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="app__copyright">
                <p>Copyright 2024 by DCS.com. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
