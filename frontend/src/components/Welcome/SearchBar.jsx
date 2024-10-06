import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
