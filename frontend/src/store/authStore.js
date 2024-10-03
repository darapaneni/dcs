import { create } from "zustand";
import Cookies from 'js-cookie';
import { mockLoginApi } from '../api/mockApi';

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

const useAuthStore = create( ( set ) =>
{
    // Initialize user and token from cookies
    const storedUser = Cookies.get( 'user' );
    const storedToken = Cookies.get( 'token' );
    const initialUser = storedUser ? JSON.parse( storedUser ) : null;

    return {
        isUserValid: false,
        setIsUserValid: ( arg ) => set( { isUserValid: arg } ),
        user: initialUser,
        token: storedToken,
        isAuthenticated: !!initialUser,
        login: async ( email, password ) =>
        {
            try
            {
                // const response = await axios.post( 'https://example.com/api/login', {
                //     username,
                //     password,
                // } );
                const response = await mockLoginApi( email, password );
                const { userData, token } = response; // Assuming the API returns user data and token

                set( { user: userData, isAuthenticated: true, token } );

                // Store user data and token in cookies
                Cookies.set( 'user', JSON.stringify( userData ), { expires: 7 } ); // Expires in 7 days
                Cookies.set( 'token', token, { expires: 7 } );
            } catch ( error )
            {
                console.error( "Login failed:", error );
                throw error;
            }
        },
        logout: () =>
        {
            set( { user: null, isAuthenticated: false, token: null } );
            Cookies.remove( 'user' ); // Remove user data from cookies
            Cookies.remove( 'token' ); // Remove token from cookies
        },
    };
} );

export default useAuthStore;
