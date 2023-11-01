import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import PlaceIcon from '@mui/icons-material/Place';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from "../assets/images/logo.png";
import useAxiosMethods from '../hooks/useAxiosMethods';



const drawerWidth = 270;

export default function NavbarComponent() {

    const {post} = useAxiosMethods();
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const navigate = useNavigate();

    const userID = auth.user_id
    const role = auth.role

    const [page, setPage] = useState("Dashboard");
    useEffect(() => {
        const currentURL = window.location.pathname;
        const routeName = currentURL.substring(1); // Remove the leading '/' character
        const capitalizedRouteName = routeName.charAt(0).toUpperCase() + routeName.slice(1);
        setPage(capitalizedRouteName);
    }, []);

    const logout = async () => {
        try{
            post('auth/logout', null, setAuth);
            console.log('logouted!!!');

        }catch(err){
            console.error(err);
        }
        
    }

    return (
        <Box sx={{ 
            display: 'flex', 
            '# .MuiPaper-root': {
                overflowY: 'hidden'
            }
        }}>
            <CssBaseline />
            <Drawer
                sx={{
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        backgroundImage: 'linear-gradient(#42424A, #191919)',
                        color: '#fff',
                        position: 'fixed',
                        top: 20,
                        borderRadius: 2,
                        left: 20,
                        height: 'auto',
                        paddingTop: 2,
                        paddingBottom: 2,
                        overflowY: 'hidden'
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar sx={{
                    textAlign: 'left',
                }}>
                    <img src={logo} width={36.5} height={36.5} alt='PGMS'/>
                    <box>
                    <h6 style={{
                        marginLeft:10,
                        marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0
                        }}>
                            Postgraduate Management System
                    </h6>
                    <p style={{ 
                        marginLeft: 10, 
                        fontSize: 8,
                        marginTop: 0,
                        marginBottom: 0,
                        marginRight: 0
                        }}>
                        University of Colombo School of Computing
                    </p>
                    </box>
                </Toolbar>
                <Divider variant="middle" sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
                    width: '80%', 
                    marginLeft: 'auto', 
                    marginRight: 'auto',
                    marginTop: 1,
                    marginBottom: 2
                }}/>
                <div container style={{ 
                    display: 'grid',
                    alignContent: 'center',
                    justifyContent: 'start',
                    marginLeft: 25,
                    marginRight: 25
                }}
                >
                    <List sx={{
                        width: '13.6rem',
                        fontFamily: 'Inter',
                        '& .MuiTypography-root': {
                            fontSize: 13,
                        }
                    }}>
                        {[
                            { text: 'Dashboard', path: '/dashboard', icon: <DashboardRoundedIcon /> },
                            { text: 'Timetable', path: '/timetable', icon: <CalendarMonthIcon /> },
                            { text: 'Payment Voucher', path: '/payment-voucher', icon: <DescriptionIcon /> },
                            { text: 'Attendance Tracking', path: role === "Staff" ? '/attendance-page' : '/attendance-tracking', icon: <PlaceIcon />},
                            { text: 'Nominations', path: '/addNominations', icon: <GroupAddIcon /> },
                            { text: 'Notifications', path: '/notifications', icon: <NotificationsIcon /> },
                            { text: 'Profile', path: `/profile/${userID}`, icon: <PersonIcon /> },
                            { text: 'Logout', path: '/', icon: <LogoutIcon /> },
                        ].map((text, index) => (
                            <ListItem 
                            key={text} 
                            disablePadding
                            sx={{
                                backgroundImage: page === text.text ? 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%);' : 'none',
                                boxShadow: page === text.text ? '0px 4px 9px 1px rgba(0, 0, 0, 0.17);' : 'none',
                                borderRadius: 1,
                                height: 50,
                                marginBottom: .7,
                                ":hover": {
                                    boxShadow: '0px 4px 9px 1px rgba(0, 0, 0, 0.17)',
                                    background: page === text.text ? 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%);' : 'rgba(116, 123, 138, 0.64)',
                                    transition: '0.3s ease-in-out'
                                }
                            }}
                            >
                                <ListItemButton component={Link} to={text.path} onClick={text.text==='Logout' ? logout: ()=>{}}>
                                    <ListItemIcon sx={{color: 'white'}}>
                                        {text.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div container style={{
                    display: 'grid',
                    alignContent: 'center',
                    justifyContent: 'start',
                    marginLeft: 25,
                    marginRight: 25,
                    marginTop: '6rem'
                }}>
                    <List sx={{
                        width: '13.6rem',
                        fontFamily: 'Inter',
                        '& .MuiTypography-root': {
                            fontSize: 13,
                        }
                    }}>
                        {[
                            'Settings'
                        ].map((text, index) => (
                            <ListItem
                                key={text}
                                disablePadding
                                sx={{
                                    backgroundImage: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%);',
                                    boxShadow: '0px 4px 9px 1px rgba(0, 0, 0, 0.17);',
                                    borderRadius: 1,
                                    height: 50,
                                    marginBottom: .7,
                                    ":hover": {
                                        boxShadow: '0px 4px 9px 1px rgba(0, 0, 0, 0.17)',
                                        background: 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%)',
                                        transition: '0.3s ease-in-out'
                                    }
                                }}
                            >
                                <ListItemButton>
                                    <ListItemIcon sx={{ color: 'white' }}>
                                        <SettingsIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </Box>
    );
}
