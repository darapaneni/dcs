/**
 * @fileoverview Home component that serves as the main landing page of the application.
 * It includes the header and footer components, encapsulating the overall layout structure
 * of the home page. The component renders the `Header` at the top and the `Footer` at the bottom.
 * 
 * @component
 */

import React from 'react'
import Header from '../header/header.jsx'    // Import the Header component
import Footer from '../footer/footer.jsx'    // Import the Footer component

/**
 * Home component is a stateless functional component that defines the basic layout 
 * for the home page. It renders the Header at the top and Footer at the bottom, 
 * providing the structure for the home page content.
 * 
 * @component
 * 
 * @returns {JSX.Element} The rendered Home component, which includes Header and Footer.
 * 
 * @example
 * // Example of using the Home component
 * return (
 *   <Home />
 * );
 */
function Home() {
  return (
    <div className='home'>
        <Header />     {/* Render the Header component */}
        <Footer />     {/* Render the Footer component */}
    </div>
  )
}

export default Home;
