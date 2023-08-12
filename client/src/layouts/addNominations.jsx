import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import NavbarComponent from '../components/NavbarComponent';
import { Box, Grid } from '@mui/material/';
import NominationsTable from '../components/NominationsTable';
import NominationComponent from '../components/NominationComponent';

class addUser extends Component {
    render() {
        // Sample data for NominationsTable
        const nominationsData = [
            {
                Request: 'Nomination Request 1',
                Function: 'Function 1',
                Status: 'Accepted',
                Date: '2023-08-10',
                Action: 'Edit',
            },
            // ... add more data items
        ];

        const nominationsColumns = ['Request', 'Function', 'Status', 'Date', 'Action'];

        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavbarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        <Grid item>
                            {/* content */}
                            <Grid item xs={12}>
                                <NominationComponent />
                                <NominationsTable columns={nominationsColumns} data={nominationsData} />
                            </Grid>
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default addUser;
