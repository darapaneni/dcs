import * as React from 'react';
import PropTypes from 'prop-types';
import
{
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
} from '@mui/material';
function ForgotPassword ( { open, handleClose } )
{
  return (
    <Dialog
      open={ open }
      onClose={ handleClose }
      PaperProps={ {
        component: 'form',
        onSubmit: ( event ) =>
        {
          event.preventDefault();
          handleClose();
        },
      } }
    >
      <DialogTitle sx={ { m: 0, p: 2 } }>Reset password </DialogTitle>
      <DialogContent
        sx={ { display: 'flex', flexDirection: 'column', gap: 2, width: '100%' } }
      >
        <DialogContentText>
          Enter your account&apos;s email address, and we&apos;ll send you a link to
          reset your password.
        </DialogContentText>
        <TextField
          id="email"
          name="email"
          autoComplete='off'
          margin="normal"
          label="Email address"
          placeholder="Email address"
          type="email"
          size='small'
          autoFocus={ true }
          required
          fullWidth
        />
      </DialogContent>
      <DialogActions sx={ { pb: 3, px: 3 } }>
        <Button onClick={ handleClose }>Cancel</Button>
        <Button variant="contained" type="submit">
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
