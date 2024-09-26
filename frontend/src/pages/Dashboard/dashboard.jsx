import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import '../../css/dashboard.css';
import '../saleDeed/saleDeed.jsx';

function Dashboard() {
  const [selectedValue, setSelectedValue] = useState('');
  const [Component, setComponent] = useState(null);

  const handleChange = async (event) => {
    const value = event.target.value;
    setSelectedValue(value);

    if (value === 'option1') { // Ensure this matches the MenuItem value
      try {
        const saleDeedModule = await import('./saleDeed.jsx');
        //const saleDeedModule = await import('./htmlDisplay.js');
        setComponent(() => saleDeedModule.default); // Set the component to render
      } catch (error) {
        console.error('Error loading sale_deed.js:', error);
      }
    } else {
      setComponent(null); // Reset component if another option is selected
    } 
  };

  return (
    <div className='dashboard-container'>
      <h4 className='dashboard__header'>Welcome to the Dashboard!</h4>
      <FormControl className='form-control'>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedValue}
          label="Choose an option"
          onChange={handleChange}
          className='dashboard__dropdown'
        >
          <MenuItem value="" disabled>
            Select an option
          </MenuItem>
          <MenuItem value="option1">Sale Deed</MenuItem>
          <MenuItem value="option2">Rental Agreement</MenuItem>
        </Select>
      </FormControl>
      {Component && <Component />} {/* Render the component if it exists */}
    </div>
  );
}

export default Dashboard;