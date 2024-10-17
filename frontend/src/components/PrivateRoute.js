/**
 * @file PrivateRoute.js
 * @description This file contains the PrivateRoute component, which is used to protect certain routes in the application.
 * It checks the user's authentication status and either renders the child components or redirects to the login page.
 */


import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthStore from '../store/authStore';

/**
 * PrivateRoute component that wraps around protected components.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The components to render if the user is authenticated.
 * @returns {React.ReactNode} The child components if authenticated, or a redirect to the login page.
 *
 * @example
 * <PrivateRoute>
 *   <Dashboard />
 * </PrivateRoute>
 */
const PrivateRoute = ( { children } ) =>
{
    const isAuthenticated = useAuthStore( ( state ) => state.isAuthenticated );

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;