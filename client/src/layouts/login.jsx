import React from 'react';
import { Box, Container, Paper, Typography, TextField, Button, Grow } from '@mui/material';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoImg from '../assets/images/logo.png'; // Replace with the path to your logo image
import LoginForm from '../components/LoginForm' // Import the LoginForm component
import { useNavigate } from 'react-router-dom';


const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
  },
});

const gradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`;

const AnimatedGradientBackground = styled.div`
  animation: ${gradient} 15s ease-in-out infinite;
  background: linear-gradient(-45deg, #49A3F1, #1A73E8, #EC407A, #5B86E5);
  background-size: 300%;
  height: 100vh; /* Adjust the height as needed */
  width: 100%; /* Full width */
`;

const Boxbg = styled.div`
  /* Your other Box styles */
`;


const LoginPage = () => {

  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate('/forgotpassword'); // Redirect on button click
  };


  return (
    <ThemeProvider theme={theme}>
      <AnimatedGradientBackground><Boxbg
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: '11rem',
          position: 'relative',
        }}
      >
        <Grow in={true} timeout={1000}><Container sx={{
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          }}>
          <Paper
            sx={{
              textAlign: 'center',
              backgroundColor: 'white', // Set the background color with transparency
              boxShadow: '0px 13px 20px -7px rgba(0, 0, 0, 0.2);', 
              height: '375px',
              width: '18rem',
              paddingLeft: '10rem',
              paddingRight: '10rem',
              paddingBottom: '3rem',
              paddingTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderRadius: '20px', // Rounded corners
            }}
          >
            <Box sx={{ 
              position: 'relative', 
              marginBottom: 2,
              }}>
              <img
                src={logoImg}
                alt="Logo"
                style={{
                  width: '85px', // Adjust the size of the logo as needed
                  height: '85px', // Adjust the size of the logo as needed
                  borderRadius: '50%',
                  position: 'absolute',
                  top: '-100px', // Move the logo higher up by increasing the negative value
                  left: 'calc(50% - 40px)',
                }}
              />
            </Box>
            <Typography color={'#011632'} sx={{
              fontWeight: '600', 
              marginBottom: '1rem',
            }}>
              Postgraduate Management System
              <br /><br />
              WELCOME
            </Typography>
            <TextField
              label="Email"
              type="email"
              margin="normal"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#F0F2F5', // Silver outline for text field
                  transition: 'border-color 0.2s ease-in-out', // Add a transition on hover
                  borderRadius: '10px', // Rounded corners
                },
                ":hover": {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#1A73E8',
                  },
                },
                '& input': {
                  height: '15px', // Adjust the height as needed
                  width: '100%',
                  color: '#011632', // Adjust the width as needed
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#898989', // Set the color of the label
                  fontSize: '14px',
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
                  borderColor: '#F0F2F5', // Silver outline for text field
                  transition: 'border-color 0.2s ease-in-out', // Add a transition on hover
                  borderRadius: '10px', // Rounded corners
                },
                ":hover": {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#1A73E8', // Silver outline for text field
                  },
                },
                '& input': {
                  height: '15px', // Adjust the height as needed
                  width: '100%',
                  color: '#011632', // Adjust the width as needed
                  fontSize: '14px',
                },
                '& .MuiInputLabel-root': {
                  color: '#898989', // Set the color of the label
                  fontSize: '14px',
                },
                fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
              }}
            />
            <Button
              variant="text"
              color="primary"
              onClick={handleForgotPasswordClick}
              sx={{
                width: '100%', // Make the button take the full width
                marginLeft: '30%', // Move the button to the right
                marginRight: '0', // No margin on the right side
                textTransform: 'none', // Disable capitalization of the button text
                color: '#1A73E8', // Fill color for the button text
                fontFamily: 'Inter, sans-serif', // Set the font family to "Inter"
                '& .MuiTouchRipple-root': {
                  display: 'none', // Disable the ripple effect
                },
                "&:hover": {
                  //you want this to be the same as the backgroundColor above
                  backgroundColor: "transparent",
                  color: 'black'
                },
                fontSize: '12px',
              }}
            >
              Forgot Password?
            </Button><br />
            <Button variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#2C85EB', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 'regular' }}>
              login
            </Button>
          </Paper>
        </Container></Grow>
      </Boxbg></AnimatedGradientBackground>
    </ThemeProvider>
  );
};

export default LoginPage;
