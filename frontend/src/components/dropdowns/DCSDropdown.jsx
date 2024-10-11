import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

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
