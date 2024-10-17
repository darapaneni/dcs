/**
 * @file WelcomePage.js
 * @description This file contains the WelcomePage component, which serves as the landing page for users
 * after logging in. It displays a personalized welcome message, a prompt to create a new document, 
 * and a list of recent documents. The component utilizes Material-UI for styling and layout.
 */

import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import RecentDocuments from "./RecentDocuments";

/**
 * WelcomePage component for displaying a personalized welcome message
 * and options for the user to create or access documents.
 * 
 * @returns {JSX.Element} A styled box containing a welcome message,
 * a button to create a new document, and a list of recent documents.
 * 
 * @example
 * <WelcomePage />
 */
const WelcomePage=()=> {
    const storedUser = Cookies.get('user');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;
    const navigate = useNavigate();
    const handleOnNewClick = () => {
        navigate('/user/pricing')
    }
    return (
        <>
            <Box
                sx={{
                    textAlign: 'center',
                    py: 5,
                    borderRadius: 2
                }}
            >
                <Typography variant="h4" component="h2" color="primary" gutterBottom>
                    Welcome back, {initialUser?.names}!
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    Ready to continue where you left off? Create a new document or pick up an existing one.
                </Typography>
                <Button variant="contained" color="primary" size="large" onClick={handleOnNewClick}>
                    New Document
                </Button>
                <RecentDocuments></RecentDocuments>

            </Box>
        </>
    );
}

export default WelcomePage;
