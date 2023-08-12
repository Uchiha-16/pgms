import { useState, useEffect } from "react";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
import useAxiosMethods from "../hooks/useAxiosMethods";

import React from 'react'

const Users = () => {

    const [users, setUsers] = useState();
    const {get} = useAxiosMethods();
    // const axiosPrivate = useAxiosPrivate();

    useEffect(() => {

        try{
            get('/demo-controller', setUsers);

        }catch(err){
            console.error(err);
        }

        // let isMounted= true;
        // const controller = new AbortController();

        // const getUsers = async () => {
        //     try{
        //         const response = await axiosPrivate.get('/demo-controller',{
        //             signal: controller.signal
        //         });
        //         console.log(response.data);
        //         isMounted && setUsers(response.data);

        //     }catch (err){
        //         console.log(err);

        //     }
        // }

        // getUsers();

        // return () => {
        //     isMounted = false;
        //     controller.abort();
        // }

        

    },[])
  return (
    <div>{users}</div>
  )
}

export default Users