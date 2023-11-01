import React, { useState, useEffect } from "react"; // Import React and useState
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import SideImageComponent from "./SideImageComponent";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AlertBox from './GeneralAlert';
import useAuth from "../hooks/useAuth";




import { Button, Box, Dialog, DialogActions, DialogContent, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"


const Nomination = () => { // Changed the function name to start with uppercase "P"

  const { auth } = useAuth();
  
  const [formData, setFormData] = useState({
    programId: '',
    semester:'',
    courseId: '',
    userID: auth.user_id,
  });

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "programId" || name === "semester") {
      setFormData({
        ...formData,
        [name]: value,
        courseId: '', // Reset course when program or semester changes
      });
    } else if (name === "courseId") {
      setFormData({
        ...formData,
        courseId: value,
      });
    }
  };


  // Inside your component's render function
console.log("Course Value:", formData.courseId);
console.log("Program Value:", formData.programId);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/nominations/add', formData)
      .then((response) => {
        console.log('Nomination Added:', response.data);
        setOpenAlert(true);
        setAlertSeverity('success');
        setAlertMessage('Application Sent!');
        // Handle success, display success message or redirect if needed
        setTimeout(() => {
          window.location.reload();
          setOpenAlert(false);
          navigate('/nominations', { replace: true }); // Replace '/new-page-url' with the actual URL you want to navigate to
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
        programId: '',
        semester:'',
        courseId: '',
        userID: 2,
      });
    };

    return (
        <div style={{textAlign:'center'}}>
      
            {/* <h1>Nomination Application</h1> */}
            <Button onClick={functionOpenPopup} color="primary" variant="contained"
            sx={{
              position: 'absolute', // Position absolutely
              top: '90px', // Place it at the top
              right: '20px', // Place it on the left
              margin: '16px', // Add margin for spacing
            }}
            >Call for Nomination
            </Button>
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
                      maxWidth:200,
                      height:30,
                      borderTopRightRadius:50,
                      borderBottomRightRadius:50,
                      textAlign:"center"
                          }}>
                  <Typography paddingTop={"2px"} color={"white"}>Call for Nomination</Typography></Box>
                 {/* Added a closing tag for CloseIcon */}
                <DialogContent>
                    {/* <DialogContentText>Do you want to remove this user?</DialogContentText> */}
                    <Stack spacing={2} margin={2}>
                    <Grid container spacing={2}>
                    
            <Grid item xs={12} sm={6}>
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
                    <MenuItem value={'MCS'}>Master of Computer Science</MenuItem>
                    <MenuItem value={'MIT'}>Master of Information Technology</MenuItem>
                    <MenuItem value={'MIS'}>Master of Information Security</MenuItem>
                    <MenuItem value={'MBA'}>Master of Business Analytics</MenuItem>
                </Select>
                </FormControl>
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
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" required>Course</InputLabel>

                { 
                    formData.programId === 'MCS' && formData.semester === '1' && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MCS 1201'}>MCS1201 - Advanced Algorithms</MenuItem>
                          <MenuItem value={'MCS 1202'}>MCS1202 - Advanced Software Engineering</MenuItem>
                          <MenuItem value={'MCS 1203'}>MCS1203 - Advanced Database Systems</MenuItem>
                          <MenuItem value={'MCS 1204'}>MCS1204 - Selected Topics in Computer Science</MenuItem>
                          <MenuItem value={'MCS 1205'}>MCS1205 - Principles of Programming Languages</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 'MCS' && formData.semester === '2' && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={'MCS 2201'}>MCS2201 - Information Systems Security</MenuItem>
                            <MenuItem value={'MCS 2202'}>MCS2202 - Advanced Concepts in Data Communications Networks</MenuItem>
                            <MenuItem value={'MCS 2203'}>MCS2203 - Data Analytics & Machine Learning</MenuItem>
                            <MenuItem value={'MCS 2204'}>MCS2204 - Theoretical Computing</MenuItem>
                        </Select>
                    )
                }

                {
                    formData.programId === 'MCS' && formData.semester === '3' && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MCS 3201'}>MCS3201 - Intelligent Systems</MenuItem>
                          <MenuItem value={'MCS 3202'}>MCS3202 - Systems Modelling & Simulation</MenuItem>
                          <MenuItem value={'MCS 3205'}>MCS3205 - Distributed Systems</MenuItem>
                          <MenuItem value={'MCS 3206'}>MCS3206 - Advanced Computer Graphics and Gaming</MenuItem>
                          <MenuItem value={'MCS 3207'}>MCS3207 - Bioinformatics</MenuItem>
                          <MenuItem value={'MCS 3208'}>MCS3208 - Research Methods</MenuItem>
                        </Select>
                    )
                }

