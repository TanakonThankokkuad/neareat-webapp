import { AppBar, Avatar, Badge, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from "@mui/material"
import { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from '../../logo.png';

const Navbar = () =>{
    const [anchorElNotifications, setAnchorElNotifications] = useState(null);
    const [anchorElProfile, setAnchorElProfile] = useState(null);
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const handleOpenNotificationsMenu = (event) => {
        setAnchorElNotifications(event.currentTarget);
    };

    const handleCloseNotificationsMenu = () => {
        setAnchorElNotifications(null);
    };

    const handleOpenProfileMenu = (event) => {
        setAnchorElProfile(event.currentTarget);
    };

    const handleCloseProfileMenu = () => {
        setAnchorElProfile(null);
    };

    return(
        <AppBar position="static" sx={{ backgroundColor: '#134b8a', boxShadow: 'none' }}>
            <Toolbar sx={{ justifyContent: isMobile ? 'space-between': 'flex-end' }}>
                {isMobile && (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                    >
                        <img src={logo} alt="Logo" style={{ height: 40, borderRadius: 7 }} />
                    </IconButton>
                )}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {!isMobile && (
                        <>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={handleOpenNotificationsMenu}
                            >
                                <Badge color="error" variant="dot" overlap="circular">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            <Menu
                                anchorEl={anchorElNotifications}
                                open={Boolean(anchorElNotifications)}
                                onClose={handleCloseNotificationsMenu}
                            >
                                <MenuItem onClick={handleCloseNotificationsMenu}>Notification 1</MenuItem>
                                <MenuItem onClick={handleCloseNotificationsMenu}>Notification 2</MenuItem>
                                <MenuItem onClick={handleCloseNotificationsMenu}>Notification 3</MenuItem>
                            </Menu>
                        </>
                    )}
                </div>

                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    onClick={handleOpenProfileMenu}
                    sx={{ ml: '1px' }}
                >
                    <Avatar alt="Profile Picture" src="/static/images/avatar/1.jpg" />
                    {!isMobile && (
                        <>
                            <Typography variant="body1" sx={{ ml: 1 }}>KaoTanakon</Typography>
                            <ExpandMoreIcon sx={{ ml: 1 }} />
                        </>
                    )}
                </IconButton>

                <Menu
                    anchorEl={anchorElProfile}
                    open={Boolean(anchorElProfile)}
                    onClose={handleCloseProfileMenu}
                >
                    <MenuItem onClick={handleCloseProfileMenu}>My Account</MenuItem>
                    {isMobile &&(
                       <MenuItem onClick={handleCloseProfileMenu}>Notification</MenuItem> 
                    )}
                    <MenuItem onClick={handleCloseProfileMenu}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar