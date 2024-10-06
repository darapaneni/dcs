import React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

const DcsAutocomplete = ( {
    options = [],
    width = 300,
    size = "small",
    label = "Select",
    variant = "outlined",
    onChange,
    selectedValue
} ) =>
{
    return (
        <Autocomplete
            options={ options }
            getOptionLabel={ ( option ) => option.title }
            size={ size }
            renderInput={ ( params ) => (
                <TextField { ...params }
                    label={ label }
                    variant={ variant } />
            ) }
            onChange={ onChange }
            value={ selectedValue || null }
            style={ { width: { width } } }
        />
    );
};

export default DcsAutocomplete;