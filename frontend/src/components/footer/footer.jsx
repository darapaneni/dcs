import React from "react";
import { Grid2, Paper } from "@mui/material";
import DcsCustomLink from "../link/DcsCustomLink";
import Copyright from './../copyright/copyright';
/**
 * Footer component renders a fixed footer containing navigation links and copyright information.
 * It provides links to support, privacy policy, terms and conditions, and contact details.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered footer containing navigation links and copyright.
 *
 * @example
 * // Usage example
 * <Footer />
 */

const links = [    // List of links to be displayed in the footer
    {
        name: 'Support',
        iconName: 'help',
        href: 'support',
        seq: 1
    },
    {
        name: 'Privacy Policy',
        iconName: 'privacy_tip',
        href: 'privacy-policy',
        seq: 2
    },
    {
        name: 'Terms and Conditions',
        iconName: 'edit_note',
        href: 'privacypolicy',
        seq: 3
    }
    ,
    {
        name: 'Contact',
        iconName: 'edit_note',
        href: 'tel:080-69169760',
        seq: 4
    }
];
const Footer = () =>
{
    const currentYear = new Date().getFullYear();
    return (
            <Paper sx={ {
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                flexGrow: 1,
                zIndex: -1 } }   >
                <Grid2 container size={ 12 } sx={{
                    zIndex:-1
                }}>
                    <Grid2 size={ 9 }>

                        { links.map( ( { seq, name, href } ) => (
                            <DcsCustomLink
                                linkText={ name }
                                key={ seq }
                                targetPath={ href }
                            />
                        ) ) }
                    </Grid2>
                    <Grid2    size={ 3 } sx={{
                        display: 'flex',
                        justifyItems:'flex-end',
                        justifyContent:'flex-end',
                        alignItems:'flex-end',
                        alignContent:'flex-end',
                        zIndex: -1
                    }}>
                        <Copyright year={ currentYear } />
                    </Grid2>
                </Grid2>
            </Paper >
    );
};
export default Footer;