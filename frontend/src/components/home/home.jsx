import React, { useState } from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

function Home ()
{
  return (
    <div >
      <Header title={ "Documents Consultancy Services" } />
      <Box sx={ { flexDirection: 'row', } }>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
}

export default Home;
