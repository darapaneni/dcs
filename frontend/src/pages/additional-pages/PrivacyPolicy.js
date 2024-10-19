/**
 * @file PrivacyPolicy.js
 * @description This component renders the Privacy Policy page of the application.
 *              It outlines how user information is collected, used, and protected.
 *              The policy is structured into sections with headings and descriptive text.
 */

import React from 'react';
import
{
    Container,
    Typography,
    Paper,
    Box,
    Divider,
} from '@mui/material';

/**
 * @component PrivacyPolicy
 * @description A functional component that displays the privacy policy of the application.
 *              It includes various sections detailing information collection, usage, security,
 *              user rights, and contact information for inquiries.
 * @returns {JSX.Element} The Privacy Policy page rendered as a Material-UI Container
 *                        containing typography elements and dividers for section separation.
 */
const PrivacyPolicy = () =>
{
    return (
        <Container maxWidth="md" style={ { marginTop: '0.5rem', overflowY: 'scroll' } }>
            <Typography variant="h4" gutterBottom>
                Privacy Policy
            </Typography>
            <Paper elevation={ 2 } style={ { padding: '2rem' } }>
                <Typography variant="body1" >
                    Last updated: [Date]
                </Typography>

                <Divider style={ { margin: '1rem 0' } } />

                <Typography variant="h6">1. Introduction</Typography>
                <Typography variant="body1" >
                    Welcome to our Privacy Policy page! Here we explain how we collect, use, and protect your information.
                </Typography>

                <Divider style={ { margin: '1rem 0' } } />

                <Typography variant="h6">2. Information We Collect</Typography>
                <Typography variant="body1" >
                    We collect information that you provide to us directly, such as your name, email address, and any other details you choose to provide.
                </Typography>

                <Divider style={ { margin: '1rem 0' } } />

                <Typography variant="h6">3. How We Use Your Information</Typography>
                <Typography variant="body1" >
                    We may use the information we collect in various ways, including to:
                </Typography>
                <Box component="ul" sx={ { pl: 4 } }>
                    <li>
                        <Typography variant="body2">Provide, operate, and maintain our website.</Typography>
                    </li>
                    <li>
                        <Typography variant="body2">Improve, personalize, and expand our website.</Typography>
                    </li>
                    <li>
                        <Typography variant="body2">Understand and analyze how you use our website.</Typography>
                    </li>
                </Box>

                <Divider style={ { margin: '1rem 0' } } />

                <Typography variant="h6">4. Data Security</Typography>
                <Typography variant="body1" >
                    We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                </Typography>

                <Divider style={ { margin: '1rem 0' } } />

                <Typography variant="h6">5. Your Rights</Typography>
                <Typography variant="body1" >
                    Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your information.
                </Typography>

                <Divider style={ { margin: '1rem 0' } } />

                <Typography variant="h6">6. Changes to This Privacy Policy</Typography>
                <Typography variant="body1" >
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </Typography>

                <Divider style={ { margin: '0.5rem 0' } } />

                <Typography variant="h6">7. Contact Us</Typography>
                <Typography variant="body1" >
                    If you have any questions about this Privacy Policy, please contact us at [email@example.com].
                </Typography>
            </Paper>
        </Container>
    );
};

export default PrivacyPolicy;
