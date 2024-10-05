import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

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
