/**
 * @file Filter.js
 * @description This file contains the Filter component, which allows users to filter data based on date ranges.
 * The component utilizes Material-UI components for styling and functionality.
 */

import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

/**
 * Filter component for selecting date ranges.
 * 
 * @param {Object} props - The component's props.
 * @param {Function} props.onFilter - Callback function to handle filter changes.
 * This function receives the selected filter value as its argument.
 *
 * @returns {JSX.Element} A FormControl component containing a Select input
 * for filtering data based on specified date ranges.
 * 
 * @example
 * const handleFilterChange = (value) => {
 *   console.log("Selected filter:", value);
 * };
 * 
 * <Filter onFilter={handleFilterChange} />
 */
function Filter({ onFilter }) {
    return (
        <FormControl fullWidth>
            <InputLabel>Date</InputLabel>
            <Select
                label="Date"
                onChange={(e) => onFilter(e.target.value)}
            >
                <MenuItem value="last7Days">Last 7 Days</MenuItem>
                <MenuItem value="last30Days">Last 30 Days</MenuItem>
                <MenuItem value="all">All</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Filter;
