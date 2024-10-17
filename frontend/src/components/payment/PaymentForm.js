/**
 * @file PaymentForm.js
 * @description This file defines the components for handling Stripe payments using React and Material-UI. 
 * It includes form components for entering card details and submitting the payment using the Stripe API. 
 * The payment intent is created on the server side, and the form handles payment confirmation and 
 * provides feedback to the user.
 */


// PaymentForm.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

// Load the Stripe publishable key
const stripePromise = loadStripe('your-publishable-key-from-stripe');

/**
 * StripePaymentForm Component
 * @component
 * @description The form for processing payments using Stripe. This component uses the Stripe API to create a payment
 * intent and submit card payment details entered by the user.
 *
 * @returns {JSX.Element} The form for submitting card payment details.
 *
 * @example
 * return (
 *   <StripePaymentForm />
 * );
 */
const StripePaymentForm = () => {
    const stripe = useStripe();   // Stripe object to handle the payment process.
    const elements = useElements();  // Stripe elements that handle UI components like card inputs.
    const [loading, setLoading] = useState(false);  // State for managing the loading spinner during payment submission.
    const [message, setMessage] = useState('');  // State for managing feedback messages for success or error.

        /**
     * Handles form submission for processing the payment.
     * It sends a request to the backend to create a payment intent, then confirms the payment using Stripe.
     * 
     * @param {React.FormEvent<HTMLFormElement>} event - The form submission event.
     */
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

/**
 * PaymentWrapper Component
 * @component
 * @description A wrapper component for providing the Stripe Elements context to the payment form. It ensures 
 * the Stripe environment is set up and ready for handling payments.
 *
 * @returns {JSX.Element} The wrapped Stripe payment form.
 *
 * @example
 * return (
 *   <PaymentWrapper />
 * );
 */
// Wrapper for the PaymentForm
const PaymentWrapper = () => (
    <Elements stripe={stripePromise}>
        <StripePaymentForm />
    </Elements>
);

export default PaymentWrapper;
