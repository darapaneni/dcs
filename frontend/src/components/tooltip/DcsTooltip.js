/**
 * @file DcsTooltip.js
 * @description This file defines the `DcsTooltip` component, which is a customizable tooltip that wraps an `IconButton`. It uses Material-UI's `Tooltip` and `IconButton` components to provide users with additional information when hovering over or clicking the icon.
 */


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

/**
 * DcsTooltip Component
 * @component
 * @description The `DcsTooltip` component displays a tooltip with additional information when the user interacts with an icon button. The tooltip's content, position, and the icon itself can be customized through props.
 *
 * @param {Object} props - Component props
 * @param {string} [props.title="This is additional information"] - The text to be displayed inside the tooltip.
 * @param {('top'|'bottom'|'left'|'right'|'top-start'|'top-end'|'left-start'|'left-end'|'right-start'|'right-end')} [props.placement="top"] - The position of the tooltip relative to the icon button. Default is "top".
 * @param {ReactNode} props.icon - The icon to be displayed within the `IconButton`. This prop should be a React node, such as an icon component.
 * @param {Function} props.onclick - The function to be executed when the icon button is clicked.
 * 
 * @returns {JSX.Element} A tooltip-wrapped icon button that displays additional information.
 * 
 * @example
 * // Example usage:
 * import InfoIcon from '@mui/icons-material/Info';
 *
 * <DcsTooltip
 *     title="More information about this feature"
 *     placement="right"
 *     icon={<InfoIcon />}
 *     onclick={() => console.log('Icon clicked')}
 * />
 * 
 * // Output:
 * // An icon button that, when hovered over, shows the tooltip with the specified title and position.
 */

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
