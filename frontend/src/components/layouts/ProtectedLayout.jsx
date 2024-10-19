import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import useAuthStore from '../../store/authStore';
import Header from "../header/header";
import Footer from "../footer/footer";
import {Container} from "@mui/material";

/**
 * ProtectedLayout component is designed to wrap protected routes
 * that require user authentication. If the user is not authenticated,
 * they are redirected to the home page.
 * 
 * This layout includes a Header and Footer, and the content of
 * the route is displayed in the main Container area.
 *
 * @component
 * 
 * @returns {JSX.Element} The rendered ProtectedLayout component.
 *
 * @example
 * // Usage example
 * <ProtectedLayout />
 */
export const ProtectedLayout = () =>
{
    const { isAuthenticated } = useAuthStore();   // If the user is not authenticated, navigate to the home page
    const outlet = useOutlet();

    if ( !isAuthenticated )
    {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Header title="Documents Consultancy Services" />
            <Container component="main" sx={{
                flexGrow: 1,
                py: 2,
                zIndex:2000 }}>
            { outlet }
            </Container>
            <Footer />
        </div>
    );
};
