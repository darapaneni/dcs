// PaymentForm.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

// Load the Stripe publishable key
const stripePromise = loadStripe('your-publishable-key-from-stripe');

const StripePaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return; // Stripe has not loaded yet
        }

        setLoading(true);

        // Create payment intent on the server (we'll define this route later)
        const { data: clientSecret } = await axios.post('http://localhost:8000/create-payment-intent', {
            amount: 1000,  // Amount in cents (e.g., $10.00)
        });

        const cardElement = elements.getElement(CardElement);

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardElement,
            },
        });

        setLoading(false);

        if (result.error) {
            setMessage(result.error.message);
        } else if (result.paymentIntent.status === 'succeeded') {
            setMessage('Payment Successful!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Enter your payment details</Typography>
            <CardElement />
            {loading ? (
                <CircularProgress />
            ) : (
                <Button variant="contained" color="primary" type="submit" disabled={!stripe}>
                    Pay Now
                </Button>
            )}
            {message && <Typography color="error">{message}</Typography>}
        </form>
    );
};

// Wrapper for the PaymentForm
const PaymentWrapper = () => (
    <Elements stripe={stripePromise}>
        <StripePaymentForm />
    </Elements>
);

export default PaymentWrapper;
