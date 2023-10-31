import React, { useState } from "react";
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
  const [formData, setFormData] = useState({
    duration: { startYear: "", endYear: "" },
    budget: "",
    rate: "",
    coordinatorMIS: "",
    coordinatorMCS: "",
    coordinatorMIT: "",
    coordinatorMBA: "",
  });

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For fields inside "duration", handle them separately
    if (name.startsWith("duration.")) {
      const subField = name.split(".")[1];
      setFormData({
        ...formData,
        duration: {
          ...formData.duration,
          [subField]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/register", formData)
      .then((response) => {
        setOpenAlert(true);
        setAlertSeverity("success");
        setAlertMessage("User Added successfully!");
        setTimeout(() => {
          window.location.reload();
          setOpenAlert(false);
          navigate("/users", { replace: true });
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
      duration: { startYear: "", endYear: "" },
      budget: "",
      rate: "",
      coordinatorMIS: "",
      coordinatorMCS: "",
      coordinatorMIT: "",
      coordinatorMBA: "",
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
                  Add Details
                </Typography>
              </Box>
              <DialogContent>
                <Stack spacing={2} margin={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="Start Year"
                        type="date"
                        name="duration.startYear"
                        value={formData.duration.startYear}
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true, // This shrinks the label to the top when there's input
                        }}
                        sx={{ mt: 1 }} // Add margin-top to separate the label and input
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        required
                        fullWidth
                        label="End Year"
                        type="date"
                        name="duration.endYear"
                        value={formData.duration.endYear}
                        onChange={handleChange}
                        InputLabelProps={{
                          shrink: true, // This shrinks the label to the top when there's input
                        }}
                        sx={{ mt: 1 }} // Add margin-top to separate the label and input
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
                      <TextField
                        required
                        fullWidth
                        label="Coordinator MIS"
                        name="coordinatorMIS"
                        value={formData.coordinatorMIS}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Coordinator MCS"
                        name="coordinatorMCS"
                        value={formData.coordinatorMCS}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Coordinator MIT"
                        name="coordinatorMIT"
                        value={formData.coordinatorMIT}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Coordinator MBA"
                        name="coordinatorMBA"
                        value={formData.coordinatorMBA}
                        onChange={handleChange}
                      />
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
