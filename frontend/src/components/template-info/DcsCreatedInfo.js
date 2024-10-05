// src/components/CreatedInfo.js
import React from 'react';
import { Typography, Box } from '@mui/material';

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
