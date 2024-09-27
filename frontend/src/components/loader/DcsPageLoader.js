import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box, Typography, LinearProgress } from '@mui/material';
const DcsPageLoader = ( { message = "Please wait......", size = 48, isCircular = 'true' } ) =>
{
    return (
        <Box variant="contained"
            sx={ {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'background.default',
            } }
        >
            { !isCircular ?
                <Box sx={ { width: '100%' } }>
                    <LinearProgress />
                </Box> :
                <CircularProgress size={ size } />
            }
            <Typography variant="h6" sx={ { mt: 2, } }>
                { message }
            </Typography>
        </Box>
    );
};
DcsPageLoader.propTypes = {
    message: PropTypes.string,
    size: PropTypes.number,
    color: PropTypes.string,
    isCircular: PropTypes.bool

};
export default DcsPageLoader;