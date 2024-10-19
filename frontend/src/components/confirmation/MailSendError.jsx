import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Box, Typography, Button} from '@mui/material';
import {ErrorOutline} from '@mui/icons-material';
import {PropTypes} from "prop-types";

/**
 * MailSendError is a React component that displays an error message
 * indicating that there was an issue sending an email. It includes
 * an error icon, a title, a dynamic error message, and a button 
 * to navigate back to the home page.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered error message component.
 *
 * @example
 * <MailSendError />
 */
const MailSendError = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { message } = location.state || { message: ' There was an error occurred. Please try again later.' };
    const handleGoBack = () => {
        // Navigate to another page (e.g., Home)
        navigate('/');
    };
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
            }}
        >
            <ErrorOutline sx={{fontSize: 80, color: 'red', mb: 2}}/>
            <Typography variant="h4" gutterBottom>
                Failed to Send Email
            </Typography>
            <Typography variant="body1" gutterBottom>
                {message ? message : 'There was an error occurred. Please try again later.'}
                {/*There was an error sending your email. Please try again later.*/}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoBack}
                sx={{mt: 3}}>
                Go Back to Home
            </Button>
        </Box>
    );
};
MailSendError.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
}
export default MailSendError;
