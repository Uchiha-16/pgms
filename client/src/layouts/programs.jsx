import React, { Component } from 'react';
import GeneralProgramTable from '../components/GeneralProgramTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import axios from '../api/axios';
import AddCourse from '../components/AddCourseComponent';
import useAxiosMethods from '../hooks/useAxiosMethods';
import TableHeaderComponent from '../components/TableHeaderComponent';

const courses_URL = "/courses/viewcourses"

const Layout1 = () => {
    const [courses, setCourses] = useState([]);
    const { get } = useAxiosMethods();
    
    useEffect(() => {
        // Call the get method to fetch user data
        get(courses_URL, setCourses);
    }, []);


    const columns = ['Semester', 'Code', 'Course Name', 'Credits'];
    
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
    

    // Initialize data arrays
    let dataP1 = [];
    let dataP2 = [];
    let dataP3 = [];
    let dataP4 = [];

    // Filter courses based on programID and populate data arrays
    courses.forEach(course => {
        if (course.programId.programID === 1) {
            dataP1.push({
                'Semester': course.semester,
                'Code': course.courseNo,
                'Course Name': course.courseName,
                'Credits': course.credit,
            });
        } else if (course.programId.programID  === 3) {
            dataP2.push({
                'Semester': course.semester,
                'Code': course.courseNo,
                'Course Name': course.courseName,
                'Credits': course.credit,
            });
        } else if (course.programId.programID === 2) {
            dataP3.push({
                'Semester': course.semester,
                'Code': course.courseNo,
                'Course Name': course.courseName,
                'Credits': course.credit,
            });
        } else {
            dataP4.push({
                'Semester': course.semester,
                'Code': course.courseNo,
                'Course Name': course.courseName,
                'Credits': course.credit,
            });
        }
    });


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
                            <TableHeaderComponent left="Programs" right="" addbtn={true} />
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