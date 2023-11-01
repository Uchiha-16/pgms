import React, { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import SideImageComponent from "./SideImageComponent";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import AlertBox from "./GeneralAlert";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Popup = () => {

  const users_URL = "/users/lecturerList"

  const [users, setUsers] = useState([]);

  useEffect(() => {
      // Call the get method to fetch user data
      axios.get(users_URL)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
      
  }, []);
  const [formData, setFormData] = useState({
    year: "",
    budget: "",
    rate: "",
    mis: "",
    mcs: "",
    mit: "",
    mba: "",
  });

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = (e) => {
    console.log(formData)
    e.preventDefault();
    axios
      .post("/intake/add", formData)
      .then((response) => {
        setOpenAlert(true);
        setAlertSeverity("success");
        setAlertMessage("New Intake Added successfully!");
        setTimeout(() => {
          setOpenAlert(false);
          navigate("/previousIntakeDetails", { replace: true });
        }, 3000);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  const [open, setOpen] = useState(false);

  const functionOpenPopup = () => {
    setOpen(true);
  };

  const closePopup = () => {
    setOpen(false);
  };

  const handleReset = () => {
    setFormData({
      year: "",
      budget: "",
      rate: "",
      mis: "",
      mcs: "",
      mit: "",
      mba: "",
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <AddCircleIcon
        sx={{
          marginLeft: "auto",
          marginTop: "auto",
          marginBottom: "auto",
          color: "#2196F3",
          fontSize: "30px",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))",
          cursor: "pointer",
          transition: "0.3s",
          ":hover": {
            transform: "rotate(90deg)",
          },
        }}
        onClick={functionOpenPopup}
      />
      <Dialog open={open} onClose={closePopup} fullWidth maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Grid container direction="row">
            <Grid container xs={4} sx={{ backgroundColor: "#1A73E8" }}>
              <SideImageComponent />
            </Grid>
            <Grid xs={8}>
              <IconButton
                onClick={closePopup}
                style={{ float: "right", marginBottom: 2 }}
              >
                <CloseIcon color="primary" />
              </IconButton>
              <Box
                sx={{
                  backgroundColor: "black",
                  textDecorationColor: "white",
                  mt: 7,
                  maxWidth: 120,
                  height: 30,
                  borderTopRightRadius: 50,
                  borderBottomRightRadius: 50,
                  textAlign: "center",
                }}
              >
                <Typography paddingTop={"2px"} color={"white"}>
                  Add Intake Details
                </Typography>
              </Box>
              <DialogContent>
                <Stack spacing={2} margin={2}>
                  <Grid container spacing={2}>
                  <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Duration (YYYY - YYYY)"
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Budget for the intake"
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Rate"
                        type="number"
                        name="rate"
                        value={formData.rate}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
              <FormControl fullWidth>
              
              <InputLabel id="demo-simple-select-label" required>MIS Coordinator</InputLabel>
                <Select
                  required
                  label="MIS Coordinator"
                  id="mis"
                  value={formData.mis}
                  onChange={handleChange}
                  name="mis"
                >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {`${user.firstname} ${user.lastname}`}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
              
              <InputLabel id="demo-simple-select-label" required>MCS Coordinator</InputLabel>
                <Select
                  required
                  label="MCS Coordinator"
                  id="mcs"
                  value={formData.mcs}
                  onChange={handleChange}
                  name="mcs"
                >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {`${user.firstname} ${user.lastname}`}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
              
              <InputLabel id="demo-simple-select-label" required>MIT Coordinator</InputLabel>
                <Select
                  required
                  label="MIT Coordinator"
                  id="mit"
                  value={formData.mit}
                  onChange={handleChange}
                  name="mit"
                >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {`${user.firstname} ${user.lastname}`}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
              
              <InputLabel id="demo-simple-select-label" required>MBA Coordinator</InputLabel>
                <Select
                  required
                  label="MBA Coordinator"
                  id="mba"
                  value={formData.mba}
                  onChange={handleChange}
                  name="mba"
                >
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {`${user.firstname} ${user.lastname}`}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
            </Grid>
                  </Grid>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        mt: 3,
                        mr: 2,
                        minWidth: 150,
                        minHeight: 30,
                        justifyItems: "left",
                        fontSize: 18,
                      }}
                    >
                      Add
                    </Button>
                    <Button
                      type="reset"
                      variant="contained"
                      onClick={handleReset}
                      sx={{
                        mt: 3,
                        minWidth: 150,
                        minHeight: 30,
                        justifyItems: "left",
                        fontSize: 18,
                        backgroundColor: "#7B809A",
                        ":hover": { background: "#495361" },
                      }}
                    >
                      Reset
                    </Button>
                  </div>
                </Stack>
              </DialogContent>
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
};

export default Popup;
