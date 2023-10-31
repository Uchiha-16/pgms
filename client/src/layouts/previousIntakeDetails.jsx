import React from 'react';
import PreviousIntakeDetails from '../components/PreviousIntakeDetails'; // Import the PreviousIntakeDetails component
import TableHeaderComponent from '../components/TableHeaderComponent';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';


const Layout = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          {/* Sidebar or Navigation component */}
        </Grid>
        <Grid container xs={9.3} sx={{ 
          display: 'grid', 
          gridTemplateRows: '16.5% auto 10%',
          height: '100vh', 
        }}>
          <Grid item>
            <HeaderComponent />
          </Grid>
          <Grid item>
            <NavBarComponent />
            <TableHeaderComponent left="Previous Intake Details" right=""  />
            <PreviousIntakeDetails />
          </Grid>
          <Grid item>
            <FooterComponent />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
