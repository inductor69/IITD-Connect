import React, { useEffect } from "react";
import  { Redirect } from 'react-router-dom'
import axios from "axios";

export default function Logout(props){

    useEffect(() => {
        axios.get('/logout')
    })
    
    return <Redirect to="/login"/>
}