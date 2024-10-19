import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Box, Button, TextField, Typography} from "@mui/material";
import {MailOutline} from "@mui/icons-material";

/**
 * VerifyEmail is a React component that allows users to enter
 * a One-Time Password (OTP) for email verification. Upon
 * submission, the OTP is sent to the server for validation.
 * It displays success or error messages based on the response.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered OTP verification form.
 *
 * @example
 * <VerifyEmail />
 */
const VerifyEmail = () => {
    const navigate = useNavigate();
    const [otp, setOtp]=useState("")

/**
 * Handles the submission of the OTP form.
 * Sends the OTP to the server for verification.
 *
 * @param {React.FormEvent<HTMLFormElement>} e - The form event.
 * @returns {Promise<void>} A promise that resolves when the OTP has been processed.
 */
    const handleOtpSubmit = async(e)=>{
        e.preventDefault()
        if (otp) {

            await axios.post('http://localhost:8000/api/v1/auth/verify-email/', {'otp':otp}).then(response => {
                console.log('Success:', response.data);
                toast.success(response.data.message);
                navigate('/');

            })
                .catch(error => {
                    if (error.response) {
                        console.log('Response error:', error.response.data);

                        if (error.response.status === 400) {
                            toast.error(error.response.data.message)
                        }
                        //     else {
                    //         alert('Server error. Try again.');
                    //         toast.error('Server error. Try again.');
                    //     }
                    // } else if (error.request) {
                    //     console.log('No response received:', error.request);
                    //     toast.error('Server error. Try again.');
                    //
                   }
                });
            // const resp = res.data
            // console.log(res.message)
            // console.log('res.message')
            // try {
            //     if (res.status === 200) {
            //         toast.success(resp.message);
            //         navigate('/login')
            //     }
            //     if (res.status === 400) {
            //         toast.success(res.message);
            //     }
            // }
            // catch (error) {
            //     toast.success(error.message)
            // }
        }
    }
    return (
        <div>
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
                <ToastContainer />
                <form action="" style={{width: "30%"}} onSubmit={handleOtpSubmit}>
                    <MailOutline sx={{fontSize: 50, color: 'primary.main', mb: 2}}/>
                    <Typography variant="h4" gutterBottom>
                        Enter your OTP code:
                    </Typography>
                    <TextField
                        sx={{
                            '& .MuiInputBase-root': {
                                height: '36px', // Control the height of the input
                                '& input': {
                                    padding: '0px 0px 0px 6x',
                                    fontSize: '14px'
                                },
                                '& fieldset': {
                                    borderRadius: '6px'
                                },
                            },
                        }}
                        onChange={(e) => setOtp(e.target.value)}
                        size="small"
                        required
                        fullWidth
                        id="otp"
                        label="One Time Password"
                        name="otp"
                        autoComplete="off"
                    />
                    <Button type="submit" variant="contained"  size="small" sx={{
                        marginTop:4
                    }}>
                          Verify
                    </Button>
                </form>
            </Box>
        </div>
    )
}

export default VerifyEmail