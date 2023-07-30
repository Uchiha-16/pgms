import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SettingsIcon from '@mui/icons-material/Settings';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function HeaderComponent() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    color="#898989"
                    aria-label="account of current user"
                >
                    <Badge badgeContent={0} color="error">
                        <AccountCircle />
                    </Badge>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="898989"
                >
                    <SettingsIcon />
                </IconButton>
                <p>Settings</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="898989"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Alerts</p>
            </MenuItem>
        </Menu>
    );

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        color: '#898989',
        border: '1px solid #CCC9C9',
        borderRadius: 8,
        backgroundColor: 'transparent',
        marginLeft: 0,
        width: '100%',
        height: 40,
        marginTop: 4,
        marginRight: 20
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#C2C1C1'
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'black',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1.3, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            fontSize: 14,
            [theme.breakpoints.up('sm')]: {
                width: '18ch',
                '&:focus': {
                    width: '22ch',
                },
            },
        },
    }));


    return (
        <Box sx={{ 
            flexGrow: 1, 
            position: 'fixed', 
            width: '79%',
            top: 20
            }}>
            <AppBar position="static" sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent'
                }}>
                <Toolbar sx={{
                    backgroundColor: '#F0F2F5',
                    borderRadius: 2
                    }}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb" sx={
                            {fontSize: 12,
                            color: '#565656' }
                            }>
                            <Link
                                underline="hover"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href="/"
                            >
                                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            </Link>
                            <Link
                                underline="none"
                                sx={{ display: 'flex', alignItems: 'center' }}
                                color="inherit"
                                href="/material-ui/getting-started/installation/"
                            >
                                Dashboard
                            </Link>
                        </Breadcrumbs>
                        <Box sx={{ 
                            textAlign: 'left',
                            fontWeight: 'bold',
                            fontSize: 14,
                            color: 'black' }}>
                            Dashboard
                        </Box>
                    </div>
                    
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        {/* profile icon */}
                        <IconButton 
                            size="large" 
                            color="#898989"
                            aria-label="account of current user"
                        >
                            <Badge badgeContent={0} color="error">
                                <AccountCircle />
                            </Badge>
                        </IconButton>
                        {/* settings icon */}
                        <IconButton
                            size="large"
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="898989"
                        >
                            <SettingsIcon />
                        </IconButton>
                        {/* notification icon */}
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="898989"
                            edge="end"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="898989"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>

        
    );
}