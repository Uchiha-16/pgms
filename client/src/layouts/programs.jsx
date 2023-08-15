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
    
    const program = [
        {
            title: 'MASTER OF COMPUTER SCIENCE',
            pc: 'Program Coordinator',
            pcName: 'Mr. K P M K Silva',
        },
        {
            title: 'MASTER OF INFORMATION SYSTEMS',
            pc: 'Program Coordinator',
            pcName: 'Mr. K P M K Silva',
        },
        {
            title: 'MASTER OF INFORMATION TECHNOLOGY',
            pc: 'Program Coordinator',
            pcName: 'Mr. K P M K Silva',
        },
        {
            title: 'MASTER OF BUISNESS ANALYSIS',
            pc: 'Program Coordinator',
            pcName: 'Mr. K P M K Silva',
        }
    ];

        const dataP1 = courses.map(course => ({
            'Semester': course[3],
            'Code' : course[1],
            'Course Name': course[2], 
            'Lecture Hall': course[5],
            'Credits': course[4],
        }
        ));

    const dataP2 = [
        {
            'Semester': '1',
            'Code': 'MIS1201',
            'Course Name': 'Principles of Information Security',
            'Lecturer': 'W002',
            'Credits': '3',
        },
        {
            'Semester': '1',
            'Code': 'MIS1202',
            'Course Name': 'Cryptographic Systems',
            'Lecturer': 'W002',
            'Credits': '3',
        },
        
    ];

    const dataP3 = [
        {
            'Semester': '1',
            'Code': 'MIS1201',
            'Course Name': 'Principles of Information Security',
            'Lecturer': 'W002',
            'Credits': '3',
        },
        {
            'Semester': '1',
            'Code': 'MIS1202',
            'Course Name': 'Cryptographic Systems',
            'Lecturer': 'W002',
            'Credits': '3',
        },
        
    ];

    const dataP4 = [
        {
            'Semester': '1',
            'Code': 'MIS1201',
            'Course Name': 'Principles of Information Security',
            'Lecturer': 'W002',
            'Credits': '3',
        },
        {
            'Semester': '1',
            'Code': 'MIS1202',
            'Course Name': 'Cryptographic Systems',
            'Lecturer': 'W002',
            'Credits': '3',
        },
        
    ];

    return (
        <GeneralProgramTable columns={columns} program={program} dataP1={dataP1} dataP2={dataP2} dataP3={dataP3} dataP4={dataP4}/>
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