import axios from "axios";
import { useState , useEffect} from "react";
import  { Redirect } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"

import CardTrey from "../CardTrey/CardTrey";


export default function Home(props) {
    const[degree,setDegree] = useState('all')
    const[year,setYear] = useState('all')
    const[branch,setBranch] = useState('all')
    const [users,setUsers] = useState([])
    const [status,setStatus] = useState(200)
    const [flag,setFlag] = useState(true)


    useEffect(() => {
        axios.get(`/${degree}/${year}/${branch}`).then(res => {
            setStatus(res.status)
            if(status === 200){
                setUsers(res.data)
            }
        }).catch(err => {
            setStatus(err.response.status);
        })
    },[status,flag])
    
    if(status === 200){
        return(
            <>
                <Navbar/>
                <CardTrey users={users}/>
            </>
        )
    } else{
        sessionStorage.setItem("isAuthenticated",false)
        return <Redirect to='/login'/>
    }
}