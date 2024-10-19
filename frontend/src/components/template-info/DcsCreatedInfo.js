/**
 * @file DcsCreatedInfo.js
 * @description This file contains the `DcsCreatedInfo` component, which is used to display information about the creation and modification of an item, including the date and creator's name. The component uses Material-UI's `Typography` and `Box` components for layout and styling.
 */

// src/components/CreatedInfo.js
import React from 'react';
import { Typography, Box } from '@mui/material';

/**
 * DcsCreatedInfo Component
 * @component
 * @description The `DcsCreatedInfo` component is a simple layout that displays details such as the creation date, the creator's name, and the last modification date of a particular item. The dates are formatted using `toLocaleString()` for better readability.
 *
 * @param {Object} props - Component props
 * @param {string} props.createdDate - The creation date of the item, expected in a valid date format.
 * @param {string} props.createdBy - The name of the person who created the item.
 * 
 * @returns {JSX.Element} A display of creation and last modification details.
 * 
 * @example
 * // Example usage:
 * <DcsCreatedInfo createdDate="2023-10-12T08:30:00Z" createdBy="John Doe" />
 * 
 * // Output:
 * // Created By: John Doe
 * // Date: 10/12/2023, 8:30:00 AM
 * // Last Modified: 10/12/2023, 8:30:00 AM
 */
const DcsCreatedInfo = ( { createdDate, createdBy } ) =>
{
    return (
        <Box display={ "flex" } flexDirection={ "row" } gap={ 1 } >
            <Typography variant="caption" color="text.secondary">
                Created By: <strong>{ createdBy }</strong>
            </Typography>
            <Typography variant="caption" color="text.secondary">
                Date: <strong>{ new Date( createdDate ).toLocaleString() }</strong>
            </Typography>
            <Typography variant="caption" color="text.secondary">
                Last Modified: <strong>{ new Date( createdDate ).toLocaleString() }</strong>
            </Typography>
        </Box>
    );
};

export default DcsCreatedInfo;
