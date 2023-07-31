import React, { Component } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';


const Layout1 = () => {
    const columns = ['NAME', 'FUNCTION', 'STATUS', 'EMPLOYED', 'ACTION'];
    const data = [
        { NAME: 'Johny Michael', FUNCTION: 'Deputy Registrar', STATUS: 'Online', EMPLOYED: '2019/01/01', ACTION: 'Edit' },
        { NAME: 'Johny Michael', FUNCTION: 'Deputy Registrar', STATUS: 'Online', EMPLOYED: '2019/01/01', ACTION: 'Edit' },
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
                        gridTemplateRows: '16.5% 73.5% 10%',
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