import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

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
