import React, { useEffect } from "react";
import  { Redirect } from 'react-router-dom'
import axios from "axios";
import resetSessionStorage from "../helpers/resetSessionStorage";

export default function Logout(props){

    useEffect(() => {
        axios.get('/logout')
    })
    
    resetSessionStorage();
    return <Redirect to="/login"/>
}