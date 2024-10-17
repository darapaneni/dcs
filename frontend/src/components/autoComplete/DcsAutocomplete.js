import React from 'react';
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';

/**
 * DcsAutocomplete is a reusable component that provides an autocomplete input field.
 * It utilizes Material-UI's Autocomplete component to allow users to select from a list of options.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.options - The list of options to be displayed in the autocomplete dropdown.
 * @param {number} [props.width=300] - The width of the autocomplete input field (in pixels).
 * @param {string} [props.size="small"] - The size of the input field. Can be "small", "medium", or "large".
 * @param {string} [props.label="Select"] - The label displayed above the input field.
 * @param {string} [props.variant="outlined"] - The variant of the input field. Can be "outlined", "filled", or "standard".
 * @param {function} props.onChange - Callback function triggered when the selected value changes. Receives the event and the new value.
 * @param {Object|null} [props.selectedValue=null] - The currently selected value of the autocomplete input. If no value is selected, it defaults to null.
 *
 * @returns {JSX.Element} The rendered autocomplete component.
 *
 * @example
 * const options = [
 *   { title: 'Option 1' },
 *   { title: 'Option 2' },
 *   { title: 'Option 3' }
 * ];
 *
 * const handleChange = (event, value) => {
 *   console.log('Selected value:', value);
 * };
 *
 * <DcsAutocomplete
 *   options={options}
 *   onChange={handleChange}
 *   selectedValue={options[0]}
 * />
 */
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