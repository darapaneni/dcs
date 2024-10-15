import React, { useState } from 'react';
import { Select, MenuItem, FormControl } from '@mui/material';
import './dashboard.css';
import '../saleDeed/saleDeed.jsx';

/**
 * Dashboard component that allows the user to select an option from a dropdown.
 * Based on the selected option, a corresponding component (e.g., Sale Deed) is
 * dynamically loaded and displayed.
 * 
 * This component handles user interactions through a controlled dropdown input,
 * manages state for the selected option, and performs lazy loading of components
 * via `import()`.
 *
 * @component
 * @returns {JSX.Element} A rendered JSX element containing the dashboard interface.
 * 
 * @example
 * <Dashboard />
 */

function Dashboard() {

/**
 * State to hold the value of the currently selected option from the dropdown.
 * The selected value is used to determine which component (if any) to load dynamically.
 * 
 * @type {string}
 * @default ''
 */
  const [selectedValue, setSelectedValue] = useState('');

/**
 * State to hold the reference to the dynamically loaded component.
 * If a matching component is found based on the selected option, it will be
 * rendered. Otherwise, it remains `null`.
 * 
 * @type {React.Component|null}
 * @default null
 */

  const [Component, setComponent] = useState(null);

/**
 * Handles the dropdown change event. Dynamically imports and sets the selected
 * component if the option matches.
 *
 * @param {object} event - The event object from the dropdown menu.
 * @param {object} event.target - The target element of the event.
 * @param {string} event.target.value - The selected value from the dropdown.
 *
 * @async
 */

  const handleChange = async (event) => {
    const value = event.target.value;
    setSelectedValue(value);   // Update the selected value in state

    if (value === 'option1') { // Ensure this matches the MenuItem value
      try {
        /**
         * Dynamically imports the Sale Deed component when 'option1' is selected.
         * 
         * The dynamically loaded module is stored in the `saleDeedModule` variable,
         * and the default export from that module is set as the component to be rendered.
         * 
         * @type {React.Component} saleDeedModule.default
         */
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