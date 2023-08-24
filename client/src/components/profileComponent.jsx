import React, { useState } from 'react';
import { Avatar, Typography, Paper } from '@mui/material';
import TextField from '@mui/material/TextField'; // Import TextField
import Button from '@mui/material/Button'; // Import Button
import { fontSize } from '@mui/system';
import { useParams } from 'react-router-dom';
import useAxiosMethods from '../hooks/useAxiosMethods';
import { useEffect } from 'react';
 
function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const { userID } = useParams();
  const [user, setUser] = useState(null);
  const { get } = useAxiosMethods();

  const users_URL = `users/getUser/${userID}`
    
  useEffect(() => {
    // Call the get method to fetch user data
    get(users_URL, setUser);

  }, []);

  const profileImage = user?.profileImage || 'user.png';

  const paperStyle = {
    width: '70%', // Set the width and height to create a square card
    height: 'auto',
    margin: '50px auto', // Center the card horizontally
    position: 'relative',
    textAlign: 'center',
    borderRadius: '10px',
  };

  const avatarStyle = {
    width: '140px',
    height: '140px',
    position: 'absolute',
    top: '-60px',
    left: '150px',
    transform: 'translateX(-50%)',
    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.20)'
  };

  const nameStyle = {
    textAlign: 'left',
    paddingLeft: '9rem',
    paddingTop: 30,
    marginBottom: '2px',
    color: '#000',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: '700',
  };

  const roleStyle = {
    textAlign: 'left',
    paddingLeft: '9rem',
    marginBottom: '40px',
    color: '#42424A',
    fontFamily: 'Inter',
    fontSize: '12px',
  };

  const infoStyle = {
    textAlign: 'left',
    padding: '20px',
    marginLeft: '40px',
    borderTop: '1px solid #F0F2F5',
    width: '28rem'
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
    color: '#444',
    fontWeight: 'bold'
  };

  const contentStyle = {
    flex: '1', // Allow the content to grow and take up remaining space
    color: '#444',
    fontSize: '14px'
  };


  const editButtonStyle = {
    marginLeft: '500px', 
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
      <Avatar alt="Profile Photo" src={require(`../assets/images/${profileImage}`)}  style={avatarStyle}/> 
      <div style={roleStyle}>
      <Typography variant="h5" style={nameStyle}>{user?.firstname} {user?.lastname}</Typography>
      <Typography variant="body1" style={roleStyle}>{user?.role}</Typography> 

      <div style={infoStyle}>
        <Typography variant="h6" style={sectionStyle}>Profile Information:</Typography>
        <div edit>
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Position:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue={user?.role} />
          ) : (
            <Typography variant="body2" style={contentStyle}>{user?.role}</Typography>
          )}
         
        </div>
        {/* Other detail pairs */}
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Full Name:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue={`${user?.firstname} ${user?.lastname}`}  />
          ) : (
            <Typography variant="body2" style={contentStyle}>{user?.firstname} {user?.lastname}</Typography>
          )}
         
        </div>
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Mobile:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue={user?.contact}  />
          ) : (
            <Typography variant="body2" style={contentStyle}>{user?.contact}</Typography>
          )}
         
        </div>
        <div style={detailContainerStyle}>
          <Typography variant="body2" style={labelStyle}>Email:</Typography>
          {isEditing ? (
            <TextField variant="outlined" size="small" style={contentStyle} defaultValue={user?.email} />
          ) : (
            <Typography variant="body2" style={contentStyle}>{user?.email} </Typography>
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

