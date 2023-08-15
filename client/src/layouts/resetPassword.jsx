import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { Box, Container, Paper, Typography, TextField, Button, Grow } from '@mui/material';
import styled from "styled-components";
import { keyframes } from "styled-components";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logoImg from '../assets/images/logo.png'; // Replace with the path to your logo image
import axios from '../api/axios';


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


const ResetPassword = () => {

  const {token} = useParams();
  const [password, setPassword] = useState('');
  const naviagate = useNavigate();

  const [matchPassword, setMatchPassword] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState(null);

  useEffect(() => {
    setValidMatch(password === matchPassword);
  }, [password, matchPassword])

  const handleSubmit = async (e) => {

    e.preventDefault()

    // if (!PWD_REGEX.test(password)) {
    //   setErrMsg("Invalid Email");
    //   return;
    // }

    try {
      const response = await axios.post(`/auth/reset-password/${token}`,
        JSON.stringify({ password: password}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      console.log(response.data.message);
      setErrMsg(response?.data?.message);
      setPassword('');
      setMatchPassword('');
      setTimeout(() => {
        naviagate('/'); 
      }, 3000);

    } catch (err) {
      if (!err?.response) {
        console.log(err.response?.data?.message);
        setErrMsg('No Server Response');
      } else {
        setErrMsg(err.response?.data?.message);
      }
    }
  }

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
              paddingBottom: '5rem',
              paddingTop: '4rem',
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
                  top: '-90px', // Move the logo higher up by increasing the negative value
                  left: 'calc(50% - 40px)',
                }}
              />
            </Box>
            <Typography color={'#011632'} sx={{
              fontWeight: '600',
              marginBottom: '1rem',
            }}>
              Create New Password
              <br /><br />
              <p style={{
                fontSize: '12px',
                fontWeight: '400',
              }}>
                Your New Password Must Be Different from Previously Used Password.
              </p>
            </Typography>
            <p>{errMsg}</p>
            <form onSubmit={handleSubmit}>
              <TextField
                label="New Password"
                type="password"
                id="password"
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
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
              <TextField
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                onChange={(e)=> setMatchPassword(e.target.value)}
                value={matchPassword}
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
            <br /><br />
            <Button disabled={!validMatch ?true : false} type="submit"  variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#2C85EB', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 'regular' }}>
              Change
            </Button><br />
            <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" color="primary" fullWidth sx={{
              backgroundColor: '#747b8a',
              fontFamily: 'Inter, sans-serif',
              fontSize: '15px',
              fontWeight: 'regular',
              ":hover": {
                backgroundColor: '#495361',
              },
            }}>
              Cancel
            </Button></Link>
            </form>
          </Paper>
        </Container></Grow>
      </Boxbg></AnimatedGradientBackground>
    </ThemeProvider>
  );
};

export default ResetPassword;
