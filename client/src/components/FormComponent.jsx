import React, { useState, useEffect } from "react";
import { Typography, Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import useAxiosMethods from "../hooks/useAxiosMethods";
import PopupComponent2 from "./PopupComponent2";

const Form = () => {

  const [formData, setFormData] = useState([]);
  const [budget, setBudget] = useState([]);
  const { get } = useAxiosMethods();

  const currentIntake_URL = `/intake/getCurrentIntake`;
  const updateIntake_URL = `/intake/updateIntake/`

  useEffect(() => {
    // Fetch data from the server using Axios
    get(currentIntake_URL, setBudget)
  }, []); // Make sure to include the dependency

  console.log(budget);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // put(updateIntake_URL, formData)
    //   .then((response) => {
    //     console.log("Data updated successfully:", response.data);
    //     setIsEditing(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error updating data:", error);
    //   });
  };

  const paperStyle = {
    width: "70%",
    height: "auto",
    margin: "50px auto",
    position: "relative",
    textAlign: "center",
    borderRadius: "10px",
  };

  const roleStyle = {
    textAlign: "left",
    paddingLeft: "9rem",
    marginBottom: "40px",
    color: "#42424A",
    fontFamily: "Inter",
    fontSize: "12px",
  };

  const infoStyle = {
    textAlign: "left",
    padding: "20px",
    marginLeft: "40px",
    borderTop: "1px solid #F0F2F5",
    width: "28rem",
  };

  const sectionStyle = {
    fontSize: "1.1rem",
    width: "150px",
    color: "#444",
    fontWeight: "bold",
  };

  const detailContainerStyle = {
    display: "flex",
    marginBottom: "20px",
  };

  const labelStyle = {
    width: "150px",
    color: "#444",
    fontWeight: "bold",
  };

  const contentStyle = {
    flex: "1",
    color: "#444",
    fontSize: "14px",
  };

  const editButtonStyle = {
    top: "40px",
    marginLeft: "630px",
    fontSize: "0.8rem",
    backgroundColor: "#2196F3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1976D2",
    },
  };

  // const addButtonStyle = {
  //   marginLeft: "490px",
  //   fontSize: "0.8rem",
  //   marginTop: "30px",
  //   marginBottom: "10px",
  //   backgroundColor: "#2196F3",
  //   color: "#fff",
  //   "&:hover": {
  //     backgroundColor: "#1976D2",
  //   },
  // };

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} style={paperStyle}>
        <div style={roleStyle}>
          <a href="/previousIntakeDetails" style={sectionStyle}>
            Previous Intake Details
          </a>
          <div
            style={{
              position: "absolute",
              top: "5px",
              right: "30px",
            }}
          >
            <PopupComponent2 />
          </div>
        </div>
        <div style={infoStyle}>
          <div edit>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Duration:
              </Typography>
              <Typography variant="body2" style={contentStyle}>
                {budget.length > 0 ? `${budget[0].year}` : ''}
              </Typography>
            </div>

            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Budget for the intake:
              </Typography>
              <Typography variant="body2" style={contentStyle}>
                {budget.length > 0 ? budget[0].budget : ''}
              </Typography>
            </div>

            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Rate:
              </Typography>
              <Typography variant="body2" style={contentStyle}>
                {budget.length > 0 ? budget[0].rate : ''}
              </Typography>
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MIS:
              </Typography>
              <Typography variant="body2" style={contentStyle}>
                {budget.length > 0 ? `${budget[0].mis.firstname} ${budget[0].mis.lastname}` : ''}
              </Typography>
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MCS:
              </Typography>
              <Typography variant="body2" style={contentStyle}>
                {budget.length > 0 ? `${budget[0].mcs.firstname} ${budget[0].mcs.lastname}` : ''}
              </Typography>
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MIT:
              </Typography>
              <Typography variant="body2" style={contentStyle}>
                {budget.length > 0 ? `${budget[0].mit.firstname} ${budget[0].mit.lastname}` : ''}
              </Typography>
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MBA:
              </Typography>
              <Typography variant="body2" style={contentStyle}>
                {budget.length > 0 ? `${budget[0].mba.firstname} ${budget[0].mba.lastname}` : ''}
              </Typography>
            </div>
          </div>
        </div>
      </Paper>
    </form>
  );
}

export default Form;
