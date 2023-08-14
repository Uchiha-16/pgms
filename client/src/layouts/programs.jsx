import React, { Component } from 'react';
import GeneralProgramTable from '../components/GeneralProgramTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import useAxiosMethods from '../hooks/useAxiosMethods';
import AddCourse from '../components/AddCourseComponent';

const users_URL = "/Users/getUsers"

const Layout1 = () => {
    const [users, setUsers] = useState([]);
    const {get} = useAxiosMethods();
    
    useEffect(() => {
        
            try {
                get(users_URL, setUsers);

            } catch (error) {
                console.log(error)
            }
    }, []);

    const columns = ['Semester', 'Code', 'Course Name', 'Lecturer', 'Credits'];
    // const data = users.map(user => ({
    //     NAME: `${user.firstName} ${user.lastName}`,
    //     ROLE: user.role,
    //     STATUS: 'ONLINE', // Assuming you want to display a static status for all users
    //     EMAIL: user.email,
    //     ACTION: 'Edit',
    // }));
    const program = [
        {
            title: 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE',
            pc: 'Program Coordinator',
            pcName: 'Mr. K P M K Silva',
        }
        
    ];

    return (
        <GeneralProgramTable columns={columns} program={program} />
    );
};

class programs extends Component {
    render() {
        return (
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                        <NavBarComponent />
                    </Grid>
                    <Grid container xs={9.3} sx={{ 
                        display: 'grid', 
                        gridTemplateRows: '149px auto 10%',
                        }}>
                        {/*============================== Header ==============================*/}
                        <Grid item>
                            <HeaderComponent />
                        </Grid>
                        {/*=============================== Main ===============================*/}
                        <Grid item>
                            {/* content */}
                            <AddCourse />
                            <Layout1 />
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

export default programs;