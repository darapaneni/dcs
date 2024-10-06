import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Box, Typography, Button} from '@mui/material';
import { MailOutline} from '@mui/icons-material';
import {PropTypes} from "prop-types";

const MailSendConfirmation = ({
                                  title = "   Email Sent Successfully!"}) => {
    const navigate = useNavigate(); // React Router's hook to navigate
    const location = useLocation();
    const { success_message } = location.state || { success_message: 'We’ve sent a confirmation email to your inbox. Please check your email and follow the instructions.' };
    const handleGoBack = () => {
        // Navigate to another page (e.g., Home)
        navigate('/signup');
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
            {/*<CheckCircleOutline sx={{fontSize: 80, color: 'green', mb: 2}}/>*/}
            <MailOutline sx={{fontSize: 50, color: 'primary.main', mb: 2}}/>
            <Typography variant="h4" gutterBottom>
                {title}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
                {success_message}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleGoBack}
                sx={{mt: 3}}
            >
                Go Back to Home
            </Button>
        </Box>
    );
};
MailSendConfirmation.propTypes = {
    title:PropTypes.string,
    message:PropTypes.string,
}
export default MailSendConfirmation;
