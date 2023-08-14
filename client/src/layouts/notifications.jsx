import React, { Component } from "react";
import NotificationsComponent from "../components/NotificationsComponent";
import HeaderComponent from "../components/HeaderComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import { Box, Grid, Paper, Typography } from "@mui/material/";
import { bottom } from "@popperjs/core";

class NotificationsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        { id: 1, message: "Dummy notification 1", open: true },
        { id: 2, message: "Dummy notification 2", open: true },
        { id: 3, message: "Dummy notification 3", open: true },
      ], // Initialize an array of dummy notifications
    };
  }

  handleCloseNotification = (id) => {
    const updatedNotifications = this.state.notifications.map((notification) =>
      notification.id === id ? { ...notification, open: false } : notification
    );

    this.setState({ notifications: updatedNotifications });
  };

  render() {
    return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <NavbarComponent />
          </Grid>
          <Grid
            container
            xs={9.3}
            sx={{ display: "grid", gridTemplateRows: "149px auto 10%" }}
          >
            <Grid item>
              <HeaderComponent />
            </Grid>
            <Grid item>
              {/* Content */}
              <Grid container justifyContent="center" sx={{ paddingBottom: 20 }}>
                <Grid item xs={12} sm={7}>
                  <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      align="left"
                      sx={{ fontFamily: "Inter", fontWeight: "bold" }}
                    >
                      Alerts
                    </Typography>
                    <NotificationsComponent
                      notifications={this.state.notifications}
                      handleClose={this.handleCloseNotification}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
                        {/*============================== Footer ==============================*/}
                        <Grid item>
                            <FooterComponent />
                        </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default NotificationsPage;