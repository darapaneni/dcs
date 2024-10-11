import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Button } from "@mui/material";

function DcsFallbackError({ error, resetErrorBoundary }) {
  return (
    <Container>
      <Typography variant="h4" color="error">
        Oops! Something went wrong.
      </Typography>
      {
        Array.isArray(error) ? (
          error.map((err, index) => (
            <p key={index}>{<Typography variant="body1">{err}</Typography>}</p>
          ))
        ) : (
          <Typography variant="body1">{error?.message}</Typography>
        ) /* Handle object error */
      }

      <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
        Try Again
      </Button>
    </Container>
  );
}

DcsFallbackError.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.array, // Accept array of errors
    PropTypes.object, // Accept error as an object
  ]).isRequired,
  resetErrorBoundary: PropTypes.func,
};
export default DcsFallbackError;
