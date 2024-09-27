import React from "react";
import '../../css/footer.css';
// import { Link } from 'react-router-dom';
import { Grid2, Link, Paper } from "@mui/material";
// import { size } from "draft-js/lib/DefaultDraftBlockRenderMap";
// import container from "quill/blots/container";
import Copyright from './../copyright/copyright';
import RichTextEditor from "../Quill";

// import { map } from "draft-js/lib/DefaultDraftBlockRenderMap";
/**
 * Represents Footer Code
 */
const links = [
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
        href: '/privacypolicy',
        seq: 3
    }
    ,
    {
        name: 'Phone: 080-69169760',
        iconName: 'edit_note',
        href: 'tel:080-69169760',
        seq: 4
    },

    {
        name: 'Rich Text Editor',
        iconName: 'edit_note',
        href: '/RichTextEditor',
        seq: 5
    },
    {
        name: 'Rental Agreement',
        iconName: 'edit_note',
        href: '/RentalAgreement',
        seq: 6
    }
];
const Footer = () =>
{
    const currentYear = new Date().getFullYear();
    return (
        // <footer className="main__footer">
        //     <div className="app__footer">
        //         <div className="footer__support">
        //             <p>support@dcs.com</p>
        //             <a href = "mailto:support@dcs.com">support@dcs.com</a>
        //         </div>
        //         <div className="app__navigations">
        //             <Link to="/RichTextEditor">Test Rich Text Editor</Link>
        //         </div>
        //         <div className="footer__privacy__terms">
        //             <a href="/privacypolicy">Privacy Policy | </a>
        //             <a href="termsandconditions">Terms and Conditions</a>
        //         </div>
        //         <div className="app__contact">
        //             <a href = "tel:080-69169760">080-69169760</a>
        //         </div>
        //     </div>
        //     <div className="app__copyright"><p>Copyright 2024 by DCS.com. All Rights Reserved</p></div>
        // </footer>
        <>
            <Paper sx={ { position: 'fixed', bottom: 0, left: 0, right: 0, flexGrow: 1, bgcolor: 'primary.main', color: 'white', py: 1 } }   >
                <Grid2 container size={ 12 }>
                    <Grid2 size={ 9 }>
                        { links.map( ( { seq, name, href } ) => (
                            <Link href={ href } underline="hover" color="inherit" key={ seq } sx={ {
                                marginLeft: 4
                            } } >
                                { name }
                            </Link>
                        ) ) }
                    </Grid2>
                    <Grid2 size={ 3 }>
                        <Copyright year={ currentYear } />
                    </Grid2>
                </Grid2>
            </Paper>
        </>
    );
};
export default Footer;