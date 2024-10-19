/**
 * @file ChangePassword.js
 * @description This file defines the `ChangePassword` component, which allows users to change their passwords. It includes fields for the current password, the new password, and a confirmation of the new password. The component utilizes form validation with Zod and manages user authentication through API requests.
 */

import React from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Card,
  Box,
  CardContent,
  CardHeader, Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { styled } from "@mui/system";
import MESSAGES from "../../constants/config";
import {useParams,useNavigate} from "react-router-dom";
import DcsAxiosInstance from "../../api/dcs_axios";
import ForgotPassword from "../forgot-password/ForgotPassword";
import Cookies from "js-cookie";

const StyledCard = styled(Card)({
  margin: "auto",
  padding: "4px",
  borderRadius: "10px",
  minWidth: 300,
});
// Define your validation schema using Zod
const schema = z.object({
  currentPassword: z.string().min(1, MESSAGES.SIGNUP_ERROR_MESSAGES.password),
  newPassword: z.string().min(6, MESSAGES.SIGNUP_ERROR_MESSAGES.newPassword),
  confirm_password: z
    .string()
    .min(6, MESSAGES.SIGNUP_ERROR_MESSAGES.confirmPassword)

}).superRefine((data, ctx) => {

    if (data.confirm_password !== data.password) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "The passwords did not match",
            path: ['confirm_password']
        });
    }
});

/**
 * ChangePassword Component
 * @component
 * @description The `ChangePassword` component allows users to change their password. It contains fields for the current password, a new password, and confirmation of the new password. The component validates the input using Zod and submits the data to the backend via an API request.
 * 
 * @returns {JSX.Element} A form with input fields for changing the user's password, including validation and a button to submit the change.
 * 
 * @example
 * // Example usage:
 * import ChangePassword from './ChangePassword';
 * 
 * function App() {
 *     return (
 *         <div>
 *             <ChangePassword />
 *         </div>
 *     );
 * }
 * 
 * // Output:
 * // A form that allows users to change their password.
 */
const ChangePassword = () => {
  const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
  const [open, setOpen] = React.useState(false);
  const navigate=useNavigate()
  const {uid, token}=useParams()
  const {
    register,
      getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  /**
   * onSubmit function
   * @function
   * @description Handles the submission of the form. It retrieves the form values, constructs the data object, and sends a PATCH request to update the password. If successful, it navigates the user to the home page.
   * @param {Object} e - The event object from the form submission.
   */
  const onSubmit = async (e) => {
    e.preventDefault()
    // Handle password change logic here
    const values = getValues();
    const data={
      "password":values.newPassword,
      "confirm_password":values.confirm_password,
      "uidb64":uid,
      "token": token,
    }
    const res = await DcsAxiosInstance.patch('auth/set-new-password/', data)
    const response = res.data
    if (res.status === 200) {
      navigate('/')
      // toast.success(response.message)
    }
    console.log(response)
    console.log("Password changed:");
  };
  const handleClickOpen = () => {

    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container maxWidth="xs">
      <StyledCard elevation={3}>
        <CardHeader
          sx={{ padding: "6px" }}
          title={
            <Typography variant="h6" color="textPrimary" textAlign="left">
              Change Password
            </Typography>
          }
        ></CardHeader>
        <CardContent sx={{ paddingTop: "4px" }} elevation={3}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              fullWidth
              margin="normal"
              size="small"
              label="Current Password"
              type="password"
              variant="outlined"
              {...register("currentPassword")}
              error={!!errors.currentPassword}
              helperText={errors.currentPassword?.message}
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="New Password"
              type="password"
              variant="outlined"
              {...register("newPassword")}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
            />
            <TextField
              fullWidth
              size="small"
              margin="normal"
              label="Confirm New Password"
              type="password"
              variant="outlined"
              {...register("confirm_password")}
              error={!!errors.confirm_password}
              helperText={errors.confirm_password?.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
            >
              Change Password
            </Button>
            <Box display="flex" justifyContent="flex-end" marginTop="10px">
              <Link
                  href="javascript:void(0)"
                  onClick={handleClickOpen}
                  variant="caption"
                  underline="none"> Forgot password? </Link>
            </Box>
          </Box>
          <ForgotPassword
              email={user.email}
              isDisable={true}
              open={open}
              handleClose={handleClose}> Forgot Password? </ForgotPassword>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default ChangePassword;
