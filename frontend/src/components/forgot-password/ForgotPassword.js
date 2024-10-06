import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify'
import DcsAxiosInstance from '../../api/dcs_axios'
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

function ForgotPassword({open, handleClose}) {
    const [email, setEmail] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (email) {
            const res = await DcsAxiosInstance.post('auth/password-reset/', {'email': email})
            if (res.status === 200) {
                console.log(res.data)
                toast.success('a link to reset your password has be sent to your email')

            }
            setEmail("")
        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        handleClose();
                    },
                }}
            >
                <DialogTitle sx={{m: 0}}>Reset password </DialogTitle>
                <DialogContent
                    sx={{display: 'flex', flexDirection: 'column', gap: 2,}}
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
                        placeholder="Email Address"
                        type="email"
                        size='small'
                        autoFocus={true}
                        required
                        fullWidth
                    />
                </DialogContent>
                <DialogActions sx={{pb: 3, px: 3}}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" type="submit">
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </form>
    );
}

ForgotPassword.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
