import React, { useState, useEffect } from "react";
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import SideImageComponent from "./SideImageComponent";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AlertBox from './GeneralAlert';
import useAuth from "../hooks/useAuth";

const Nomination = () => {
  const { auth } = useAuth();

  const [formData, setFormData] = useState({
    programId: '',
    semester: '',
    courseId: '',
    userID: auth.user_id,
  });

  const [nominations, setNominations] = useState([]); // State to store nominations
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

  useEffect(() => {
    // Fetch the list of current nominations from your backend API
    axios.get('http://localhost:8080/api/v1/nominations') // Replace with your API endpoint
      .then((response) => {
        setNominations(response.data);
      })
      .catch((error) => {
        console.error('Error fetching nominations:', error);
      });
  }, []); // Empty dependency array means this effect runs once on component mount

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/v1/nominations/add', formData)
      .then((response) => {
        console.log('Nomination Added:', response.data);
        setOpenAlert(true);
        setAlertSeverity('success');
        setAlertMessage('Application Sent!');
        setTimeout(() => {
          window.location.reload();
          setOpenAlert(false);
          navigate('/nominations', { replace: true });
        }, 3000);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  const handleReset = () => {
    setFormData({
      programId: '',
      semester: '',
      courseId: '',
      userID: 2,
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={functionOpenPopup} color="primary" variant="contained"
        sx={{
          position: 'absolute',
          top: '90px',
          right: '20px',
          margin: '16px',
        }}
      >
        Apply for a Course
      </Button>
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Grid container direction="row">
            <Grid container xs={4} sx={{ backgroundColor: "#1A73E8" }}>
              <SideImageComponent />
            </Grid>
            <Grid xs={8}>
              <IconButton onClick={closePopup} style={{ float: 'right', marginBottom: 2 }}>
                <CloseIcon color="primary" />
              </IconButton>
              <Box sx={{
                backgroundColor: 'black',
                textDecorationColor: 'white',
                mt: 7,
                maxWidth: 200,
                height: 30,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                textAlign: "center"
              }}>
                <Typography paddingTop={"2px"} color={"white"}>Apply for a Course</Typography>
              </Box>
              <DialogContent>
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
                          {/* Map over nominations to populate the Program menu items */}
                          {nominations.map(nomination => (
                            <MenuItem key={nomination.id} value={nomination.program}>{nomination.program}</MenuItem>
                          ))}
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
                          name="semester"
                        >
                          {/* Map over nominations to populate the Semester menu items */}
                          {nominations.map(nomination => (
                            <MenuItem key={nomination.id} value={nomination.semester}>{nomination.semester}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" required>Course</InputLabel>
                        {formData.programId && formData.semester && (
                          <Select
                            required
                            label="Course"
                            id="course"
                            value={formData.courseId}
                            onChange={handleChange}
                            name="courseId"
                          >
                            {nominations
                              .filter(nomination => nomination.program === formData.programId && nomination.semester === formData.semester)
                              .map(nomination => (
                                <MenuItem key={nomination.id} value={nomination.course}>{nomination.course}</MenuItem>
                              ))}
                          </Select>
                        )}
                      </FormControl>
                    </Grid>
                  </Grid>
                </Stack>
              </DialogContent>
              <DialogActions>
                <Button type="submit" variant="contained" sx={{ mt: 3, mr: 2, minWidth: 150, minHeight: 30, justifyItems: 'left', fontSize: 18 }}>
                  Apply
                </Button>
                <Button
                  type="reset"
                  variant="contained"
                  onClick={handleReset}
                  sx={{ mt: 3, minWidth: 150, minHeight: 30, justifyItems: 'left', fontSize: 18, backgroundColor: '#7B809A', ":hover": { background: '#495361' } }}
                >
                  Reset
                </Button>
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

export default Nomination;
