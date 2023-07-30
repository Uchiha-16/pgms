import React from 'react';
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
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from "../assets/images/logo.png";
import { useState } from "react";


const drawerWidth = 270;

export default function NavbarComponent() {

    const [page, setPage] = useState("Dashboard");
    const handleListItemClick = (text) => {
        setPage(text);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundImage: 'linear-gradient(#42424A, #191919)',
                        color: '#fff',
                        position: 'fixed',
                        top: 20,
                        borderRadius: 2,
                        left: 20,
                        height: 'calc(100% - 40px)',
                        paddingTop: 2,
                        paddingBottom: 2,
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
                            'Dashboard', 
                            'Timetable', 
                            'Payment Voucher', 
                            'Nominations',
                            'Notifications',
                            'Profile',
                            'Logout'
                        ].map((text, index) => (
                            <ListItem 
                            key={text} 
                            disablePadding
                            onClick={() => handleListItemClick(text)} // Optional: If you want to handle click event and update 'page'
                            sx={{
                                backgroundImage: page === text ? 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%);' : 'none',
                                boxShadow: page === text ? '0px 4px 9px 1px rgba(0, 0, 0, 0.17);' : 'none',
                                borderRadius: 1,
                                height: 50,
                                marginBottom: .7,
                                ":hover": {
                                    boxShadow: '0px 4px 9px 1px rgba(0, 0, 0, 0.17)',
                                    background: page === text ? 'linear-gradient(270deg, #49A3F1 0%, #1A73E8 100%);' : 'rgba(116, 123, 138, 0.64)',
                                    transition: '0.3s ease-in-out'
                                }
                            }}
                            >
                                <ListItemButton>
                                    <ListItemIcon sx={{color: 'white'}}>
                                        {text === 'Dashboard' ? <DashboardRoundedIcon /> : 
                                            text === 'Timetable' ? <CalendarMonthIcon /> : 
                                                text === 'Payment Voucher' ? <DescriptionIcon /> : 
                                                    text === 'Nominations' ? <GroupAddIcon /> : 
                                                        text === 'Notifications' ? <NotificationsIcon /> : 
                                                            text === 'Profile' ? <PersonIcon /> : 
                                                                text === 'Logout' ? <LogoutIcon /> : 'none'}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
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
