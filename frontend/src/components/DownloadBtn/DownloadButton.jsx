import React, { useState } from 'react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import Button from '@mui/material/Button';
import LockIcon from '@mui/icons-material/Lock';
import DownloadIcon from '@mui/icons-material/Download';
import { CircularProgress } from '@mui/material'; // Import Material-UI components

const DownloadButton = ({ agreementId, downloadUrl, onDownloadSuccess, pageIdentifier }) => {
    
  const [loading, setLoading] = useState(false); // State to track loading status
  const [isLocked, setIsLocked] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const flaskApiBaseUrl = 'http://127.0.0.1:5000'; 

  const handlePayment = async () => {
    try {
        setLoading(true); // Start loading
        const paymentAmount = "10.00"; // Define the payment amount
        const originalPage = window.location.href; // Get current page URL

        const response = await axios.post(`${flaskApiBaseUrl}/api/paypal/create-payment`, {
            amount: paymentAmount,
            original_page: originalPage // Send the original page URL
        });

        if (response.status === 200 && response.data.links) {
            const approvalUrl = response.data.links.find(link => link.rel === 'approval_url');
            window.location.href = approvalUrl.href; // Redirect to PayPal
        } else {
            setErrorMessage('Error initiating payment');
        }
    } catch (error) {
        console.error('Payment API error:', error);
        setErrorMessage('Payment failed. Try again.');
    } finally {
        setLoading(false); // Stop loading
    }
};

  const handleDownload = () => {
    setLoading(true); // Start loading for download
    const element = document.getElementById('preview'); 
    const today = new Date();
    const formattedDate = `${today.getDate()}_${today.getMonth() + 1}_${today.getFullYear()}`;

    const opt = {
      margin: 0.5,
      filename: `Rental_Agreement_${formattedDate}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(opt).save().then(() => {
      setLoading(false); // Stop loading after download completes
      if (onDownloadSuccess) {
        onDownloadSuccess();
      }
    });
  };

  const handlePaymentSuccess = async () => {
    try {
      const paymentStatusResponse = await axios.get(`${flaskApiBaseUrl}/api/paypal/payment-status`);

      if (paymentStatusResponse.data.status === 'success') {
        setIsLocked(false);
        setErrorMessage('');
      } else {
        setErrorMessage('Payment not successful.');
      }
    } catch (error) {
      console.error('Payment status check error:', error);
      setErrorMessage('Error checking payment status.');
    }
  };

  return (
    <div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <Button
        onClick={isLocked ? handlePayment : handleDownload}
        startIcon={isLocked ? <LockIcon /> : <DownloadIcon />}
        variant="contained"
        color={isLocked ? "secondary" : "primary"}
        style={{
          marginTop: '20px',
          backgroundColor: isLocked ? '#2196f3' : '#4caf50',
          color: 'white',
        }}
        disabled={loading} // Disable button while loading
      >
        {loading ? <CircularProgress size={24} style={{ marginRight: '8px' }} /> : null} 
        {isLocked ? 'Pay & Download' : 'Download'}
      </Button>
    </div>
  );
};

export default DownloadButton;
