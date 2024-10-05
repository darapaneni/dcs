import React, {useState, useEffect} from 'react';
import {Card, CardContent, Avatar, TextField, Button, Box, Typography,Tooltip} from '@mui/material';
import {styled} from '@mui/system';
import axios from 'axios';
import Cookies from "js-cookie";
const storedUser = Cookies.get( 'user' );
const initialUser = storedUser ? JSON.parse( storedUser ) : null;

const StyledCard = styled(Card)({
    margin: 'auto',
    padding: '10px',
    borderRadius: '10px',
    minWidth:600
});

const StyledAvatar = styled(Avatar)({
    width: 24,
    height: 24,
    margin: 'auto',
    marginBottom: '6px',
});

// User Profile Component
const UserProfile = () => {
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phoneno: '',
        address: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        // Fetch user data from API when component mounts
        const email= initialUser?.email;
        axios.get(`http://127.0.0.1:8000/api/v1/auth/api/users/${email}/`)
            .then(response => {
                setUser(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setError('Failed to load user data.');
            });
    }, []);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    };

    // const handleProfilePictureChange = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //
    //     reader.onloadend = () => {
    //         setUser({...user, profilePicture: reader.result});
    //     };
    //
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);

        // Simulate API call to update profile
        axios.put('https://api.example.com/user/profile', user)
            .then(response => {
                console.log(response)
                setIsLoading(false);
                setSuccessMessage('Profile updated successfully!');
            })
            .catch(error => {
                setIsLoading(false);
                console.error('Error updating profile:', error);
                setError('Failed to update profile.');
            });
    };

    return (
         <Box sx={{display: 'flex',  paddingTop: 1}}>
            <StyledCard elevation={3}>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'left',
                            justifyContent: 'space-between'
                        }}>

                        <Typography variant="h6" color="textPrimary" textAlign="left">
                            Edit Profile
                        </Typography>
                        <Tooltip title="Change Profile Picture">
                            <Typography variant="h6" color="textPrimary" textAlign="right">
                                <StyledAvatar alt={user.name} src={user.profilePicture}/>
                            </Typography>
                        </Tooltip>
                        {/*<Button variant="outlined" component="label" size={"small"} sx={{marginBottom: 1,size:'small'}}>*/}
                        {/*    Upload Profile Picture*/}
                        {/*    <input type="file" hidden onChange={handleProfilePictureChange}/>*/}
                        {/*</Button>*/}
                    </Box>
                    <form onSubmit={handleSubmit} noValidate>
                        {/* Profile Picture */}

                        <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)'}}>
                            {/* Form Fields */}
                            <TextField
                                label="First Name"
                                variant="outlined"
                                margin="normal"
                                size='small'
                                fullWidth
                                name="first_name"
                                value={user.first_name}
                                onChange={handleChange}
                                required
                            />
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                size='small'
                                name="name"
                                value={user.last_name}
                                onChange={handleChange}
                                required
                            />
                        </Box>
                        <TextField
                            label="Email"
                            variant="outlined"
                            name="email"
                            margin="normal"
                            size='small'
                            fullWidth
                            value={user.email}
                            onChange={handleChange}
                            required
                            type="email"
                        />
                        <TextField
                            label="Address"
                            variant="outlined"
                            name="address"
                            margin="normal"
                            size='small'
                            fullWidth
                            value={user.address}
                            onChange={handleChange}
                            required
                            type="email"
                        />
                        <Box sx={{display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)'}}>

                            <TextField
                                label="Mobile No"
                                variant="outlined"
                                name="mobileno"
                                margin="normal"
                                size='small'
                                value={user.phoneno}
                                onChange={handleChange}
                                required
                                type="email"
                            />
                            <TextField
                                label="Gender"
                                variant="outlined"
                                name="mobileno"
                                margin="normal"
                                size='small'
                                value={user.gender}
                                onChange={handleChange}
                                required
                                type="email"
                            />
                            <TextField
                                label="City"
                                variant="outlined"
                                name="city"
                                margin="normal"
                                size='small'
                                value={user.city}
                                onChange={handleChange}
                                required
                                type="email"
                            />
                            <TextField
                                label="Country"
                                variant="outlined"
                                name="country"
                                margin="normal"
                                size='small'
                                value={user.country}
                                onChange={handleChange}
                                required
                                type="email"
                            />
                            <TextField
                                label="Pin Code"
                                variant="outlined"
                                name="pincode"
                                margin="normal"
                                size='small'
                                value={user.pincode}
                                onChange={handleChange}
                                required
                                type="email"
                            />
                            <Box sx={{ alignContent: 'center' }}  offset={{ md: 'auto' }}>
                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                size="small"
                                disabled={isLoading} >
                                {isLoading ? 'Saving...' : 'Update Profile'}
                            </Button>
                            </Box>
                        </Box>



                        {/* Error Message */}
                        {error && (
                            <Typography color="error" variant="body2" sx={{marginTop: 2}}>
                                {error}
                            </Typography>
                        )}

                        {/* Success Message */}
                        {successMessage && (
                            <Typography color="primary" variant="body2" sx={{marginTop: 2}}>
                                {successMessage}
                            </Typography>
                        )}

                    </form>
                </CardContent>
            </StyledCard>
        </Box>
    );
};

export default UserProfile;
