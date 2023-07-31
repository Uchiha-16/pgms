import React, { useState } from "react"; // Import React and useState
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import SideImageComponent from "./SideImageComponent";
import axios from 'axios';

import { Button, Box, Dialog, DialogActions, DialogContent, IconButton, Stack, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"


const Popup = () => { // Changed the function name to start with uppercase "P"
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // For the "role" field, we need to handle its value differently
    if (name === 'role') {
      // Access the selected value using event.target.value directly
      setFormData({ ...formData, [name]: e.target.value });
    } else {
      // For other fields, use the standard way
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users/addUsers', formData)
      .then((response) => {
        console.log('User created:', response.data);
        // Handle success, display success message or redirect if needed
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        // Handle error, display error message
      });
    }
    const [open, setOpen] = useState(false); // Changed the state variable name to setOpen
    const functionOpenPopup = () => { // Changed the function name to start with "use"
        setOpen(true); // Changed the function to use setOpen
    }
    const closePopup = () => { // Changed the function name to start with "use"
        setOpen(false); // Changed the function to use setOpen
    }
    const handleReset = () => {
      setFormData({
        firstName: '',
        lastName: '',
      email: '',
      password: '',
      role: '',
      contact: '',
      });
    };

    return (
        <div style={{textAlign:'center'}}>
      
            <h1>Add New User</h1>
            <Button onClick={functionOpenPopup} color="primary" variant="contained">Add User</Button>
            <Dialog 
            // fullScreen 
            open={open} onClose={closePopup} fullWidth maxWidth="md" >
              <form onSubmit={handleSubmit}>
            <Grid container direction="row" >
              <Grid container xs={4} sx={{backgroundColor:"#1A73E8"}}>
                <SideImageComponent />
              </Grid>
              <Grid xs={8}>
              <IconButton onClick={closePopup} style={{float:'right', marginBottom:2 }}><CloseIcon color="primary" /></IconButton>
             <Box sx={{
                      backgroundColor:'black',
                      textDecorationColor:'white',
                      mt:7,  
                      maxWidth:120,
                      height:30,
                      borderTopRightRadius:50,
                      borderBottomRightRadius:50,
                      textAlign:"center"
                          }}>
                  <Typography paddingTop={"2px"} color={"white"}>Add User</Typography></Box>
                 {/* Added a closing tag for CloseIcon */}
                <DialogContent>
                    {/* <DialogContentText>Do you want to remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                    <Grid container spacing={2}>
                    
              <Grid item xs={12} sm={6}>
              
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
              
                <InputLabel id="demo-simple-select-label" required>Role</InputLabel>
                <Select
                  required
                  label="Role"
                  id="role"
                  value={formData.role}
                  onChange={handleChange}
                  name="role"
                >
                    <MenuItem value={'lecturer'}>UCSC Lecturer</MenuItem>
                    <MenuItem value={'visitinglecturer'}>Visiting Lecturer</MenuItem>
                    <MenuItem value={'Technical'}>Technical Assistant</MenuItem>
                    <MenuItem value={'staff'}>Staff</MenuItem>
                </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contact"
                  label="Contact No"
                  type="phone"
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  autoComplete="contact"
                />
              </Grid>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mr: 2, minWidth: 150, minHeight: 30, justifyItems: 'left',fontSize:18 }}
                                >
                                    Add
                                </Button>
                                <Button
                                    type="reset"
                                    variant="contained"
                                    onClick={handleReset}
                                    sx={{ mt: 3, minWidth: 150, minHeight: 30 ,justifyItems: 'left', fontSize:18, backgroundColor: '#7B809A', ":hover":{background:'#495361'}}}
                                >
                                    Reset
                                </Button>
                                
                            </div>
                    </Stack>
                </DialogContent>
                <DialogActions>
                {/* <Button color="success" variant="contained">Yes</Button>
                    <Button onClick={closePopup} color="error" variant="contained">Close</Button> */}
                </DialogActions>
                </Grid>
              </Grid>
              </form>
            </Dialog>
        </div>
    );
  }
export default Popup; // Changed the export name to match the component name
