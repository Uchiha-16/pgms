import React, { Component, useState, useEffect } from 'react';
import GeneralTable from '../components/GeneralTable';
import NavBarComponent from '../components/NavbarComponent';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';
import { Box, Grid } from '@mui/material/';
import useAxiosMethods from '../hooks/useAxiosMethods';
import TableHeaderComponent from '../components/TableHeaderComponent';
import { headCells } from '../config/userConfig';

const users_URL = "/users/users"

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");  //added a useState hook to manage the search input query. This state variable is used to store the user's input when they search for a user by name.
    const { get } = useAxiosMethods();

    useEffect(() => {
        // Call the get method to fetch user data
        get(users_URL, setUsers);
    }, []);

    // Filter users based on the search query
    //introduced a new filteredUsers array that filters the original list of users based on the search query entered by the user. We check if the user's full name (composed of first name and last name) contains the search query. We use the toLowerCase() method to make the search case-insensitive.
    const filteredUsers = users.filter(user => {
        const fullName = `${user.firstname} ${user.lastname}`;
        return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const rows = filteredUsers.map(user => ({
        NAME: `${user.firstname} ${user.lastname}`,
        ROLE: user.role,
        STATUS: 'ONLINE',
        EMAIL: user.email,
        ACTION: 'Edit',
        ID: user.id,
        EMPLOYED: user.employedDate,
        PROFILEPIC: user.profileImage
    }));

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
                        <HeaderComponent                              //modified the HeaderComponent component by passing the searchQuery and a callback function onSearchQueryChange as props. This allows the search bar in the header to update the searchQuery state when the user types a search query.
                            searchQuery={searchQuery}
                            onSearchQueryChange={setSearchQuery}
                        />
                    </Grid>
                    <Grid item>
                        <TableHeaderComponent left="Users" right="" addbtn={true} />
                        <GeneralTable rows={rows} headCells={headCells} />
                    </Grid>
                    <Grid item>
                        <FooterComponent />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default UsersPage;