import React from "react";
import '../../css/header.css';
import { FormControl } from '@mui/material';

/** 
 * Represents Header Code
*/
const Header=()=>{
    return(
        <div>
            <div className='app__header'>
                <h1>Documents Consultancy Services</h1>
                <FormControl>
                    <a href='/login' className='app__login'>Log In</a>
                </FormControl>
                <FormControl>
                    <a href='/signup' className='app__signup'>Sign Up</a>
                </FormControl>
            </div>
        </div>
    )
}

export default Header;
