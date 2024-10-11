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
