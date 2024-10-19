import React from 'react';
import Typography from '@mui/material/Typography';
import { PropTypes } from 'prop-types';

/**
 * Copyright component displays a copyright notice with the specified year.
 * It is styled using Material-UI's Typography component.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {number} props.year - The year to display in the copyright notice.
 *
 * @returns {JSX.Element} The rendered copyright notice.
 *
 * @example
 * <Copyright year={2024} />
 */
export default function Copyright ( { year } )
{
    return <Typography variant="body2" component="p" sx={ { flexGrow: 1, margin: 0, maxWidth: '100%' } }> ©️ { year } by DCS.com. All Rights Reserved</Typography>;
}
Copyright.propTypes = {
    year: PropTypes.number.isRequired,
};