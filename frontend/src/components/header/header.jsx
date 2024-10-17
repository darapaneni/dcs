import React, {useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    AppBar,
    Avatar,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';
import DcsConfirmationDialog from '../confirmation-dialog/DcsConfirmationDialog';
import useAuthStore from '../../store/authStore';
import Cookies from 'js-cookie';

/**
 * Header component for the application, providing navigation and user authentication features.
 * It displays the application title, user options, and handles user interactions such as login,
 * signup, and logout.
 *
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} [props.title="Documents Consultancy Services"] - The title displayed in the header.
 *
 * @returns {JSX.Element} The rendered Header component.
 *
 * @example
 * // Usage example
 * <Header title="My Application Title" />
 */

const Header = ({title = "Documents Consultancy Services"}) => {
    const location = useLocation();  // Hook to access the current location
    // const settings = ['Dashboard', 'Profile', 'Change Password', 'Logout'];
    const navigate = useNavigate();  // Hook to programmatically navigate to different routes
    const {isAuthenticated, logout} = useAuthStore();  // Access user authentication state and logout function
    const [dialogOpen, setDialogOpen] = useState(false);  // State to manage the confirmation dialog
    const [anchorElUser, setAnchorElUser] = React.useState(null);  // State for managing user menu anchor element
    const storedUser = Cookies.get('user');  // Retrieve the stored user data from cookies
    const initialUser = storedUser ? JSON.parse(storedUser) : null;  // Parse user data or set to null

/**
 * Handles opening the user menu by setting the anchor element.
 *
 * @param {React.MouseEvent} event - The mouse event triggering the menu opening.
 */
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

/**
 * Handles closing the user menu and navigating to the selected option.
 *
 * @param {React.MouseEvent} event - The mouse event triggering the menu item selection.
 */    
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

/**
 * Handles the login button click by navigating to the home page.
 *
 * @param {React.MouseEvent} event - The mouse event triggering the login action.
 */
    const handleLogInClick = (event) => {
        event.preventDefault();

        navigate('/');
    };
/**
 * Handles the signup button click by navigating to the signup page.
 *
 * @param {React.MouseEvent} event - The mouse event triggering the signup action.
 */
    const handleSignupClick = (event) => {
        event.preventDefault();
        navigate('/signup');
    };
/**
 * Closes the confirmation dialog.
 */
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
/**
 * Handles the confirmation of logout action.
 * It closes the dialog, calls the logout function, and navigates to the home page.
 */
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

                <Typography variant="h6" component="div" sx={{flexGrow: 1,flexDirection:'row'}}>
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
                                        <Avatar
                                            alt={initialUser?.names}
                                            src="../2.jpg"
                                            sx={{
                                                width: {
                                                    xs: 8,  // small size on extra-small screens
                                                    sm: 16,  // medium size on small screens
                                                    md: 24,  // large size on medium screens
                                                    lg: 32, // larger size on large screens
                                                },
                                                height: {
                                                    xs: 8,
                                                    sm: 16,
                                                    md: 24,
                                                    lg: 32,
                                                }
                                            }}
                                        />
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
                                    <MenuItem  onClick={handleCloseUserMenu}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <DashboardIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Icon with margin */}
                                            <Typography variant="body2">
                                                Dashboard
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem  onClick={handleCloseUserMenu}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <AccountCircleIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Icon with margin */}
                                            <Typography variant="body2">
                                                Profile
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem  onClick={handleCloseUserMenu}>

                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <VpnKeyIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Icon with margin */}
                                            <Typography variant="body2">
                                                Change Password
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem  onClick={handleCloseUserMenu}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <LogoutIcon sx={{ fontSize: 18, marginRight: 1 }} /> {/* Icon with margin */}
                                            <Typography variant="body2">
                                                Logout
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                    {/*{settings.map((setting) => (*/}
                                    {/*   */}

                                    {/*))}*/}
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