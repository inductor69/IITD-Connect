import axios from "axios";
import { useState , useEffect} from "react";
import  { Redirect} from 'react-router-dom'
import ErrorPage from "../Errors/ErrorPage"

import "./Profile.css"

export default function Profile(){
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
    },[status])


    if(status === 200){
        return(
            <div>
                <img alt="Profile"  src={user.image}></img>
                <h3>Hello</h3>
                <p>{user.name}</p>
                <p>{user.branch}</p>
                <p>{user.year}</p>
                <p>{user.description}</p>
                
            </div>
        )
    } else if(status === 401) {
        return <Redirect to='/login' />
    } else {
        return <ErrorPage statusCode={status} statusText={errors.statusText} />
        
    }

}