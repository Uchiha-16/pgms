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
    programId: 0,
    semester: 0,
    courseId: 0,
    closingDate: '', // Add the closingDate property
    userID: auth.user_id,
  });
  

  /* useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      userID: auth.user_id,
    }));
  }, [auth.user_id]); */

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
    axios.post('http://localhost:8080/api/v1/nominations/open', formData)
      .then((response) => {
        console.log('Nomination Opened:', response.data);
        setOpenAlert(true);
        setAlertSeverity('success');
        setAlertMessage('Nomination Opened!');
        // Handle success, display success message or redirect if needed
        setTimeout(() => {
          window.location.reload();
          setOpenAlert(false);
          navigate('/nominations', { replace: true }); // Replace '/new-page-url' with the actual URL you want to navigate to
        }, 3000);
      })
      .catch((error) => {
        console.error('Error opening nomination:', error);
        setOpenAlert(true);
        setAlertSeverity('error');
        setAlertMessage('Failed to open nomination. Please try again.');
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
        programId: 0,
        semester:0,
        courseId: 0,
        closingDate: '',
      });
    };

    return (
        <div style={{textAlign:'center'}}>
      
            {/* <h1>Nomination Application</h1> */}
            <Button onClick={functionOpenPopup} color="primary" variant="contained"
            sx={{
              // position: 'auto', // Position absolutely
              top: '-100px', // Place it at the top
              right: '-500px', // Place it on the left
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
                    <MenuItem value={1}>Master of Computer Science</MenuItem>
                    <MenuItem value={2}>Master of Information Technology</MenuItem>
                    <MenuItem value={3}>Master of Information Security</MenuItem>
                    <MenuItem value={4}>Master of Business Analytics</MenuItem>
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
                    <MenuItem value={1}>Semester 1</MenuItem>
                    <MenuItem value={2}>Semester 2</MenuItem>
                    <MenuItem value={3}>Semester 3</MenuItem>
                    <MenuItem value={4}>Semester 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
              <Grid item xs={12}>
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" required>Course</InputLabel>

                { 
                    formData.programId === 1 && formData.semester === 1 && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={1}>MCS1201 - Advanced Algorithms</MenuItem>
                          <MenuItem value={2}>MCS1202 - Advanced Software Engineering</MenuItem>
                          <MenuItem value={3}>MCS1203 - Advanced Database Systems</MenuItem>
                          <MenuItem value={4}>MCS1204 - Selected Topics in Computer Science</MenuItem>
                          <MenuItem value={5}>MCS1205 - Principles of Programming Languages</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 1 && formData.semester === 2 && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={6}>MCS2201 - Information Systems Security</MenuItem>
                            <MenuItem value={7}>MCS2202 - Advanced Concepts in Data Communications Networks</MenuItem>
                            <MenuItem value={8}>MCS2203 - Data Analytics & Machine Learning</MenuItem>
                            <MenuItem value={9}>MCS2204 - Theoretical Computing</MenuItem>
                        </Select>
                    )
                }

                {
                    formData.programId === 1 && formData.semester === 3 && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={10}>MCS3201 - Intelligent Systems</MenuItem>
                          <MenuItem value={11}>MCS3202 - Systems Modelling & Simulation</MenuItem>
                          <MenuItem value={12}>MCS3205 - Distributed Systems</MenuItem>
                          <MenuItem value={13}>MCS3206 - Advanced Computer Graphics and Gaming</MenuItem>
                          <MenuItem value={14}>MCS3207 - Bioinformatics</MenuItem>
                          <MenuItem value={15}>MCS3208 - Research Methods</MenuItem>
                        </Select>
                    )
                }

{ 
                    formData.programId === 1 && formData.semester === 4 && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={16}>MCS4201 - Cognitive Systems</MenuItem>
                          <MenuItem value={17}>MCS4202 - Embedded Systems</MenuItem>
                          <MenuItem value={18}>MCS4203 - Image Processing and Vision</MenuItem>
                          <MenuItem value={19}>MCS4204 - Software Project Management and Quality Assurance</MenuItem>
                          <MenuItem value={20}>MCS4205 - Natural Algorithms</MenuItem>
                          <MenuItem value={21}>MCS4206 - Mobile Computing</MenuItem>
                          <MenuItem value={22}>MCS4207 - Enterprise Web Architecture</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 2 && formData.semester === 1 && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={23}>MIT1201 - Program Design and Programming</MenuItem>
                            <MenuItem value={24}>MIT1202 - Computer Systems</MenuItem>
                            <MenuItem value={25}>MIT1203 - Database Management Systems</MenuItem>
                            <MenuItem value={26}>MIT1204 - Systems Analysis and Modelling</MenuItem>
                        </Select>
                    )
                }
                
                {
                    formData.programId === 2 && formData.semester === 2 && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={27}>MIT2201 - Computer Networking</MenuItem>
                          <MenuItem value={28}>MIT2202 - Software Engineering</MenuItem>
                          <MenuItem value={29}>MIT2203 - Data and Network Security</MenuItem>
                          <MenuItem value={30}>MIT2204 - Agile Software Development</MenuItem>
                          <MenuItem value={31}>MIT2205 - IT Innovation</MenuItem>
                        </Select>
                    )
                }

