import { create } from 'zustand';
const useSignInStore = create( ( set ) =>
( {
    isAuthenticated: false,
    showLogin: false,
    setShowLogin: async ( isLoginOpen ) => set( state => ( {
        showLogin: isLoginOpen
    } ) ),
    setAuthentication: async ( isAuthenticated ) => set( state => ( {
        isAuthenticated: isAuthenticated
    } ) )
} ) );

export default useSignInStore;