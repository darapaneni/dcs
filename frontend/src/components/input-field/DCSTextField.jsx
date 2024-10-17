import React,{ forwardRef } from 'react';
import { TextField, Box } from '@mui/material';

/**
 * DCSTextField is a custom input component built using Material-UI's TextField.
 * It allows customization of properties such as label, height, padding, and variant.
 * The component is designed to be flexible, providing a full-width option and 
 * consistent styling across the application.
 *
 * This component supports forwarding refs, which makes it compatible with forms 
 * and other higher-order components that may need to interact with the underlying 
 * TextField DOM element directly.
 *
 * @component
 *
 * @param {Object} props - The component props
 * @param {string} props.label - The label text for the TextField.
 * @param {string} [props.height='56px'] - The height of the TextField wrapper.
 * @param {string} [props.padding='14px 12px'] - The padding for the TextField input.
 * @param {string} [props.variant='outlined'] - The variant of the TextField (e.g., 'outlined', 'filled', 'standard').
 * @param {boolean} [props.fullWidth=true] - If true, the TextField will take the full width of its container.
 * @param {React.Ref} ref - A ref that can be forwarded to the underlying TextField.
 *
 * @returns {JSX.Element} The rendered DCSTextField component.
 *
 * @example
 * // Usage example
 * <DCSTextField
 *   label="Username"
 *   variant="outlined"
 *   fullWidth
 *   height="48px"
 * />
 */
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
