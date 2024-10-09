import React from 'react';
import {Box, Typography, Button} from '@mui/material';
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import RecentDocuments from "./RecentDocuments";

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
