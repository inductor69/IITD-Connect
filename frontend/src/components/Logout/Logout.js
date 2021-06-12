import React, { useState } from "react";
import  { Redirect } from 'react-router-dom'
import axios from "axios";

export default async function Logout(props){
    const [status,setStatus] = useState(200);
    await axios.get('/logout').then((res) => {
        setStatus(res.status)
    });
    if(status === 200){
        return <Redirect to="/login"/>
    } else {
        //error
    }
}