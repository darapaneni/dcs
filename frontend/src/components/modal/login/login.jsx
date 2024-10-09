import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import useAuthStore from '../../../store/authStore';
import {useNavigate} from 'react-router-dom';
import DcsMicroLoader from './../../loader/DcsMicroLoader';
import {
    TextField,
    Button,
    Link,
    Divider,
    Box,
    Typography,
    Container} from '@mui/material';
import ForgotPassword from '../../forgot-password/ForgotPassword';
import DcsCustomLink from '../../link/DcsCustomLink';
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import {DCSLogo} from "../../logo/DCSLogo";
import CardContent from "@mui/material/CardContent";
import MESSAGES from "../../../constants/config";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";

// const Login = ({onClose}) => {
const schema = z.object({
    email: z.string().min(1, MESSAGES.SIGNUP_ERROR_MESSAGES.email).email(MESSAGES.SIGNUP_ERROR_MESSAGES.emailInvalid),
    password: z.string().min(6, {message: "Must be 6 or more characters long"})
});

const Login = () => {
    // Constants
    // const GITHUB_CLIENT_ID = process.env.REACT_APP_GITHUB_CLIENT_ID;
    // const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const {login} = useAuthStore();
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const {register, getValues, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(schema)
    });
    const onSubmit = async () => {
        setError('');
        try {
            const formData = getValues();
            await login(formData.email, formData.password);
            navigate("/user/welcome");
        } catch (error) {
            console.log(error)
            setError('Invalid credentials. Please try again.');
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    return (
        <>
            <Container component="main" maxWidth="xs" sx={{marginTop: 1}}>
                <Card elevation={8}>
                    <Box
                        sx={{
                            marginTop: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Avatar>
                            <DCSLogo sx={{
                                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                            }}/>
                        </Avatar>
                        <Typography variant="h6" color="textPrimary" fontWeight={"bold"} textAlign="center">
                            {/*Sign in {branding?.title ? `to ${branding.title}` : null}*/}
                            Sign In
                        </Typography>

                        {error && <Typography color="error" variant="caption" fontWeight="bold">{error}</Typography>}
                    </Box>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <TextField
                            {...register("email")}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email.message : ''}
                            margin="normal"
                            size='small'
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="off"
                        />
                            {errors.name && <p>{errors.name.message}</p>}
                            <TextField
                                {...register('password')}
                                error={!!errors.password}
                                helperText={errors.password ? errors.password.message : ''}
                                margin="normal"
                                size='small'
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="off"
                            />
                            <Divider></Divider>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={isSubmitting}
                                size="small">
                                {isSubmitting ? (
                                    <span>
                                      <DcsMicroLoader size={16} showLabel={false} color={'primary'}/>
                                    </span>
                                ) : (
                                    'Sign in'
                                )}
                            </Button>
                            <Divider className="text-sm"
                                     sx={{
                                         opacity: 0.8,
                                         fontSize: 12,
                                         paddingTop: 0.8,
                                         paddingBottom: 0.8
                                     }}>OR</Divider>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(2, 1fr)',
                                gap: 1
                            }}>
                                <Button variant="contained" startIcon={<GoogleIcon/>} size="small">
                                    Google
                                </Button>
                                <Button
                                    variant="contained"
                                    startIcon={<GitHubIcon/>}
                                    size="small"
                                >
                                    GitHub
                                </Button>
                            </Box>
                            <Box sx={{paddingTop: 2}} className="app__link">
                                <Typography variant="caption" gutterBottom>
                                    Not registered with us yet?&nbsp;
                                    <DcsCustomLink
                                        linkText={"Sign Up"}
                                        targetPath={'signup'}
                                        color={"#1976d2"}
                                        variant={"body3"}
                                        key={"signup"}
                                    />
                                    |
                                    <Link
                                        sx={{
                                            marginLeft: 1,
                                            alignSelf: 'baseline',
                                            '&:hover': {backgroundColor: 'lightgray',}
                                        }}
                                        href="#"
                                        onClick={handleClickOpen}
                                        variant="body3"
                                        underline="none"> Forgot password? </Link>
                                </Typography>
                            </Box>
                            <ForgotPassword
                                open={open}
                                handleClose={handleClose}> Forgot Password? </ForgotPassword>
                        </form>
                    </CardContent>
                </Card>
            </Container>
            {/*<div className="auth-container">*/}
            {/*    <div className="login-box">*/}
            {/*        <h2>Sign In</h2>*/}
            {/*        {error && <Typography color="error">{error}</Typography>}*/}
            {/*        <form onSubmit={handleSubmit(onSubmit)} noValidate>*/}
            {/*           */}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default Login;