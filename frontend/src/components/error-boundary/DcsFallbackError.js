import React from 'react';
import PropTypes from 'prop-types';
import {Container, Typography, Button} from '@mui/material';

function DcsFallbackError({error, resetErrorBoundary}) {
    return (
        <Container>
            <Typography variant="h4" color="error">Oops! Something went wrong.</Typography>
            <Typography variant="body1">{error?.message}</Typography>
            <Button variant="contained" color="primary" onClick={resetErrorBoundary}>Try Again</Button>
        </Container>
    );
}

DcsFallbackError.propTypes = {
    error: PropTypes.array.isRequired,
    resetErrorBoundary: PropTypes.func,
};
export default DcsFallbackError;
