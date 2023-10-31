import React, { useState } from "react"; // Import React and useState
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import SideImageComponent from "./SideImageComponent";
import axios from "../api/axios";
import { useNavigate } from 'react-router-dom';
import AlertBox from './GeneralAlert';



import { Button, Box, Dialog, DialogActions, DialogContent, IconButton, Stack, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

const Course = () => { // Changed the function name to start with uppercase "P"
  const [formData, setFormData] = useState({
    courseNo: '',
    courseName: '',
    semester: '',
    credit: '',
    hallName: '',
    programId: '',
  });


  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // For the "role" field, we need to handle its value differently
    if (name === 'programId') {
      // Access the selected value using event.target.value directly
      setFormData({ ...formData, [name]: e.target.value });
    } else {
      // For other fields, use the standard way
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    console.log(JSON.stringify(formData));

    e.preventDefault();
    axios.post("/courses/add", formData)
      .then((response) => {
        console.log(response);
        setOpenAlert(true);
        setAlertSeverity('success');
        setAlertMessage('Course Added successfully!');
        // Handle success, display success message or redirect if needed
        setTimeout(() => { 
          //refresh the page and leave the popup component
          window.location.reload();
          setOpenAlert(false);
          navigate('/programs', { replace: true });
        }, 3000);
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
        courseNo: '',
        courseName: '',
        semester: '',
        credit: '',
        hallName: '',
        programId: '',
      });
    };
    


    return (
        <div style={{textAlign:'center'}}>
    
            <Button onClick={functionOpenPopup} color="primary" variant="contained" sx={{ position: 'relative', marginLeft: '1062px', marginBottom: '20px' }}>Add Courses</Button>
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
                  <Typography paddingTop={"2px"} color={"white"}>Add Course</Typography></Box>
                 {/* Added a closing tag for CloseIcon */}
                <DialogContent>
                    {/* <DialogContentText>Do you want to remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                    <Grid container spacing={2}>

            <Grid item xs={12}>
              <FormControl fullWidth>
              
              <InputLabel id="demo-simple-select-label" required>Program</InputLabel>
                <Select
                  required
                  label="Program"
                  id="progam"
                  value={formData.programId}
                  onChange={handleChange}
                  name="programId"
                >
                    <MenuItem value={1}>Master of Computer Science</MenuItem>
                    <MenuItem value={2}>Master of Information Technology</MenuItem>
                    <MenuItem value={3}>Master of Information Security</MenuItem>
                    <MenuItem value={4}>Master of Business Analytics</MenuItem>
                </Select>
              </FormControl>
            </Grid>
              <Grid item xs={12}>
              
                <TextField
                  name="courseName"
                  required
                  fullWidth
                  value={formData.courseName}
                  onChange={handleChange}
                  id="courseName"
                  label="Course Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="courseNo"
                  label="Course Code"
                  name="courseNo"
                  value={formData.courseNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
              
                <InputLabel id="demo-simple-select-label" required>Semester</InputLabel>
                <Select
                  required
                  label="Semester"
                  id="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  name="semester">
                    <MenuItem value={'1'}>Semester 1</MenuItem>
                    <MenuItem value={'2'}>Semester 2</MenuItem>
                    <MenuItem value={'3'}>Semester 3</MenuItem>
                    <MenuItem value={'4'}>Semester 4</MenuItem>
                </Select>
                </FormControl>
            </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="credit"
                  label="Course Credit"
                  name="credit"
                  value={formData.credit}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="hallName"
                  label="Hall Name"
                  id="hallName"
                  value={formData.hallName}
                  onChange={handleChange}
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
                <AlertBox 
                open={openAlert}
                onClose={() => setOpenAlert(false)}
                severity={alertSeverity}
                message={alertMessage}
                />
            </Dialog>
        </div>
    );
  }
export default Course; // Changed the export name to match the component name