{ 
                    formData.programId === 'MCS' && formData.semester === '4' && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MCS 4201'}>MCS4201 - Cognitive Systems</MenuItem>
                          <MenuItem value={'MCS 4202'}>MCS4202 - Embedded Systems</MenuItem>
                          <MenuItem value={'MCS 4203'}>MCS4203 - Image Processing and Vision</MenuItem>
                          <MenuItem value={'MCS 4204'}>MCS4204 - Software Project Management and Quality Assurance</MenuItem>
                          <MenuItem value={'MCS 4205'}>MCS4205 - Natural Algorithms</MenuItem>
                          <MenuItem value={'MCS 4206'}>MCS4206 - Mobile Computing</MenuItem>
                          <MenuItem value={'MCS 4207'}>MCS4207 - Enterprise Web Architecture</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 'MIT' && formData.semester === '1' && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={'MIT 1201'}>MIT1201 - Program Design and Programming</MenuItem>
                            <MenuItem value={'MIT 1202'}>MIT1202 - Computer Systems</MenuItem>
                            <MenuItem value={'MIT 1203'}>MIT1203 - Database Management Systems</MenuItem>
                            <MenuItem value={'MIT 1204'}>MIT1204 - Systems Analysis and Modelling</MenuItem>
                        </Select>
                    )
                }
                
                {
                    formData.programId === 'MIT' && formData.semester === '2' && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MIT 2201'}>MIT2201 - Computer Networking</MenuItem>
                          <MenuItem value={'MIT 2202'}>MIT2202 - Software Engineering</MenuItem>
                          <MenuItem value={'MIT 2203'}>MIT2203 - Data and Network Security</MenuItem>
                          <MenuItem value={'MIT 2204'}>MIT2204 - Agile Software Development</MenuItem>
                          <MenuItem value={'MIT 2205'}>MIT2205 - IT Innovation</MenuItem>
                        </Select>
                    )
                }

{ 
                    formData.programId === 'MIT' && formData.semester === '3' && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MIT 3202'}>MIT3202 - Project Management & Professional Issues in IT</MenuItem>
                          <MenuItem value={'MIT 3203'}>MIT3203 - The Foundations of e-Learning</MenuItem>
                          <MenuItem value={'MIT 3204'}>MIT3204 - Data Mining and Warehousing</MenuItem>
                          <MenuItem value={'MIT 3205'}>MIT3205 - User Interface Design</MenuItem>
                          <MenuItem value={'MIT 3206'}>MIT3206 - Mobile Computing</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 'MIT' && formData.semester === '4' && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={'MIT 4201'}>MIT4201 - Software Quality Assurance</MenuItem>
                            <MenuItem value={'MIT 4202'}>MIT4202 - IT Strategy and Policy</MenuItem>
                            <MenuItem value={'MIT 4203'}>MIT4203 - Business Statistics and Operational Research</MenuItem>
                            <MenuItem value={'MIT 4204'}>MIT4204 - e-Business Applications and Strategies</MenuItem>
                        </Select>
                    )
                }

                {
                    formData.programId === 'MIS' && formData.semester === '1' && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MIS 1201'}>MIS1201 - Principles of Information Security</MenuItem>
                          <MenuItem value={'MIS 1202'}>MIS1202 - Cryptographic Systems</MenuItem>
                          <MenuItem value={'MIS 1203'}>MIS1203 - Information Risk Management and Audit</MenuItem>
                          <MenuItem value={'MIS 1204'}>MIS1204 - Network Security</MenuItem>
                          <MenuItem value={'MIS 1205'}>MIS1205 - Special Topics in Information Security</MenuItem>
                        </Select>
                    )
                }

