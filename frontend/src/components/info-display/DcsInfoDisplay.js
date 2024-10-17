import React from 'react';
import { Container, Snackbar, Alert, Fade } from '@mui/material';
import { PropTypes } from "prop-types";

/**
 * DcsInformationDisplay component is used to display temporary notifications
 * or alerts to the user. It utilizes Material-UI's Snackbar and Alert components
 * to present information with various severity levels (info, warning, error, etc.).
 *
 * This component is customizable with props for message content, position,
 * severity, and duration for auto-hiding.
 *
 * @component
 *
 * @param {Object} props - The component props
 * @param {string} [props.message='Information not available.'] - The message
 * to display in the alert.
 * @param {string} [props.vertical='top'] - The vertical position of the Snackbar.
 * @param {string} [props.horizontal='center'] - The horizontal position of the Snackbar.
 * @param {string} [props.severity='info'] - The severity level of the alert (e.g., 'error', 'warning', 'info', 'success').
 * @param {number} [props.duration=1000] - The duration (in milliseconds) for which
 * the Snackbar is displayed before automatically hiding.
 *
 * @returns {JSX.Element} The rendered DcsInformationDisplay component.
 *
 * @example
 * // Usage example
 * <DcsInformationDisplay 
 *   message="Data saved successfully!"
 *   severity="success"
 *   duration={3000}
 * />
 */
const DcsInformationDisplay = ( {
  message = 'Information not available.',
  vertical = 'top',
  horizontal = 'center',
  severity = 'info',
  duration = 1000
} ) =>
{
  const [ state, setOpen ] = React.useState( {
    open: true,
    Transition: Fade,
  } );
  const handleClose = () =>
  {
    setOpen( false );
  };
  return (
    <Container>
      <Snackbar
        open={ state.open }
        anchorOrigin={ { vertical, horizontal } }
        autoHideDuration={ duration }
        TransitionComponent={ state.Transition }
        onClose={ handleClose } >
        <Alert
          onClose={ handleClose }
          severity={ severity }
          variant="filled"
          sx={ { width: '100%' } }
        >
          { message }
        </Alert>
      </Snackbar>
    </Container>
  );
};

DcsInformationDisplay.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string,
  vertical: PropTypes.string,
  horizontal: PropTypes.string,
  severity: PropTypes.string,
  duration: PropTypes.number,
};
// DcsInformationDisplay.defaultProps = {
//   vertical: 'top',
//   horizontal: 'center',
//   messageColor: 'secondary' || 'primary',
//   severity: 'info'
// };
export default DcsInformationDisplay;