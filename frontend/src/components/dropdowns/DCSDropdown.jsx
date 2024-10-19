import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

/**
 * CustomizedDropdown component renders a dropdown (select) menu with predefined options.
 * It allows the user to select a status from the available options.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} [props.label="Status"] - The label displayed above the dropdown menu.
 *
 * @returns {JSX.Element} The rendered dropdown menu with options.
 *
 * @example
 * <CustomizedDropdown label="Select Gender" />
 */
const CustomizedDropdown=({label="Status"})=> {
    const [status, setStatus] = useState('');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <>
          <FormControl fullWidth size='small' sx={{ marginTop: 2 }}>
            <InputLabel id="dcs-select-label">Status</InputLabel>
            <Select
                labelId="dcs-select-label"
                id="dcs-lbl-select"
                value={status}
                fullWidth
                label={label}
                color={"primary"}
                // size={"small"}
                sx={{ height: 38, fontSize: 14 }}
                onChange={handleChange}
            >
                <MenuItem value="success">
                    {/*<ListItemIcon>*/}
                    {/*    <Check fontSize="small" />*/}
                    {/*</ListItemIcon>*/}
                    Male
                </MenuItem>
                <MenuItem value="failure">
                    {/*<ListItemIcon>*/}
                    {/*    <Clear fontSize="small" />*/}
                    {/*</ListItemIcon>*/}
                    Female
                </MenuItem>
            </Select>
         </FormControl>
        </>
    );
}

export default CustomizedDropdown;
