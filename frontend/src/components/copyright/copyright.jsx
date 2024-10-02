import React from 'react';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';
export default function Copyright ( { year } )
{
    return <Typography variant="body2" component="p" sx={ { flexGrow: 1, margin: 0, maxWidth: '100%' } }> ©️ { year } by DCS.com. All Rights Reserved</Typography>;
}
Copyright.propTypes = {
    year: PropTypes.number.isRequired,
};