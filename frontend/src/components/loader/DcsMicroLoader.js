import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Box, Typography, LinearProgress } from '@mui/material';

/**
 * DcsMicroLoader is a versatile loading component that displays either a circular 
 * or linear loading indicator with an optional message. It can be customized 
 * through various props to adjust the size, color, and visibility of the label.
 *
 * @component
 * 
 * @param {Object} props - The props for the DcsMicroLoader component.
 * @param {string} [props.message="Please wait......"] - The message to display alongside the loader. Defaults to "Please wait......".
 * @param {number} [props.size=48] - The size of the loader (for circular) and font size for the message. Defaults to 48.
 * @param {boolean} [props.isCircular=true] - A boolean that determines whether to display a circular loader (true) or a linear loader (false). Defaults to true.
 * @param {boolean} [props.showLabel=true] - A boolean that determines whether to display the loading message. Defaults to true.
 * @param {string} [props.color="inherit"] - The color of the loader. Defaults to "inherit".
 *
 * @returns {JSX.Element} The rendered DcsMicroLoader component.
 *
 * @example
 * // Usage example
 * <DcsMicroLoader message="Loading data..." size={50} isCircular={true} showLabel={true} color="primary" />
 */
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