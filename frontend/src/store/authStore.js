/**
 * A Zustand store for managing user authentication state in a React application.
 * This store handles user login, logout, and state persistence using cookies.
 * 
 * @module useAuthStore
 * 
 * @requires create
 * @requires js-cookie
 * @requires AxiosInstance - Custom Axios instance for making API calls.
 * 
 * @typedef {Object} User
 * @property {string} email - The email address of the user.
 * @property {string} names - The full name of the user.
 * 
 * @typedef {Object} AuthState
 * @property {boolean} isUserValid - Indicates if the user is valid.
 * @property {function} setIsUserValid - Function to set the validity state of the user.
 * @property {User|null} user - The authenticated user's data or null if not authenticated.
 * @property {string|null} token - The access token for the authenticated user or null if not authenticated.
 * @property {boolean} isAuthenticated - Indicates if the user is currently authenticated.
 * @property {function} login - Function to log in a user.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * 
 * @returns {Promise<void>} - A promise that resolves when the login is successful, or throws an error if it fails.
 * 
 * @property {function} logout - Function to log out the user.
 * @returns {void} - Resets the authentication state and removes user data from cookies.
 * 
 * @property {function} setUser - Function to set the user state based on API response.
 * @param {Object} resp - The response object from the API containing user data.
 * 
 * @returns {void} - Sets the user state and stores user data in cookies.
 * 
 * @example
 * const authStore = useAuthStore.getState();
 * 
 * // Log in a user
 * authStore.login('example@example.com', 'password123')
 *   .then(() => console.log('User logged in'))
 *   .catch((error) => console.error('Login failed:', error));
 * 
 * @example
 * // Log out the user
 * authStore.logout();
 * 
 * @example
 * // Set user state directly
 * const response = await someApiCall();
 * authStore.setUser(response);
 */

import {create} from "zustand";
import Cookies from 'js-cookie';
import AxiosInstance from "../api/dcs_axios";
// import data from "bootstrap/js/src/dom/data";
// import { mockLoginApi } from '../api/mockApi';

// const useAuthStoreOld = create( ( set ) => ( {
//     user: null,
//     isUserValid: false,
//     setIsUserValid: ( arg ) => set( { isUserValid: arg } ),
//     login: async ( username, password ) =>
//     {
//         try
//         {
//             const response = await axios.post( 'https://example.com/api/login', {
//                 username,
//                 password,
//             } );
//             const userData = response.data;
//             set( { user: userData, isAuthenticated: true } );
//         } catch ( error )
//         {
//             console.error( "Login failed:", error );
//         }
//     },
//     logout: () => set( { user: null, isUserValid: false } ),
// } ) );

const useAuthStore = create((set) => {
    // Initialize user and token from cookies
    const storedUser = Cookies.get('user');
    const storedToken = Cookies.get('token');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;

    return {
        isUserValid: false,
        setIsUserValid: (arg) => set({isUserValid: arg}),
        user: initialUser,
        token: storedToken,
        isAuthenticated: !!initialUser,
        login: async (email, password) => {
            try {
                // const response = await axios.post( 'https://example.com/api/login', {
                //     username,
                //     password,
                // } );  const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/register/', dataToSend);
                // const response = await mockLoginApi( email, password );
                const resp = await AxiosInstance.post('auth/login/', {email, password});
                if (resp.status === 200) {
                    const user = {
                        'email': resp.data.email,
                        'names': resp.data.full_name
                    };
                    const token = resp.data.access_token;
                    const refresh_token =resp.data.refresh_token;
                    set({
                        user: JSON.stringify(user),
                        isAuthenticated: true,
                        token,
                        refresh_token
                    });
                    // Store user data and token in cookies
                    Cookies.set('user', JSON.stringify(user), {expires: process.env.REACT_APP_EXPIRE_COOKIE_DAYS}); // Expires in 7 days
                    Cookies.set('token', resp.data.access_token, {expires: process.env.REACT_APP_EXPIRE_COOKIE_DAYS});
                    Cookies.set('refresh_token', resp.data.refresh_token, {expires: process.env.REACT_APP_EXPIRE_COOKIE_DAYS});
                    // localStorage.setItem('token', JSON.stringify(resp.data.access_token));
                    // localStorage.setItem('refresh_token', JSON.stringify(resp.data.refresh_token));
                    // localStorage.setItem('user', JSON.stringify(user));

                }
            } catch (error) {
                console.error("Login failed:", error);
                throw error;
            }
        },
        logout: () => {
            set({user: null, isAuthenticated: false, token: null});
            Cookies.remove('user'); // Remove user data from cookies
            Cookies.remove('token'); // Remove token from cookies
            Cookies.remove('refresh_token');
        },
        setUser:  (resp)=>{
            if(resp.data) {
                const user = {
                    'email': resp.data.email,
                    'names': resp.data.full_name
                };
                const token = resp.data.tokens.access;
                const refresh_token = resp.data.tokens.refresh;
                set({
                    user: JSON.stringify(user),
                    isAuthenticated: true,
                    token,
                    refresh_token
                });
                // Store user data and token in cookies
                Cookies.set('user', JSON.stringify(user), {expires: process.env.REACT_APP_EXPIRE_COOKIE_DAYS}); // Expires in 7 days
                Cookies.set('token', token, {expires: process.env.REACT_APP_EXPIRE_COOKIE_DAYS});
                Cookies.set('refresh_token', refresh_token, {expires: process.env.REACT_APP_EXPIRE_COOKIE_DAYS});
            }
        }
    };
});

export default useAuthStore;
