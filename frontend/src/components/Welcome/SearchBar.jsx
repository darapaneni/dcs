/**
 * @file SearchBar.js
 * @description This file contains the SearchBar component, which allows users to search for documents
 * through an input field with an accompanying search icon. It uses Material-UI components for styling and layout.
 */

import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

/**
 * SearchBar component for inputting search queries to filter documents.
 * 
 * @param {Object} props - The properties object.
 * @param {Function} props.onSearch - Callback function to handle the search input.
 * This function will be called with the current input value whenever the user types in the search field.
 * 
 * @returns {JSX.Element} A TextField component that serves as a search input for documents,
 * complete with a search icon as an adornment.
 * 
 * @example
 * const handleSearch = (query) => {
 *     console.log("Searching for:", query);
 * };
 * 
 * <SearchBar onSearch={handleSearch} />
 */
function SearchBar({ onSearch }) {
    return (
        <TextField
            variant="outlined"
            placeholder="Search documents..."
            fullWidth
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            onChange={(e) => onSearch(e.target.value)}
        />
    );
}

export default SearchBar;
