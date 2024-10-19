import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

/**
 * Home component serves as the main layout of the application.
 * It includes the Header and Footer components and renders child routes
 * using the Outlet component from react-router-dom.
 *
 * The Home component sets up the basic structure for the application,
 * ensuring that the header and footer are consistently displayed across
 * different pages.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered Home component containing Header,
 * Footer, and an Outlet for nested routes.
 *
 * @example
 * // Usage example
 * <Home />
 */
function Home ()
{
  return (
    <Box sx={ {   height: '100vh'} }>
      <Header title={ "Documents Consultancy Services" } />
      <Box sx={ { flexDirection: 'row',  height: '100vh'} }>
        <Outlet />
          <Footer />
      </Box>

    </Box>
  );
}

export default Home;
