import React from "react";
import {Navigate, useOutlet} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import useAuthStore from '../../store/authStore';
import {styled} from '@mui/system';
import {Container} from '@mui/material';

const Content = styled(Container)({
    // marginTop: '70px',  // space for fixed header
    // marginBottom: '50px',  // space for fixed footer
    maxHeight: 'calc(100vh - 60px)',  // adjust based on header/footer heights
    // overflowY: 'auto',
    // padding: '20px',
});
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