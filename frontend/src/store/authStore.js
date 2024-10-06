import {create} from "zustand";
import Cookies from 'js-cookie';
import AxiosInstance from "../api/dcs_axios";
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
                    const token = JSON.stringify(resp.data.access_token);
                    const refresh_token = JSON.stringify(resp.data.refresh_token);
                    set({
                        user: JSON.stringify(user),
                        isAuthenticated: true,
                        token,
                        refresh_token
                    });
                    // Store user data and token in cookies
                    Cookies.set('user', JSON.stringify(user), {expires: 7}); // Expires in 7 days
                    Cookies.set('token', JSON.stringify(resp.data.access_token), {expires: 7});
                    Cookies.set('refresh_token', JSON.stringify(resp.data.refresh_token), {expires: 7});
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
    };
});

export default useAuthStore;
