import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImg from '../assets/images/login_background.jpg'; // Replace with the path to your background image
import logoImg from '../assets/images/logo.png'; // Replace with the path to your logo image
import LoginForm from '../components/LoginForm' // Import the LoginForm component

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
  },
});

const LoginPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="xs" sx={{ height: '375px', width: '30%' }}>
          <Paper
            sx={{
              padding: 4,
              textAlign: 'center',
              backgroundColor: `rgba(0, 0, 0, ${0.8})`, // Set the background color with transparency
              boxShadow: '0px 0px 8px #7B809A', // Silver outline
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ position: 'relative', marginBottom: 2 }}>
              <img
                src={logoImg}
                alt="Logo"
                style={{
                  width: '80px', // Adjust the size of the logo as needed
                  height: '80px', // Adjust the size of the logo as needed
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '-100px', // Move the logo higher up by increasing the negative value
                  left: 'calc(50% - 40px)',
                }}
              />
            </Box>
            <Typography color={'white'}>
              <div>Postgraduate Management System</div>
              <br />
              WELCOME
            </Typography>
            {/* Use the LoginForm component */}
            <LoginForm />
            
           
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
