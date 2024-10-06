// PricingPage.js
import React from 'react';
import { Container, Grid2, Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import {QRCodeCanvas }   from 'qrcode.react';
import { useNavigate} from "react-router-dom";
import usePricingStore from "../../store/pricingStore";
const PricingPage = () => {
    const navigate = useNavigate();
    const {  setSelectedPricing } = usePricingStore();
    const handleOnSelectClick = () => {
        setSelectedPricing({
            title: 'Basic',
            price: '$9.99',
            description: 'Basic plan with essential features',
            qrValue: 'https://example.com/basic'
        })
          navigate('/user/dashboard')
    }
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
            <Grid2 container spacing={6} sx={{justifyContent: 'center'}}>
                {pricingPlans.map((plan, index) => (
                    <Grid2 item xs={12} sm={6} md={6} key={index}>
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
                                </div>
                            </CardContent>
                            <CardActions sx={{gap:4}}>
                                <Button size="small" color="primary" href={plan.qrValue}>
                                    Learn More
                                </Button>
                                <Button size="small" variant={"contained"} color="primary" onClick={handleOnSelectClick}>
                                    Select
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
};

export default PricingPage;
