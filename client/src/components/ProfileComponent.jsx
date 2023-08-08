import React from 'react';
import { Avatar, Typography, Paper } from '@mui/material';
import profile from '../assets/images/profile.png'; // Replace with the path to your background image


function Profile() {
  const paperStyle = {
    width: '70%', // Set the width and height to create a square card
    height: '70%',
    margin: '90px auto', // Center the card horizontally
    position: 'relative',
    textAlign: 'center',
    padding: '20px'
  };

  const avatarStyle = {
    width: '160px',
    height: '160px',
    position: 'absolute',
    top: '-75px', // Keep the image at the top
    left: '150px',
    transform: 'translateX(-50%)'
  };

  const nameStyle = {
    textAlign: 'center',
    marginBottom: '2px',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  const roleStyle = {
    marginBottom: '50px',
    color: '#666',
  };

  const infoStyle = {
    textAlign: 'left',
    padding: '10px'
  };

  const sectionStyle = {
    fontSize: '1.2rem',
    marginBottom: '10px',
    fontWeight: 'bold'
  };

  const detailStyle = {
    marginBottom: '8px',
    color: '#444'
  };

  return (
    <Paper elevation={3} style={paperStyle}>
      <Avatar alt="Profile Photo" src={profile} style={avatarStyle} />
      <Typography variant="h5" style={nameStyle}>Dr. D A S Athukorala</Typography>
      <Typography variant="body1" style={roleStyle}>B.Sc. (Col), Ph.D. (Queensland), MIEEE, MCSSL </Typography>
      <div style={infoStyle}>
        <Typography variant="h6" style={sectionStyle}>Profile Information:</Typography>
        <Typography variant="body2" style={detailStyle}>Position: Frontend Developer</Typography>
        <Typography variant="body2" style={detailStyle}>Full Name: Dr. D A S Athukorala</Typography>
        <Typography variant="body2" style={detailStyle}>Mobile: +1234567890</Typography>
        <Typography variant="body2" style={detailStyle}>Email: example@example.com</Typography>
      </div>
    </Paper>
  );
}

export default Profile;
