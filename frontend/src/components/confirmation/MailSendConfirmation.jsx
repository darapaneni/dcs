import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {Box, Typography, Button} from '@mui/material';
import { MailOutline} from '@mui/icons-material';
import {PropTypes} from "prop-types";

/**
 * MailSendConfirmation is a React component that displays a confirmation message
 * indicating that an email has been successfully sent to the user. It includes
 * a title, a success message, and a button to navigate back to the signup page.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.title="   Email Sent Successfully!"] - The title displayed above the confirmation message.
 *
 * @returns {JSX.Element} The rendered confirmation message component.
 *
 * @example
 * <MailSendConfirmation title="Email Verification" />
 */
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
