import React, { Component } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';


const Layout1 = () => {
    const columns = ['NAME', 'FUNCTION', 'STATUS', 'EMPLOYED', 'ACTION'];
    const data = [
        { NAME: 'Johny Michael', FUNCTION: 'Deputy Registrar', STATUS: 'ONLINE', EMPLOYED: '2019/01/01', ACTION: 'Edit' },
        { NAME: 'Alexa Liras', FUNCTION: 'Head', STATUS: 'ONLINE', EMPLOYED: '11/01/19', ACTION: 'Edit' },
        { NAME: 'Laurent Perrier', FUNCTION: 'Lecturer', STATUS: 'OFFLINE', EMPLOYED: '19/07/17', ACTION: 'Edit' },
        { NAME: 'Michael Levi', FUNCTION: 'Lecturer', STATUS: 'ONLINE', EMPLOYED: '24/12/08', ACTION: 'Edit' },
        { NAME: 'Richard Gran', FUNCTION: 'Visiting Lecturer', STATUS: 'OFFLINE', EMPLOYED: '04/10/21', ACTION: 'Edit' },
        { NAME: 'Miriam Eric', FUNCTION: 'Technical Assistant', STATUS: 'OFFLINE', EMPLOYED: '14/09/20', ACTION: 'Edit' },
        { NAME: 'Anne Marie', FUNCTION: 'Head', STATUS: 'ONLINE', EMPLOYED: '22/05/18', ACTION: 'Edit' },
        { NAME: 'Nick Daniel', FUNCTION: 'Visiting Lecturer', STATUS: 'OFFLINE', EMPLOYED: '11/01/19', ACTION: 'Edit' },
        { NAME: 'Alexa Liras', FUNCTION: 'Head', STATUS: 'ONLINE', EMPLOYED: '11/01/19', ACTION: 'Edit' },
    ];

    return <GeneralTable columns={columns} data={data} />;
};

class users extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavBarComponent />
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
                            {/* content */}
                            <Layout1 />
                        </Grid>
                        <Grid item>
                            <FooterComponent />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default users;