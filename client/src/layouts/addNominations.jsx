import React, { Component } from "react";
import HeaderComponent from "../components/HeaderComponent";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import { Box, Grid } from "@mui/material/";
import TableHeaderComponent from "../components/TableHeaderComponent";
import NominationComponent from "../components/NominationComponent";
import CallNomination from "../components/CallNomination";
import NominationsTable from "../components/NominationsTable";
import NominationTable from "../components/NominationTablePC";

import { useEffect, useState } from "react";
import useAxiosMethods from "../hooks/useAxiosMethods";
import useAuth from "../hooks/useAuth";

const TableLayout = () => {
  const [nominations, setNominations] = useState([]);
  // Define filteredNominations variable
  let filteredNominations = [];
  const { auth } = useAuth();
  const { get } = useAxiosMethods();

  const nominations_StaffURL = "/nominations/nominations";
  const nominations_LecturerURL = `/nominations/nominations/${auth.user_id}`;

  // useEffect(() => {
  //   if (auth.role == "Lecturer") {
  //     get(nominations_LecturerURL, setNominations);
  //   } else {
  //     get(nominations_StaffURL, setNominations);
  //   }
  // }, []);

  const columns = ["REQUEST", "NAME", "STATUS", "DATE", "ACTION"];

  const data = [
    {
      REQUEST: "Application for MIS3202 Lecturer",
      NAME: "Kasun Gunawardhana",
      STATUS: "opened",
      DATE: "23/10/2023",
      ACTION: "close",

    },

    {
      REQUEST: "Application for MIS3201 Lecturer",
      NAME: "Ajantha Athukorala",
      STATUS: "opened",
      DATE: "23/10/2023",
      ACTION: "close",
    }

  ]

  return <NominationsTable columns={columns} data={data} />;
};

const TableLayout1 = () => {
  const [nominations, setNominations] = useState([]);
  // Define filteredNominations variable
  let filteredNominations = [];
  const { auth } = useAuth();
  const { get } = useAxiosMethods();

  const nominations_StaffURL = "/nominations/nominations";
  const nominations_LecturerURL = `/nominations/nominations/${auth.user_id}`;

  // useEffect(() => {
  //   if (auth.role == "Lecturer") {
  //     get(nominations_LecturerURL, setNominations);
  //   } else {
  //     get(nominations_StaffURL, setNominations);
  //   }
  // }, []);

  const columns = [
    "POSITION",
    "OPENINGDATE",
    "CLOSINGDATE",
    "STATUS",
    "ACTION",
  ];

  // const data = nominations.map((nomination) => ({
  //   POSITION: `Application for ${nomination.courseId} Lecturer`,
  //   OPENINGDATE: "23/10/2023",
  //   CLOSINGDATE: "3/4/2034",
  //   STATUS: "opened",
  //   ACTION: "close",
  // }));

  const data = [
    {
      POSITION: "Application for MIS3202 Lecturer",
      OPENINGDATE: "23/10/2023",
      CLOSINGDATE: "3/4/2034",
      STATUS: "opened",
      ACTION: "close",
    },
    {
      POSITION: "Application for MIS3202 Lecturer",
      OPENINGDATE: "23/10/2023",
      CLOSINGDATE: "3/4/2034",
      STATUS: "opened",
      ACTION: "close",
    },
    {
      POSITION: "Application for MIS3202 Lecturer",
      OPENINGDATE: "23/10/2023",
      CLOSINGDATE: "3/4/2034",
      STATUS: "opened",
      ACTION: "close",
    },
    {
      POSITION: "Application for MIS3202 Lecturer",
      OPENINGDATE: "23/10/2023",
      CLOSINGDATE: "3/4/2034",
      STATUS: "opened",
      ACTION: "close",
    },
    {
      POSITION: "Application for MIS3202 Lecturer",
      OPENINGDATE: "23/10/2023",
      CLOSINGDATE: "3/4/2034",
      STATUS: "opened",
      ACTION: "close",
    },
    {
      POSITION: "Application for MIS3202 Lecturer",
      OPENINGDATE: "23/10/2023",
      CLOSINGDATE: "3/4/2034",
      STATUS: "opened",
      ACTION: "close",
    }
  ]

  return <NominationTable columns={columns} data={data} />;
};

class AddNominations extends Component {
  render() {
    return (
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={2.5}>
            <NavbarComponent />
          </Grid>
          <Grid
            container
            xs={9.3}
            sx={{
              display: "grid",
              gridTemplateRows: "350px auto 10%",
            }}
          >
            <Grid item>
              <HeaderComponent />
            </Grid>
            <Grid item>
              {/* content */}
              <Grid item xs={12}>
                <NominationComponent />
                <TableLayout />
               
              </Grid>
            </Grid>
            <Grid item sx={{ height: "25px", }} >
              
            </Grid>
            <Grid item xs={12}>
            <CallNomination />
            <TableHeaderComponent left={'Active Nominations'} right={''} />
              <TableLayout1 />
              
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

export default AddNominations;
