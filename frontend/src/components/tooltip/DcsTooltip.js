import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
// const placements = [
//     'top-start',
//     'top',
//     'top-end',
//     'left-start',
//     'left',
//     'left-end',
//     'right-start',
//     'right', 'right-end'
// ];

const DcsTooltip = ( {
    title = "This is additional information",
    placement = "top",
    icon,
    onclick
} ) =>
{
    return (
        <Tooltip
            placement={ placement }
            title={ title }
            icon={ icon }
            arrow>
            <IconButton color='inherit' onClick={ onclick }>
                { icon }
            </IconButton>
        </Tooltip>
    );
};

export default DcsTooltip;
