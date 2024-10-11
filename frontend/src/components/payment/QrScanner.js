// QrScanner.js
import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Box, Typography, CircularProgress, Grid2, Card, CardContent } from '@mui/material';
import { QrReader } from 'react-qr-reader';

const QrScanner = () => {
    const [result, setResult] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Function to handle results from the QR reader
    // const handleResult = (result, error) => {
    //     if (result) {
    //         setResult(result.text); // Assuming `result` has a `text` property
    //     }
    //
    //     if (error) {
    //         console.error(error); // Handle any errors here
    //     }
    // };

    const handleApprove = (orderID) => {
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
        <Box>
            <Typography variant="h5">Scan QR Code for Payment</Typography>
            <QrReader
                delay={300}
                // onResult={handleResult} // Use onResult
                style={{ width: '100%' }}
            />
            {result && (
                <PayPalScriptProvider options={{ "client-id": "AWt4xC5_NrTGinmrv5qeid4R_2NHf3crGbLI33OcEl6YhLmWHQNGt18nk5G5vdSXjeq8xwHHAmkxGHzJ" }}>
                    <Grid2 container justifyContent="center" style={{ marginTop: 20 }}>
                        <Grid2 item xs={12} md={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">Payment Details</Typography>
                                    <Typography>Order ID: {result}</Typography>
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
                                                            value: "10.00", // Amount from the scanned QR code
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
                                        />
                                    )}
                                </CardContent>
                            </Card>
                        </Grid2>
                    </Grid2>
                </PayPalScriptProvider>
            )}
        </Box>
    );
};

export default QrScanner;
