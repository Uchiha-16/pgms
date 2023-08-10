import React, { useState } from "react";
import {
  Card,
  CardContent,
  IconButton,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

const NotificationsComponent = ({ notifications, handleClose }) => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleCloseDialog = () => {
    setSelectedNotification(null);
  };

  return (
    <div>
      {notifications.map((notification) => (
        <Card
          key={notification.id}
          variant="outlined"
          sx={{
            my: 2,
            background: `linear-gradient(45deg, #495361, #747B8A)`, // Switched colors here
            cursor: "pointer",
            height: '70px',
            borderRadius: "10px",
          }}
          onClick={() => handleNotificationClick(notification)}
        >
          <CardContent>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item xs={10}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                    color: "white",
                  }}
                >
                  {notification.message}
                </Typography>
              </Grid>
              <Grid item>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={(event) => {
                    event.stopPropagation(); // Prevent card click propagation
                    handleClose(notification.id);
                  }}
                
                  sx={{ color: "white" }}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ))}

      {/* Dialog to display detailed notification */}
      <Dialog open={selectedNotification !== null} onClose={handleCloseDialog}>
        {selectedNotification && (
          <>
            <DialogTitle>Alert Details</DialogTitle>
            <DialogContent>
              <Typography>{selectedNotification.message}</Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default NotificationsComponent;
