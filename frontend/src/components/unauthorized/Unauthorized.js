/**
 * @file Unauthorized.js
 * @description This file defines the `Unauthorized` component, which is displayed when a user attempts to access a page for which they do not have permission. It provides a message indicating the lack of access and includes a button for the user to navigate back to the previous page.
 */

import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * Unauthorized Component
 * @component
 * @description The `Unauthorized` component renders a message informing the user that they do not have access to the requested page. It includes a button that allows users to navigate back to the previous page.
 * 
 * @returns {JSX.Element} A section containing an unauthorized access message and a button to go back.
 * 
 * @example
 * // Example usage:
 * import Unauthorized from './Unauthorized';
 * 
 * function App() {
 *     return (
 *         <div>
 *             <Unauthorized />
 *         </div>
 *     );
 * }
 * 
 * // Output:
 * // A message indicating unauthorized access along with a button to go back.
 */
const Unauthorized = () =>
{
    const navigate = useNavigate();


    /**
     * goBack function
     * @function
     * @description Navigates the user back to the previous page in the history stack.
     */
    const goBack = () => navigate( -1 );

    return (
        <section>
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <button onClick={ goBack }>Go Back</button>
            </div>
        </section>
    );
};

export default Unauthorized;
