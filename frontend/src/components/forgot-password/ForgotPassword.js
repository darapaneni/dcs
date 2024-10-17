import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {z} from 'zod';
import DcsAxiosInstance from '../../api/dcs_axios'
import
{
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogContent,
    DialogActions, Typography,
} from '@mui/material';
import MESSAGES from "../../constants/config";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import DcsMicroLoader from "../loader/DcsMicroLoader";

const schema = z.object({
    email: z.string().min(1, MESSAGES.SIGNUP_ERROR_MESSAGES.email).email(MESSAGES.SIGNUP_ERROR_MESSAGES.emailInvalid)
});

/**
 * ForgotPassword component provides a dialog for users to request a password reset link via email.
 *
 * @component
 *
 * @param {Object} props - The props for the component.
 * @param {string} props.email - The initial email address to populate the input field (default is an empty string).
 * @param {boolean} props.open - Indicates whether the dialog is open.
 * @param {function} props.handleClose - Function to close the dialog.
 * @param {boolean} props.isDisable - Indicates whether the input field should be disabled (default is false).
 *
 * @returns {JSX.Element} The rendered ForgotPassword dialog.
 *
 * @example
 * // Usage example
 * <ForgotPassword 
 *     email="user@example.com" 
 *     open={true} 
 *     handleClose={() => console.log('Closed')} 
 *     isDisable={false} 
 * />
 */
function ForgotPassword({
                            email="",
                            open,
                            handleClose,
                            isDisable=false}) {

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        setValue,
        clearErrors,
        formState: {errors,
            isSubmitting}} = useForm({
        resolver: zodResolver(schema)
    });
    useEffect(() => {
        if (open) {
            reset();       // Reset form fields
            setValue("email",email)
            clearErrors(); // Clear validation errors
            setEmailSent("")
        }
    },[email,open, reset, clearErrors,setValue])

    const [emailSent, setEmailSent] = useState("")
const onSubmit = async ( ) => {
    setEmailSent("")
    const formData = getValues();
    if (formData.email) {
        const res = await DcsAxiosInstance.post('auth/password-reset/', {'email': formData.email})
        if (res.status === 200) {
            console.log(res.data)
            setEmailSent(res.data.message)
        }
        console.log(res)
        // setEmailSent("")
    }
}

return (
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
                {...register("email")}
                error={!!errors.email}
                disabled={isDisable}
                helperText={errors.email ? errors.email.message : ''}
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
            {emailSent ? (
            <Typography variant="caption" color={'primary'} fontSize={'bold'}>
                {emailSent}
            </Typography>
                ):(
                    ''
            )}
        </DialogContent>
        <DialogActions sx={{pb: 3, px: 3}}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
                {isSubmitting ? (
                    <span>
                      <DcsMicroLoader
                          size={14}
                          showLabel={false}
                          color={'white'}
                          message={'Wait...'}
                      />
                    </span> ) : (
                    'Continue'
                )}
            </Button>
        </DialogActions>
    </Dialog>
);
}

ForgotPassword.propTypes = {
    email:PropTypes.string,
    isDisable:PropTypes.bool,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
