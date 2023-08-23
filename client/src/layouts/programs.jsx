import React, { Component } from 'react';
import GeneralProgramTable from '../components/GeneralProgramTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import { useEffect, useState } from "react"
import useAxiosMethods from '../hooks/useAxiosMethods';
import TableHeaderComponent from '../components/TableHeaderComponent';

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

    const columns = ['Semester', 'Code', 'Course Name', 'Lecture Hall', 'Credits'];
    
    const program = [
        {
            title: 'MASTER OF COMPUTER SCIENCE/ MASTER OF SCIENCE IN COMPUTER SCIENCE',
            pc: 'Program Coordinator',
            pcName: 'Mr. K P M K Silva',
        },
        {
            title: 'MASTER OF INFORMATION SYSTEMS',
            pc: 'Program Coordinator',
            pcName: 'Mr. K P M K Silva',
        }
    ];

    const dataP1 = [
        {
            'Semester': '1',
            'Code': 'MCS1201',
            'Course Name': 'Advanced Algorithms',
            'Lecturer': 'W002',
            'Credits': '3',
        },
        {
            'Semester': '1',
            'Code': 'MCS1202',
            'Course Name': 'Advanced Software Engineering',
            'Lecturer': 'W002',
            'Credits': '3',
        }
    ];

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

    return (
        <GeneralProgramTable columns={columns} program={program} dataP1={dataP1} dataP2={dataP2}/>
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