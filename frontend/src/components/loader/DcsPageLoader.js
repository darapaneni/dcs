import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box, Typography, LinearProgress } from '@mui/material';

/**
 * DcsPageLoader is a loading component that displays either a circular or linear 
 * progress indicator with a customizable message. It is designed to occupy 
 * the full viewport height, providing feedback to users during page loading 
 * or processing events.
 *
 * @component
 * 
 * @param {Object} props - The props for the DcsPageLoader component.
 * @param {string} [props.message="Please wait......"] - The message to display while loading. Defaults to "Please wait......".
 * @param {number} [props.size=48] - The size of the circular loader. It is ignored if `isCircular` is false. Defaults to 48.
 * @param {boolean} [props.isCircular=true] - A boolean that determines whether to display a circular loader (true) or a linear loader (false). Defaults to true.
 *
 * @returns {JSX.Element} The rendered DcsPageLoader component.
 *
 * @example
 * // Usage example
 * <DcsPageLoader message="Loading your data..." size={60} isCircular={true} />
 */
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