import React from "react";
import {Navigate, useOutlet} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import useAuthStore from '../../store/authStore';
import {styled} from '@mui/system';
import {Container} from '@mui/material';

/**
 * HomeLayout component serves as the main layout for the application.
 * It includes a Header, a Content area, and a Footer.
 * If the user is authenticated, they are redirected to the dashboard.
 * The Content area is populated by the current route's outlet.
 *
 * This layout structure helps maintain a consistent appearance across 
 * different pages while providing conditional rendering based on user 
 * authentication.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered HomeLayout component.
 *
 * @example
 * // Usage example
 * <HomeLayout />
 */
const Content = styled(Container)({
    // marginTop: '70px',  // space for fixed header
    // marginBottom: '50px',  // space for fixed footer
    maxHeight: 'calc(100vh - 60px)',  // adjust based on header/footer heights
    // overflowY: 'auto',
    // padding: '20px',
});

/**
 * HomeLayout component that wraps around the Header, Content, and Footer.
 * Redirects to the dashboard if the user is authenticated.
 *
 * @function HomeLayout
 * @returns {JSX.Element} The rendered layout containing Header, Content, and Footer.
 */
export const HomeLayout = () => {
    const {isAuthenticated} = useAuthStore();
    const outlet = useOutlet();
    if (isAuthenticated) {
        return <Navigate to="/user/dashboard"/>;
    }
    return (
        <div>
            <Header/>
            <Content>
                {outlet}
            </Content>
            <Footer/>

        </div>
    );
};