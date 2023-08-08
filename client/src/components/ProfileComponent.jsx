import React from 'react';
import { Avatar, Typography, Paper } from '@mui/material';
import profile from '../assets/images/profile.jpg'; // Replace with the path to your background image


function Profile() {
  return (
    <Paper elevation={3} style={{ padding: '10px', margin: '120px' }}>
      <Avatar alt="Profile Photo" src={profile} sx={{ width: 150, height: 150, position: 'absolute', top: '150px'}} />
      <Typography variant="h5" style={{ textAlign: 'center', marginBottom: '20px' }}>Dr. D A S Athukorala</Typography>
      <Typography variant="body2">Frontend Developer</Typography>
      <div style={{ textAlign: 'left', padding: '10px' }}>
        <Typography variant="h6" style={{ marginBottom: '20px' }}>Profile Information:</Typography>
        <Typography variant="body2" style={{ marginBottom: '15px' }}>Position: Frontend Developer</Typography>
        <Typography variant="body2" style={{ marginBottom: '15px' }}>Full Name: Dr. D A S Athukorala</Typography>
        <Typography variant="body2" style={{ marginBottom: '15px' }}>Mobile: +1234567890</Typography>
        <Typography variant="body2" style={{ marginBottom: '15px' }}>Email: example@example.com</Typography>
      </div>
    </Paper>
  )
}

export default Profile;
