import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import useAuthStore from '../../store/authStore';
import Header from "../header/header";
import Footer from "../footer/footer";
export const ProtectedLayout = () =>
{
    const { isAuthenticated } = useAuthStore();
    const outlet = useOutlet();

    if ( !isAuthenticated )
    {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Header title="Documents Consultancy Services" />
            { outlet }
            <Footer />
        </div>
    );
};
