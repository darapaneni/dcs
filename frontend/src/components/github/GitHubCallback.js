// src/components/GitHubCallback.js
import React, { useEffect , useState} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify";

import MESSAGES from "../../constants/config";

const DCS_API_BASE_URL = process.env.DCS_API_BASE_URL;
const GitHubCallback = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');
        const error = searchParams.get('error');
        if (error) {
            // Handle OAuth errors (like if the user denies access)
            setErrorMessage(MESSAGES.API_NOTIFICATION_MESSAGES.githubError.message);
            toast.error(MESSAGES.API_NOTIFICATION_MESSAGES.githubError.message)
            console.log(error);
            setTimeout(()=>{
                navigate('/signup')
            },2000)
            return;
        }
        if (code) {
            // Send the authorization code to your Django backend
            axios
                .post(`${DCS_API_BASE_URL}/auth/github/`, { code })
                .then(response => {
                    console.log('User data:', response.data);
                    // Handle the response, e.g., save the user data or redirect
                    // Redirect to a user dashboard or home after successful login
                    navigate('/');
                })
                .catch(error => {
                    console.error('GitHub login failed:', error);
                   toast.error(error.response.data.message)
                });
        } else {
            console.error('No authorization code returned from GitHub');
        }
    }, [location, navigate,MESSAGES]);

    return (
        <div>
            {errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                <div>Logging you in...</div>
            )}
        </div>
    );
};

export default GitHubCallback;
