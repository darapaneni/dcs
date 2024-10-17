/**
 * A Zustand store for managing the sign-in state in a React application.
 * This store handles authentication status and the visibility of the login modal.
 * 
 * @module useSignInStore
 * 
 * @typedef {Object} SignInState
 * @property {boolean} isAuthenticated - Indicates whether the user is authenticated.
 * @property {boolean} showLogin - Indicates whether the login modal is currently visible.
 * @property {function} setShowLogin - Function to set the visibility state of the login modal.
 * @param {boolean} isLoginOpen - A boolean indicating whether the login modal should be shown.
 * 
 * @returns {Promise<void>} - A promise that resolves when the state is updated.
 * 
 * @property {function} setAuthentication - Function to set the authentication state.
 * @param {boolean} isAuthenticated - A boolean indicating whether the user is authenticated.
 * 
 * @returns {Promise<void>} - A promise that resolves when the authentication state is updated.
 * 
 * @example
 * const signInStore = useSignInStore.getState();
 * 
 * // Open the login modal
 * signInStore.setShowLogin(true);
 * 
 * // Authenticate the user
 * signInStore.setAuthentication(true);
 */

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