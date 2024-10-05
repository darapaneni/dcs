import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import DcsConfirmationDialog from '../confirmation-dialog/DcsConfirmationDialog';
import useAuthStore from '../../store/authStore';
import Cookies from 'js-cookie';

const Header = ({title = "Documents Consultancy Services"}) => {
    const location = useLocation();
    console.log(location);
    const settings = ['Dashboard', 'Profile', 'Change Password', 'Logout'];
    const navigate = useNavigate();
    const {isAuthenticated, logout} = useAuthStore();
    const [dialogOpen, setDialogOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const storedUser = Cookies.get('user');
    const initialUser = storedUser ? JSON.parse(storedUser) : null;

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (event) => {
        let logout = event.currentTarget.innerText;
        setAnchorElUser(null);
        if (logout === 'Dashboard') {
            setDialogOpen(false);
            navigate('/user/welcome')
        }
        if (logout === 'Logout') {
            setDialogOpen(true);
        }
        if (logout === 'Change Password') {
            setDialogOpen(false);
            navigate('/user/change-password')
        }
        if (logout === "Profile") {
            setDialogOpen(false);
            navigate('/user/profile')
        }
    };
    const handleLogInClick = (event) => {
        event.preventDefault();

        navigate('/');
    };
    const handleSignupClick = (event) => {
        event.preventDefault();
        navigate('/signup');
    };
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    const handleConfirm = () => {
        handleCloseDialog();
        logout();
        navigate('/');
    };

    return (
        <AppBar position="sticky" size="small">
            <Toolbar style={{
                minHeight: '42px',
                flexDirection: 'row',
                paddingRight: '8px'
            }}>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    {title}
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    {!isAuthenticated ? (
                        <div>
                            {location.pathname === "/" ?
                                (<Button size="small" color="inherit" onClick={handleSignupClick}>Sign up</Button>)
                                :
                                (<Button size="small" color="inherit" onClick={handleLogInClick}>Sign in</Button>)
                            }
                        </div>
                    ) : (
                        <Box sx={{display: 'flex', flexDirection: 'row', gap: 1}}>
                            <div>
                                <Typography variant="caption" sx={{
                                    paddingRight: '4px'
                                }}>
                                    Welcome, {initialUser?.email}
                                </Typography>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt={initialUser?.names} src="2.jpg"/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '28px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography sx={{textAlign: 'center'}}>{setting}</Typography>
                                            <Divider></Divider>
                                        </MenuItem>

                                    ))}
                                </Menu>
                            </div>
                        </Box>
                    )
                    }
                </Box>
            </Toolbar>
            <DcsConfirmationDialog
                open={dialogOpen}
                onClose={handleCloseDialog}
                onConfirm={handleConfirm}
            />
        </AppBar>
    );
};
Header.propTypes = {
    title: PropTypes.string,
};
export default Header;