import React,{ forwardRef } from 'react';
import { TextField, Box } from '@mui/material';

const DCSTextField =forwardRef (({
                          label,
                          height = '56px',
                          padding = '14px 12px',
                          variant = 'outlined',
                          fullWidth = true,
                          ...props },ref) => {
    return (
        <Box sx={{ maxWidth: fullWidth ? '100%' : '400px' }}>
            <TextField
                label={label}
                variant={variant}
                fullWidth={fullWidth}
                sx={{
                    '& .MuiInputBase-root': {
                        height: '36px',
                        '& input': {
                            padding: '0px 0px 0px 6x',
                            fontSize:'14px'
                        },
                        '& fieldset': {
                            borderRadius: '6px',
                            fontSize:'14px'
                        },
                    },
                }}
                {...props}
            />
        </Box>
    );
});

export default DCSTextField;
