import React from 'react';
import { Box, Container, Paper, Typography, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import backgroundImg from '../assets/images/login_background.jpg'; // Replace with the path to your background image
import logoImg from '../assets/images/logo.png'; // Replace with the path to your logo image

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
            <TextField
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#7B809A', // Silver outline for text field
                },
                '& input': {
                  height: '15px', // Adjust the height as needed
                  width: '100%',
                  color: '#7B809A', // Adjust the width as needed
                },
                '& .MuiInputLabel-root': {
                  color: '#7B809A', // Set the color of the label
                },
                fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
              }}
            />
            <TextField
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#7B809A', // Silver outline for text field
                },
                '& input': {
                  height: '15px', // Adjust the height as needed
                  width: '100%',
                  color: '#7B809A', // Adjust the width as needed
                },
                '& .MuiInputLabel-root': {
                  color: '#7B809A', // Set the color of the label
                },
                fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
              }}
            />
            <Button
              variant="text"
              color="primary"
              sx={{
                width: '100%', // Make the button take the full width
                marginLeft: '30%', // Move the button to the right
                marginRight: '0', // No margin on the right side
                textTransform: 'none', // Disable capitalization of the button text
                color: '#1A73E8', // Fill color for the button text
                fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
              }}
            >
              Forgot Password
            </Button>
            <Button variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#2C85EB', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 'regular' }}>
              login
            </Button>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
