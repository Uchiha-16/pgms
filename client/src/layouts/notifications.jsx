import React, { Component } from "react";
import NotificationsComponent from "../components/NotificationsComponent";
import HeaderComponent from "../components/HeaderComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Box, Grid, Paper, Typography } from "@mui/material/";

const table = () => {
  const [users, setUsers] = useState([]);
  const {get} = useAxiosMethods();
  
  useEffect(() => {
      
          try {
              get(users_URL, setUsers);

          } catch (error) {
              console.log(error)
          }
  }, []);

  const columns = ['NAME', 'ROLE', 'STATUS', 'EMAIL', 'ACTION'];
  const data = users.map(user => ({
      NAME: `${user.firstName} ${user.lastName}`,
      ROLE: user.role,
      STATUS: 'ONLINE', // Assuming you want to display a static status for all users
      EMAIL: user.email,
      ACTION: 'Edit',
  }));

  return (
      <GeneralTable columns={columns} data={data} />
  );
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     notifications: [
  //       { id: 1, message: "Dummy notification 1", open: true },
  //       { id: 2, message: "Dummy notification 2", open: true },
  //       { id: 3, message: "Dummy notification 3", open: true },
  //       { id: 4, message: "Dummy notification 4", open: true },
  //       { id: 5, message: "Dummy notification 5", open: true },
  //     ], // Initialize an array of dummy notifications
  //   };
  // }

  // handleCloseNotification = (id) => {
  //   const updatedNotifications = this.state.notifications.map((notification) =>
  //     notification.id === id ? { ...notification, open: false } : notification
  //   );

  //   this.setState({ notifications: updatedNotifications });
  // };
}
  class NotificationsPage extends Component {
  render() {
    return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <NavbarComponent />
          </Grid>
          <Grid
            item
            container
            xs={9.3}
            sx={{ display: "grid", gridTemplateRows: "repeat(3, 1fr)" }}
          >
            <Grid item>
              <HeaderComponent />
            </Grid>
            <Grid item>
              {/* Content */}
              <Grid container justifyContent="center">
                <Grid item xs={12} sm={7} sx={{ mt: -12 }}>
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
            <Grid item>{/* Other components */}</Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default NotificationsPage;
