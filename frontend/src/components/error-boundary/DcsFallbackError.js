import React from "react";
import PropTypes from "prop-types";
import { Container, Typography, Button } from "@mui/material";
/**
 * DcsFallbackError component displays an error message when an error boundary catches an error.
 * It provides the user with information about the error and a button to try again.
 *
 * @component
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array|Object} props.error - The error information. Can be an array of error messages or an object containing a message.
 * @param {Function} [props.resetErrorBoundary] - A function to reset the error boundary. This is called when the user clicks the "Try Again" button.
 *
 * @returns {JSX.Element} The rendered error fallback UI with error details and a retry button.
 *
 * @example
 * // Usage example with an error message
 * <DcsFallbackError error={{ message: "Network error" }} resetErrorBoundary={handleReset} />
 *
 * // Usage example with an array of errors
 * <DcsFallbackError error={["Error 1", "Error 2"]} resetErrorBoundary={handleReset} />
 */

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
