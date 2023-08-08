import React, { useState } from 'react';
import { Avatar, Typography, Paper } from '@mui/material';
import TextField from '@mui/material/TextField'; // Import TextField
import Button from '@mui/material/Button'; // Import Button
import profile from '../assets/images/profile.png'; // Replace with the path to your background image


function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const paperStyle = {
    width: '70%', // Set the width and height to create a square card
    height: '70%',
    margin: '90px auto', // Center the card horizontally
    position: 'relative',
    textAlign: 'center'
  };

  const avatarStyle = {
    width: '160px',
    height: '160px',
    position: 'absolute',
    top: '-65px', // Keep the image at the top
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
    marginBottom: '40px',
    color: '#666',
    left: '30px',
    marginLeft: '120px'
  };

  const infoStyle = {
    textAlign: 'left',
    padding: '20px',
    marginLeft: '40px'
  };

  const sectionStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
    fontWeight: 'bold'
  };

  const detailContainerStyle = {
    display: 'flex', // Display the details in a row
    marginBottom: '20px',
  };

  const labelStyle = {
    width: '150px', // Set a fixed width for the labels
    color: '#444'
  };

  const contentStyle = {
    flex: '1', // Allow the content to grow and take up remaining space
    color: '#444'
  };


  const editButtonStyle = {
    marginTop: '5px', // Add some space between the detail pairs and the button
    fontSize: '0.8rem',
    backgroundColor: '#2196F3', // Set the background color
    color: '#fff', // Set the text color
    '&:hover': {
      backgroundColor: '#1976D2', // Change background color on hover
    },
  };


  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Paper elevation={3} style={paperStyle}>
      <Avatar alt="Profile Photo" src={profile} style={avatarStyle} /> 
      <div style={roleStyle}>
      <Typography variant="h5" style={nameStyle}>Dr. D A S Athukorala</Typography>
      <Typography variant="body1" style={roleStyle}>B.Sc. (Col), Ph.D. (Queensland), MIEEE, MCSSL</Typography> 

      <div style={infoStyle}>
        <Typography variant="h6" style={sectionStyle}>Profile Information:</Typography>
        <div edit>
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Position:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue="Frontend Developer" />
          ) : (
            <Typography variant="body2" style={contentStyle}>Frontend Developer</Typography>
          )}
         
        </div>
        {/* Other detail pairs */}
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Full Name:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue="Dr. D A S Athukorala" />
          ) : (
            <Typography variant="body2" style={contentStyle}>Dr. D A S Athukorala</Typography>
          )}
         
        </div>
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Mobile:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue="+1234567890" />
          ) : (
            <Typography variant="body2" style={contentStyle}>+1234567890</Typography>
          )}
         
        </div>
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Email:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue="example@example.com" />
          ) : (
            <Typography variant="body2" style={contentStyle}>example@example.com</Typography>
          )}
          
        </div>
        <Button variant="outlined" style={editButtonStyle} onClick={handleEditToggle}>
            {isEditing ? 'Save' : 'Edit'}
          </Button>
      </div>
      </div>
      </div>
    </Paper>
  );
}

export default Profile;