{ 
                    formData.programId === 'MIS' && formData.semester === '2' && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MIS 3201'}>MIS3201 - Information and Coding Theory</MenuItem>
                          <MenuItem value={'MIS 3202'}>MIS3202 - Secure Software Systems</MenuItem>
                          <MenuItem value={'MIS 3203'}>MIS3203 - Information Security Governance</MenuItem>
                          <MenuItem value={'MIS 3204'}>MIS3204 - Incident Management</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 'MIS' && formData.semester === '3' && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={'MIS 2201'}>MIS2201 - Database Security</MenuItem>
                            <MenuItem value={'MIS 2202'}>MIS2202 - Digital Forensics</MenuItem>
                            <MenuItem value={'MIS 2203'}>MIS2203 - Security in Mobile and Wireless Networks</MenuItem>
                            <MenuItem value={'MIS 2204'}>MIS2204 - Data Mining for Information Security</MenuItem>
                        </Select>
                    )
                }
                
                {
                    formData.programId === 'MIS' && formData.semester === '4' && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'MIS 4201'}>MIS4201 - Cyber Security and Law</MenuItem>
                          <MenuItem value={'MIS 4202'}>MIS4202 - Multimedia Security and Digital Rights Management</MenuItem>
                          <MenuItem value={'MIS 4203'}>MIS4203 - Independent Studies in Information Security</MenuItem>
                        </Select>
                    )
                }

{
                    formData.programId === 'MBA' && formData.semester === '1' && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'BA 1001'}>BA1001 - Business Statistics</MenuItem>
                          <MenuItem value={'BA 1002'}>BA1002 - Organizational Data Management</MenuItem>
                          <MenuItem value={'BA 1003'}>BA1003 - Fundamentals of Data Science and Business Analytics</MenuItem>
                          <MenuItem value={'BA 1004'}>BA1004 - Data Programming</MenuItem>
                        </Select>
                    )
                }

{ 
                    formData.programId === 'MBA' && formData.semester === '2' && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'BA 2001'}>BA2001 - Statistical Inference for Analytics</MenuItem>
                          <MenuItem value={'BA 2002'}>BA2002 - Machine Learning and Pattern Recognition</MenuItem>
                          <MenuItem value={'BA 2003'}>BA2003 - Data Warehousing and Mining</MenuItem>
                          <MenuItem value={'BA 2004'}>BA2004 - Information Visualization</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 'MBA' && formData.semester === '3' && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={'BA 3001'}>BA3001 - Modelling and Simulation of Data</MenuItem>
                            <MenuItem value={'BA 3002'}>BA3002 - Predictive Analytics</MenuItem>
                            <MenuItem value={'BA 3003'}>BA3003 - Computational Social Science</MenuItem>
                            <MenuItem value={'BA 3004'}>BA3004 - Applied Optimization</MenuItem>
                            <MenuItem value={'BA 3005'}>BA3005 - Open Source Intelligence</MenuItem>
                            <MenuItem value={'BA 3006'}>BA3006 - Text Analytics</MenuItem>
                        </Select>
                    )
                }
                
                {
                    formData.programId === 'MBA' && formData.semester === '4' && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={'BA 4001'}>BA4001 - Big Data Analytics</MenuItem>  
                          <MenuItem value={'BA 4002'}>BA4002 - Analytics for Process Improvement</MenuItem>
                          <MenuItem value={'BA 4003'}>BA4003 - Intelligent Agents in Gaming</MenuItem>
                          <MenuItem value={'BA 4004'}>BA4004 - Confidential Information and Legal Regime</MenuItem>
                          <MenuItem value={'BA 4005'}>BA4005 - Independent Studies in Business Analytics</MenuItem>
                        </Select>
                    )
                }

                </FormControl>
             

              </Grid>

              <Grid item xs={12} >
<InputLabel id='Closing Date' required style={{ marginLeft: '13px' }}>Closing date</InputLabel>
              <FormControl fullWidth>
              <TextField id="demo-simple-select-label" type='date' ></TextField>
    </FormControl>
              </Grid>
            </Grid>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mr: 2, minWidth: 150, minHeight: 30, justifyItems: 'left',fontSize:18 }}
                                >
                                    Apply
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
export default Nomination; // Changed the export name to match the component name
