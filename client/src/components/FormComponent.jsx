import React, { useState, useEffect } from "react";
import { Avatar, Typography, Paper, IconButton, Input } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import useAxiosMethods from "../hooks/useAxiosMethods";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const { userID } = useParams();
  const [user, setUser] = useState(null);
  const { get, put } = useAxiosMethods();

  const users_URL = `users/getUser/${userID}`;

  useEffect(() => {
    get(users_URL, setUser);
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle image upload here if selectedImage is not null
    // Example: Upload selectedImage to the server and update user's profile image

    put(users_URL, formData)
      .then((response) => {
        console.log("Data updated successfully:", response.data);
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
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
    fontSize: "1.2rem",
    marginBottom: "20px",
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
    marginLeft: "570px",
    fontSize: "0.8rem",
    // marginTop: "50px",
    backgroundColor: "#2196F3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1976D2",
    },
  };

  const addButtonStyle = {
    marginLeft: "490px",
    fontSize: "0.8rem",
    marginTop: "30px",
    marginBottom: "10px",
    backgroundColor: "#2196F3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1976D2",
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} style={paperStyle}>
        <div style={{ position: "relative" }}></div>
        <div style={roleStyle}>
          <a href="" style={sectionStyle}>
            Previous
          </a>
          <Button
            variant="outlined"
            style={addButtonStyle}
            onClick={handleEditToggle}
          >
            Add
          </Button>
          <Button
            variant="outlined"
            style={editButtonStyle}
            onClick={handleEditToggle}
          >
            {isEditing ? "Save" : "Edit"}
          </Button>
        </div>
        <div style={infoStyle}>
          <div edit>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Duration(Years):
              </Typography>
              {isEditing ? (
                <TextField
                  name="duration"
                  variant="outlined"
                  size="small"
                  style={contentStyle}
                  value={formData.duration || user?.duration}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.duration}
                </Typography>
              )}
            </div>

            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Budget for the intake:
              </Typography>
              {isEditing ? (
                <>
                  <TextField
                    name="budget"
                    variant="outlined"
                    size="small"
                    style={contentStyle}
                    value={formData.budget || user?.budget}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.budget}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Rate:
              </Typography>
              {isEditing ? (
                <TextField
                  name="rate"
                  variant="outlined"
                  size="small"
                  style={contentStyle}
                  value={formData.rate}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.rate}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MIS:
              </Typography>
              {isEditing ? (
                <>
                  <TextField
                    name="MISname"
                    variant="outlined"
                    size="small"
                    style={contentStyle}
                    value={formData.MISname}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.MISname}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MCS:
              </Typography>
              {isEditing ? (
                <>
                  <TextField
                    name="MCSname"
                    variant="outlined"
                    size="small"
                    style={contentStyle}
                    value={formData.MCSname}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.MCSname}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MIT:
              </Typography>
              {isEditing ? (
                <>
                  <TextField
                    name="MITname"
                    variant="outlined"
                    size="small"
                    style={contentStyle}
                    value={formData.MIT}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.MITname}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Coordinator MBA:
              </Typography>
              {isEditing ? (
                <>
                  <TextField
                    name="MBAname"
                    variant="outlined"
                    size="small"
                    style={contentStyle}
                    value={formData.MBAname}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.MBAname}
                </Typography>
              )}
            </div>
          </div>
        </div>
      </Paper>
    </form>
  );
}

export default Profile;
