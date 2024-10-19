/**
 * @file messages.js
 * @description This module contains predefined messages and service URLs used throughout the application.
 *              It includes notification messages for API interactions, error messages related to user signup,
 *              and service endpoints for authentication-related requests.
 */

const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "Loading...",
        message: "Data is being loaded. Please wait"
    },
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occur while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occur while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    },
    githubError: {
        title: "Error!",
        message:"GitHub login was canceled or denied."
    }
};

/**
 * @constant {Object} SERVICE_URLS
 * @description Contains service endpoints for user-related authentication actions.
 * @property {Object} userLogin - Endpoint for user login.
 * @property {string} userLogin.url - The URL for the login endpoint.
 * @property {string} userLogin.method - The HTTP method to be used for the login request.
 * @property {Object} userSignup - Endpoint for user registration.
 * @property {string} userSignup.url - The URL for the signup endpoint.
 * @property {string} userSignup.method - The HTTP method to be used for the signup request.
 * @property {Object} userDetailByEmail - Endpoint to fetch user details by email.
 * @property {string} userDetailByEmail.url - The URL for fetching user details.
 * @property {string} userDetailByEmail.method - The HTTP method to be used for this request.
 * @property {Object} forgotPassword - Endpoint for password reset requests.
 * @property {string} forgotPassword.url - The URL for the forgot password endpoint.
 * @property {string} forgotPassword.method - The HTTP method to be used for this request.
 * @property {Object} getRefreshToken - Endpoint for obtaining a refresh token.
 * @property {string} getRefreshToken.url - The URL for refreshing tokens.
 * @property {string} getRefreshToken.method - The HTTP method to be used for this request.
 */

const SERVICE_URLS = {
    userLogin: { url: '/auth/login', method: 'POST' },
    userSignup: { url: '/auth/register', method: 'POST' },
    userDetailByEmail: { url: '/auth/users', method: 'POST' },
    forgotPassword: { url: '/forgot-password', method: 'POST' },
    getRefreshToken: { url: '/token', method: 'POST' },
};

/**
 * @constant {Object} SIGNUP_ERROR_MESSAGES
 * @description Contains predefined error messages related to the user signup process.
 * @property {Object} emailExists - Error message for existing email.
 * @property {string} emailExists.title - The title of the error message.
 * @property {string} emailExists.message - The detailed message for the error.
 * @property {Object} emailInvalid - Error message for invalid email format.
 * @property {string} emailInvalid.title - The title of the error message.
 * @property {string} emailInvalid.message - The detailed message for the error.
 * @property {Object} email - Error message for missing email.
 * @property {string} email.title - The title of the error message.
 * @property {string} email.message - The detailed message for the error.
 * @property {Object} firstname - Error message for missing first name.
 * @property {string} firstname.title - The title of the error message.
 * @property {string} firstname.message - The detailed message for the error.
 * @property {Object} lastname - Error message for missing last name.
 * @property {string} lastname.title - The title of the error message.
 * @property {string} lastname.message - The detailed message for the error.
 * @property {Object} password - Error message for missing password.
 * @property {string} password.title - The title of the error message.
 * @property {string} password.message - The detailed message for the error.
 * @property {Object} confirmPasswordMatch - Error message for mismatched passwords.
 * @property {string} confirmPasswordMatch.title - The title of the error message.
 * @property {string} confirmPasswordMatch.message - The detailed message for the error.
 * @property {Object} confirmPassword - Error message for missing confirm password.
 * @property {string} confirmPassword.title - The title of the error message.
 * @property {string} confirmPassword.message - The detailed message for the error.
 * @property {Object} newPassword - Error message for missing new password.
 * @property {string} newPassword.title - The title of the error message.
 * @property {string} newPassword.message - The detailed message for the error.
 */

const SIGNUP_ERROR_MESSAGES={
    emailExists: {
            title: "Error!",
            message: "Email already exists. Please use a different email or login."
        },
    emailInvalid: {
        title: "Error!",
        message: "Invalid email address."
    },
    email:{
        title: "Error!",
        message: "Email is required"
    },
    firstname:{
        title: "Error!",
        message: "First name is required"
    },
    lastname:{
        title: "Error!",
        message: "Last name is required"
    },
    password:{
        title: "Error!",
        message: "Password is required"
    },
    confirmPasswordMatch:{
        title: "Error!",
        message: "Confirm Passwords do not match"
    },
    confirmPassword:{
        title: "Error!",
        message: "Confirm Password is required"
    },
    newPassword:{
        title: "Error!",
        message: "New Password is required"
    }
}
const MESSAGES = {
    API_NOTIFICATION_MESSAGES,
    SERVICE_URLS,
    SIGNUP_ERROR_MESSAGES
};
export default MESSAGES;
