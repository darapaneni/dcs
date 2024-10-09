import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box, Typography, LinearProgress } from '@mui/material';
const DcsMicroLoader = ( {
                             message = "Please wait......",
                             size = 48,
                             isCircular = 'true',
                             showLabel = true,
                             color = 'inherit' } ) =>
{
    return (
        <Box variant="contained" sx={ { flexGrow: 1, flexDirection: 'row' } } >
            { !isCircular ?
                <Box sx={ { width: '100%' } }>
                    <LinearProgress size={ size } color={ color } />
                </Box> :
                <CircularProgress size={ size } color={ color } thickness={ 6 } />
            }
            { showLabel && (
                <Typography fontSize={size}>
                    { message }
                </Typography>
            ) }
        </Box>
    );
};
DcsMicroLoader.propTypes = {
    message: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    isCircular: PropTypes.bool,
    showLabel: PropTypes.bool,
};
export default DcsMicroLoader;