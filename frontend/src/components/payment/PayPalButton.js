// PayPalButton.js
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CircularProgress, Typography, Card, CardContent, Grid2 } from '@mui/material';

const PayPalButton = () => {
    const initialOptions = {
        clientId: "AWt4xC5_NrTGinmrv5qeid4R_2NHf3crGbLI33OcEl6YhLmWHQNGt18nk5G5vdSXjeq8xwHHAmkxGHzJ",
    };
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    // const styles = {
    //     shape: "rect",
    //     layout: "vertical",
    // };
    const handleApprove = (orderID) => {
        // Here, you will send the orderID to your Django backend to verify and capture the payment
        fetch('http://localhost:8000/api/paypal/capture-order/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderID }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setSuccess(true);
                } else {
                    setError('Payment could not be captured.');
                }
            });
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <Grid2 container justifyContent="center">
                <Grid2 item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="caption">Complete Your Payment</Typography>
                            {loading && <CircularProgress />}
                            {error && <Typography color="error">{error}</Typography>}
                            {success ? (
                                <Typography color="primary">Payment Successful!</Typography>
                            ) : (
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        setLoading(true);
                                        return actions.order.create({
                                            purchase_units: [{
                                                amount: {
                                                    value: "10.00", // Set the amount here
                                                },
                                            }],
                                        });
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            setLoading(false);
                                            handleApprove(details.id);
                                        });
                                    }}
                                    onError={(err) => {
                                        setLoading(false);
                                        setError('An error occurred during payment.');
                                        console.error(err);
                                    }}
                                    onCancel={()=>{
                                        setLoading(false);
                                    }}
                                />
                            )}
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </PayPalScriptProvider>
    );
};

export default PayPalButton;
