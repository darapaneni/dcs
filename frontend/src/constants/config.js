
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

const SERVICE_URLS = {
    userLogin: { url: '/auth/login', method: 'POST' },
    userSignup: { url: '/auth/register', method: 'POST' },
    userDetailByEmail: { url: '/auth/users', method: 'POST' },
    forgotPassword: { url: '/forgot-password', method: 'POST' },
    getRefreshToken: { url: '/token', method: 'POST' },
};

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
    }
}
const MESSAGES = {
    API_NOTIFICATION_MESSAGES,
    SERVICE_URLS,
    SIGNUP_ERROR_MESSAGES
};
export default MESSAGES;