{ 
                    formData.programId === 2 && formData.semester === 3 && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={32}>MIT3202 - Project Management & Professional Issues in IT</MenuItem>
                          <MenuItem value={33}>MIT3203 - The Foundations of e-Learning</MenuItem>
                          <MenuItem value={34}>MIT3204 - Data Mining and Warehousing</MenuItem>
                          <MenuItem value={35}>MIT3205 - User Interface Design</MenuItem>
                          <MenuItem value={36}>MIT3206 - Mobile Computing</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 2 && formData.semester === 4 && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={37}>MIT4201 - Software Quality Assurance</MenuItem>
                            <MenuItem value={38}>MIT4202 - IT Strategy and Policy</MenuItem>
                            <MenuItem value={39}>MIT4203 - Business Statistics and Operational Research</MenuItem>
                            <MenuItem value={40}>MIT4204 - e-Business Applications and Strategies</MenuItem>
                        </Select>
                    )
                }

                {
                    formData.programId === 3 && formData.semester === 1 && (

                        <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={41}>MIS1201 - Principles of Information Security</MenuItem>
                          <MenuItem value={42}>MIS1202 - Cryptographic Systems</MenuItem>
                          <MenuItem value={43}>MIS1203 - Information Risk Management and Audit</MenuItem>
                          <MenuItem value={44}>MIS1204 - Network Security</MenuItem>
                          <MenuItem value={45}>MIS1205 - Special Topics in Information Security</MenuItem>
                        </Select>
                    )
                }

{ 
                    formData.programId === 3 && formData.semester === 2 && (
                      
                      <Select
                        required
                        label="Course"
                        id="course"
                        value={formData.courseId}
                        onChange={handleChange}
                        name="courseId">
                          <MenuItem value={46}>MIS3201 - Information and Coding Theory</MenuItem>
                          <MenuItem value={47}>MIS3202 - Secure Software Systems</MenuItem>
                          <MenuItem value={48}>MIS3203 - Information Security Governance</MenuItem>
                          <MenuItem value={49}>MIS3204 - Incident Management</MenuItem>
                      </Select>
                    )
                }
                                
                {
                    formData.programId === 3 && formData.semester === 3 && (
                      
                        <Select
                          required
                          label="Course"
                          id="course"
                          value={formData.courseId}
                          onChange={handleChange}
                          name="courseId">
                            <MenuItem value={50}>MIS2201 - Database Security</MenuItem>
                            <MenuItem value={51}>MIS2202 - Digital Forensics</MenuItem>
                            <MenuItem value={52}>MIS2203 - Security in Mobile and Wireless Networks</MenuItem>
                            <MenuItem value={53}>MIS2204 - Data Mining for Information Security</MenuItem>
                        </Select>
                    )
                }
                
                {
                    formData.programId === 3 && formData.semester === 4 && (

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
                    formData.programId === 4 && formData.semester === 1 && (

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
                    formData.programId === 4 && formData.semester === 2 && (
                      
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
                    formData.programId === 4 && formData.semester === 3 && (
                      
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
                    formData.programId === 4 && formData.semester === 4 && (

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
              <TextField 
              label="Closing Date"
              name="closingDate" 
              type= "date" 
              variant="outlined" 
              id="closingDate"
              value={formData.closingDate}
              onChange={handleChange}
              required/>

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
