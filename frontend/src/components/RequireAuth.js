/**
 * @file RequireAuth.js
 * @description This file contains the RequireAuth component, which is responsible for protecting routes by checking
 * user authentication and authorization. It verifies if the authenticated user has the required roles to access the route.
 */

import React from "react";
import PropTypes from 'prop-types';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

/**
 * RequireAuth component that checks user authentication and authorization.
 *
 * This component checks if the current user is authenticated and whether they have the necessary roles to access a protected route.
 * If the user has the required roles, it renders the child components. 
 * If the user is authenticated but lacks the required roles, they are redirected to an unauthorized page.
 * If the user is not authenticated, they are redirected to the login page.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array<number>} props.allowedRoles - An array of role IDs that are allowed to access the route.
 * @returns {React.ReactNode} The rendered RequireAuth component, either the child components, 
 *                           a redirect to the unauthorized page, or a redirect to the login page.
 *
 * @example
 * <RequireAuth allowedRoles={[1, 2]}>
 *   <ProtectedComponent />
 * </RequireAuth>
 */
const RequireAuth = ( { allowedRoles } ) =>
{
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find( role => allowedRoles?.includes( role ) )
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={ { from: location } } replace />
                : <Navigate to="/login" state={ { from: location } } replace />
    );
};
RequireAuth.propTypes = {
    allowedRoles: PropTypes.arrayOf( PropTypes.number ).isRequired, // Ensure allowedRoles is an array of strings
};
export default RequireAuth; 