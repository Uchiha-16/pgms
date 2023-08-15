import React, { Component } from 'react';
import GeneralProgramTable from '../components/GeneralProgramTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import axios from '../api/axios';
import AddCourse from '../components/AddCourseComponent';

const courses_URL = "/courses/viewcourses"

const Layout1 = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(courses_URL); // Change the URL according to your backend setup
                console.log(response.data.coursesList);
                setCourses(response.data.coursesList);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    const columns = ['Semester', 'Code', 'Course Name', 'Lecture Hall', 'Credits'];
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
        },
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