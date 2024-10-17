/**
 * @file PricingPage.js
 * @description This file contains the `PricingPage` component that displays different pricing plans for DCS services. Each pricing plan is presented with its title, price, description, a QR code, and a PayPal payment button. It provides users with options to learn more about the plans and initiate payment via PayPal.
 */

// PricingPage.js
import React from 'react';
import { Container, Grid2, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import {QRCodeCanvas }   from 'qrcode.react';
// import { useNavigate} from "react-router-dom";
// import usePricingStore from "../../store/pricingStore";
import PayPalButton from '../payment/PayPalButton';
// import QrScanner from '../payment/QrScanner';

/**
 * PricingPage Component
 * @component
 * @description The `PricingPage` component displays three pricing plans: Basic, Pro, and Enterprise. Each plan includes a title, price, description, a QR code for quick access, and a PayPal payment button. The component uses Material-UI components to create a clean and responsive layout.
 *
 * @returns {JSX.Element} The JSX for rendering the pricing plans page.
 *
 * @example
 * // Example usage of PricingPage component
 * return (
 *   <PricingPage />
 * );
 */
const PricingPage = () => {
    // const navigate = useNavigate();
    // const {  setSelectedPricing } = usePricingStore();
    // const handleOnSelectClick = () => {
    //     setSelectedPricing({
    //         title: 'Basic',
    //         price: '$9.99',
    //         description: 'Basic plan with essential features',
    //         qrValue: 'https://example.com/basic'
    //     })
    //       navigate('/user/dashboard')
    // }
    const pricingPlans = [
        {
            title: 'Basic',
            price: '$9.99',
            description: 'Basic plan with essential features',
            qrValue: 'https://example.com/basic'
        },
        {
            title: 'Pro',
            price: '$19.99',
            description: 'Pro plan with advanced features',
            qrValue: 'https://example.com/pro'
        },
        {
            title: 'Enterprise',
            price: '$49.99',
            description: 'Enterprise plan with all features',
            qrValue: 'https://example.com/enterprise'
        }
    ];

    return (
        <Container sx={{ py: 4,}}>
            <Typography variant="h4" align="center" gutterBottom>
                DCS Pricing Plans
            </Typography>
            <Grid2 container spacing={2} sx={{justifyContent: 'center'}}>
                {pricingPlans.map((plan, index) => (
                    <Grid2 item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    {plan.title}
                                </Typography>
                                <Typography variant="h6" color="textSecondary">
                                    {plan.price}
                                </Typography>
                                <Typography variant="body2">
                                    {plan.description}
                                </Typography>
                                <div style={{ marginTop: 20, textAlign: 'center' }}>
                                    <QRCodeCanvas  value={plan.qrValue} size={100} />
                                    {/*<QrScanner />*/}
                                </div>
                            </CardContent>
                            <CardActions sx={{gap:1}}>
                                <Button size="small" color="primary" href={plan.qrValue}>
                                    Learn More
                                </Button>
                                {/*<Button size="small" variant={"contained"} color="primary" onClick={handleOnSelectClick}>*/}
                                {/*    Select*/}
                                {/*</Button>*/}
                                <PayPalButton />
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default PricingPage;
