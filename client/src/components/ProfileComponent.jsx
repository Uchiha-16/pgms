import React, { useState, useEffect } from "react";
import {
  Avatar,
  Typography,
  Paper,
  IconButton,
  Input,
} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosMethods from "../hooks/useAxiosMethods";
import axios from "../api/axios";


function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    role: "",
    contact: "",
    email: "",
  });
  const { userID } = useParams();
  const [user, setUser] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { get } = useAxiosMethods();
  const navigate = useNavigate();
  
  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');

  const users_URL = `users/getUser/${userID}`;
  const update_user = `users/updateUser/${userID}`;

  useEffect(() => {
    get(users_URL, setUser);
  }, []);

  // console.log(formData);

  const profileImage = user?.profileImage || "user.png";

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    setSelectedImage(URL.createObjectURL(uploadedImage));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    axios.post(update_user, formData)
      .then((response) => {
        console.log(response);
        setOpenAlert(true);
        setAlertSeverity('success');
        setAlertMessage('User Details Updated successfully!');
        // Handle success, display success message or redirect if needed
        setTimeout(() => { 
          //refresh the page and leave the popup component
          window.location.reload();
          setOpenAlert(false);
          navigate(`/profile/${userID}`, { replace: true });
        }, 2000);
      })
      .catch((error) => {
        console.error('Error updating user:', error);
        // Handle error, display error message
      });

    
    setIsEditing(false);
  };
  
  const paperStyle = {
    width: "70%",
    height: "auto",
    margin: "50px auto",
    position: "relative",
    textAlign: "center",
    borderRadius: "10px",
  };

  const avatarStyle = {
    width: "140px",
    height: "140px",
    position: "absolute",
    top: "-80px",
    left: "150px",
    transform: "translateX(-50%)",
    boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.20)",
  };

  const plusIconStyle = {
    position: "absolute",
    bottom: "-30px",
    left: "200px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: "2px",
  };

  const nameStyle = {
    textAlign: "left",
    paddingLeft: "9rem",
    paddingTop: 30,
    marginBottom: "2px",
    color: "#000",
    fontFamily: "Inter",
    fontSize: "20px",
    fontWeight: "700",
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
    marginLeft: "500px",
    fontSize: "0.8rem",
    marginTop: "-40px",
    backgroundColor: "#2196F3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1976D2",
    },
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={3} style={paperStyle}>
        <div style={{ position: "relative" }}>
          <Avatar
            alt="Profile Photo"
            src={selectedImage || require(`../assets/images/${profileImage}`)}
            style={avatarStyle}
          />
          <input
            accept="image/*"
            type="file"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <IconButton
              aria-label="Upload Profile Photo"
              component="span"
              style={plusIconStyle}
            >
              <PhotoCameraIcon fontSize="small" />
            </IconButton>
          </label>
        </div>
        <div style={roleStyle}>
          <Typography variant="h5" style={nameStyle}>
            {user?.firstname} {user?.lastname}
          </Typography>
          <Typography variant="body1" style={roleStyle}>
            { user?.role }
          </Typography>
        </div>
        <div style={infoStyle}>
          <Typography variant="h6" style={sectionStyle}>
            Profile Information:
          </Typography>
          <div edit>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Position:
              </Typography>
              {isEditing ? (
                <TextField
                  name="role"
                  variant="outlined"
                  size="small"
                  style={contentStyle}
                  value={formData.role || user?.role}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.role}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Full Name:
              </Typography>
              {isEditing ? (
                <>
                  <TextField
                    name="firstname"
                    variant="outlined"
                    size="small"
                    style={contentStyle}
                    value={formData.firstname || user?.firstname}
                    onChange={handleInputChange}
                  />
                  <TextField
                    name="lastname"
                    variant="outlined"
                    size="small"
                    style={contentStyle}
                    value={formData.lastname || user?.lastname}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.firstname} {user?.lastname}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Mobile:
              </Typography>
              {isEditing ? (
                <TextField
                  name="contact"
                  variant="outlined"
                  size="small"
                  style={contentStyle}
                  value={formData.contact || user?.contact}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.contact}
                </Typography>
              )}
            </div>
            <div style={detailContainerStyle}>
              <Typography variant="body2" style={labelStyle}>
                Email:
              </Typography>
              {isEditing ? (
                <TextField
                  name="email"
                  variant="outlined"
                  size="small"
                  style={contentStyle}
                  value={formData.email || user?.email}
                  onChange={handleInputChange}
                />
              ) : (
                <Typography variant="body2" style={contentStyle}>
                  {user?.email}
                </Typography>
              )}
            </div>
          </div>
        </div>
        <Button
          variant="outlined"
          style={editButtonStyle}
          onClick={isEditing ? handleSubmit : handleEditToggle}
        >
          {isEditing ? "Save" : "Edit"}
        </Button>
      </Paper>
    </form>
  );
}

export default Profile;
