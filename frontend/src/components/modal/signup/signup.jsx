import React, {useEffect,useCallback} from 'react';
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import {Button, Link, Box, Typography, TextField, Container} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import axios from 'axios';
import './signup.css'; // Import CSS for styling
import DcsCustomLink from '../../link/DcsCustomLink';
import DcsMicroLoader from "../../loader/DcsMicroLoader";
import {useNavigate, useSearchParams} from "react-router-dom";
import DcsAxiosInstance from "../../../api/dcs_axios";
// Constants
const GITHUB_CLIENT_ID = "env.REACT_APP_GITHUB_CLIENT_ID;"//TODO: It should come from env file
// const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID; //TODO :

axios.defaults.withCredentials = true
const signupSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    first_name: z.string().min(1, 'First name is required'),
    last_name: z.string().min(1, 'Last name is required'),
    password: z.string().min(6, {message: "Must be 6 or more characters long"}),
    confirm_password: z.string()
}).superRefine(({confirm_password, password}, ctx) => {
    if (confirm_password !== password) {
        ctx.addIssue({
            code: "custom",
            message: "The passwords did not match",
            path: ['confirm_password']
        });
    }
});


const Signup = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const {
        register,
        // getValues,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        }
    } = useForm({
        resolver: zodResolver(signupSchema)
    });
    const handleServerResponse =useCallback( (resp) => {
        if (resp.status === 200) {
            const user = {
                'email': resp.data.email,
                'names': resp.data.full_name
            };
            localStorage.setItem('token', JSON.stringify(resp.data.access_token));
            localStorage.setItem('refresh_token', JSON.stringify(resp.data.refresh_token));
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/dashboard');
            toast.success('Login successful');
        }
    },[navigate]);

    const handleServerError =useCallback( (error) => {
        if (error.response) {
            console.log(error.response.data);
            toast.error(error.response.data.detail);
        }
    },[]);

    const handleGithubLogin = () => {
        window.location.assign(`https://github.com/login/oauth/authorize/?client_id=${GITHUB_CLIENT_ID}`);
    };
    const sendGithubCodeToServer = useCallback(async () => {
        const urlParam = searchParams.get('code');
        if (urlParam) {
            try {
                const resp = await DcsAxiosInstance.post('auth/github/', { 'code': urlParam });
                handleServerResponse(resp);
            } catch (error) {
                handleServerError(error);
            }
        }
    },[searchParams,handleServerResponse,handleServerError]);
    useEffect(() => {
        const code = searchParams.get('code');
        if (code) {
            sendGithubCodeToServer();
        }
    }, [searchParams,sendGithubCodeToServer]);

    const onSubmit = async (data) => {

        const dataToSend = {
            "username": data.email,
            "email": data.email,
            "first_name": data.first_name,
            "last_name": data.last_name,
            "password": data.password,
            "password2": data.confirm_password
        }
        try {
            const res = await axios.post('http://127.0.0.1:8000/api/v1/auth/register/', dataToSend);
            console.log(res);
            const status = res.status;
            if (status === 201) {
                // navigate('/mail-confirmation',{ state: { success_message: res.message }});
                navigate("/otp/verify")
                toast.success(res.message)
            } else {
                navigate('/mail-error', {state: {message: res.message}});
            }
        } catch (err) {
            console.log(err)
            navigate('/mail-error', {state: {message: err.message}});
        }
    }

    return (
        <Container component="main" maxWidth="xs" sx={{marginTop: 1}}>
            <Card elevation={3}>
                <Box
                    sx={{
                        marginTop: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{mb: 0, bgcolor: 'primary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography variant="h6" color="textPrimary" textAlign="center">
                        {/*Sign in {branding?.title ? `to ${branding.title}` : null}*/}
                        Sign up
                    </Typography>
                    <Typography variant="body2" color="textSecondary" textAlign="center">
                        Welcome user, please sign up to continue
                    </Typography>

                </Box>
                <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gridTemplateRows: 'repeat(5)',
                            gap: 1.5,
                            marginBottom: 1
                        }}>
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '36px', // Control the height of the input
                                        '& input': {
                                            padding: '0px 0px 0px 6x',
                                            fontSize: '14px'
                                        },
                                        '& fieldset': {
                                            borderRadius: '6px'
                                        },
                                    },
                                }}
                                {...register("first_name")}
                                error={!!errors.first_name}
                                helperText={errors.first_name ? errors.first_name.message : ''}
                                size="small"
                                required
                                fullWidth
                                id="first_name"
                                label="First Name"
                                name="first_name"
                                autoComplete="off"
                            />
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '36px',
                                        '& input': {
                                            padding: '0px 0px 0px 6x',
                                            fontSize: '14px'
                                        },
                                        '& fieldset': {
                                            borderRadius: '6px'
                                        },
                                    },
                                }}
                                {...register("last_name")}
                                error={!!errors.last_name}
                                helperText={errors.last_name ? errors.last_name.message : ''}
                                size='small'
                                fullWidth
                                required
                                id="last_name"
                                label="Last Name"
                                name="last_name"
                                autoComplete="off"
                            />
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '36px',
                                        '& input': {
                                            padding: '0px 0px 0px 6x',
                                            fontSize: '14px'
                                        },
                                        '& fieldset': {
                                            borderRadius: '6px'
                                        },
                                    },
                                }}
                                {...register("email")}
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                                size='small'
                                fullWidth
                                required
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="off"
                            />
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '36px',
                                        '& input': {
                                            padding: '0px 0px 0px 6x',
                                            fontSize: '14px'
                                        },
                                        '& fieldset': {
                                            borderRadius: '6px'
                                        },
                                    },
                                }}
                                {...register("password")}
                                error={!!errors.password}
                                type="password"
                                helperText={errors.password ? errors.password.message : ''}
                                size='small'
                                fullWidth
                                required
                                id="password"
                                label="Password"
                                name="password"
                                autoComplete="off"
                            />
                            <TextField
                                sx={{
                                    '& .MuiInputBase-root': {
                                        height: '36px',
                                        '& input': {
                                            padding: '0px 0px 0px 6x',
                                            fontSize: '14px'
                                        },
                                        '& fieldset': {
                                            borderRadius: '6px'
                                        },
                                    },
                                }}
                                {...register("confirm_password")}
                                error={!!errors.confirm_password}
                                helperText={errors.confirm_password ? errors.confirm_password.message : ''}
                                size='small'
                                type="password"
                                fullWidth
                                required
                                id="confirm_password"
                                label="Confirm Password"
                                name="confirm_password"
                                autoComplete="off"
                            />
                        </Box>
                        <Button type="submit" variant="contained" fullWidth size="small">
                            {isSubmitting ? (
                                <span>
                                     <DcsMicroLoader size={16} showLabel={false} color={'white'}/>
                                    </span>
                            ) : (
                                'Sign up'
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
                                onClick={handleGithubLogin}
                            >
                                GitHub
                            </Button>
                        </Box>
                        <Box sx={{paddingTop: 1}} className="app__link">Already registered?&nbsp;&nbsp;
                            <DcsCustomLink
                                linkText={"Sign In"}
                                targetPath={"/"}
                                color={'#1976d2'}
                                key={"login"}
                                variant={"body3"}
                            />
                            <Typography variant="caption" gutterBottom>
                                By Signing Up, you agree to our
                                <Link href="/terms-conditions" className="app__link">Terms & Condition | </Link>
                                <Link href="/privacy-policy" className="app__link"> Privacy Policy</Link>
                            </Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Container>
    );
};


export default Signup;