import axios from "axios";
import { useState , useEffect} from "react";
import  { Redirect } from 'react-router-dom'

import "./Profile.css"

export default function Profile(props){
    const [user,setUser] = useState({_id:props._id})
    const [status,setStatus] = useState(200)
    const [error,setErr] = useState({})
    const [message,setMessage] = useState("")

    useEffect(() => {
        axios.get(`/profile/${props._id}`).then(res => {
            setUser(res.data)
        }).catch(err => {
            setErr(err.response);
            setStatus(err.response.status)
        })
    })


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
        return(
            <div>
                <h3>{error.status} : {error.data}</h3>
            </div>
        )
    }

}