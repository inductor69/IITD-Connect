import axios from "axios";
import { useState , useEffect} from "react";
import  { Redirect} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"

import "./Profile.css"

export default function Profile(){
    const path = "images"
    const [user,setUser] = useState({})
    const [status,setStatus] = useState(200)
    const [errors,setErr] = useState({})

    useEffect(() => {
        axios.get(`/profile`).then(res => {
            setUser(res.data)
        }).catch(err => {
            setErr(err.response);
            setStatus(err.response.status)
        })
    },[])


    if(status === 200){
        console.log(`${path}/${user._id}.png`);
        return(
            <div>
                <Navbar/>
                <img alt="Profile"  src={`${path}/${user._id}.png`} width="auto" height="200"></img>
                <h3>Hello</h3>
                <p>{user.name}</p>
                <p>{user.branch}</p>
                <p>{user.year}</p>
                <p>{user.description}</p>
                
            </div>
        )
    } else if(status === 401) {
        sessionStorage.setItem("isAuthenticated",false)
        return <Redirect to='/login' />
    } else {
        const message = `Status ${status} : ${errors.statusText}`
        return <Redirect to={{
            pathname:"/error",
            state:{message}
        }} />
        
    }

}