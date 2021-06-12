import axios from "axios";
import { useState } from "react";
import  { Redirect } from 'react-router-dom'

import CardTrey from "../CardTrey/CardTrey";


export default function Home(props) {
    const [users,setUsers] = useState([])
    const [status,setStatus] = useState(400)

    async function getData(degree,year,branch){
        await axios.get(`/${degree}/${year}/${branch}`).then(res => {
            setStatus(res.data.status);
            if(status === 200){
                setUsers(res.data);
            }
            console.log(res.data.status)
        }).catch(err => console.log(err))
    }

    getData("all","all","all");
    
    if(status === 200){
        return(
            <CardTrey users={users}/>
        )
    } else{
        return <Redirect to='/login'/>
    }
}