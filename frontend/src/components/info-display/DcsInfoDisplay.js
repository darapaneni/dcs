import React from 'react';
import { Container, Snackbar, Alert, Fade } from '@mui/material';
import { PropTypes } from "prop-types";
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