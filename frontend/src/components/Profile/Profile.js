import axios from "axios";
import { useState , useEffect} from "react";
import  { Redirect} from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Card from 'react-bootstrap/Card'

import "./Profile.css"
import ImageUpload from "./ImageUpload";

export default function Profile(){
    const path = "images"
    const [user,setUser] = useState({})
    const [status,setStatus] = useState(200)
    const [errors,setErr] = useState({})
    const [description,setDescription] = useState("")
    const [interest,setInterest] = useState("")

    useEffect(() => {
        axios.get(`/profile`).then(res => {
            setUser(res.data)
        }).catch(err => {
            setErr(err.response);
            setStatus(err.response.status)
        })
    },[])

    const uploadDescription = async () => {
        await axios.post(`/profile/addInfo`,{
            field:"description",
            value:description
        }).then(res => console.log(res.status)).catch(err => console.log(err))
    }

    const uploadInterest = async () => {
        await axios.post(`/profile/addInfo`,{
            field:"interest",
            value:interest
        }).then(res => console.log(res.status)).catch(err => console.log(err))
    }

    function validateForm(item) {
        return item.length > 0;
    }
    if(status === 200){
        const arr = []
        for(let k in user){
            arr.push(<Card.Title>{k === "_id" ? "IITD Email" : k} : {k === "_id" ? `${user[k]}@iitd.ac.in` :  user[k]}</Card.Title>)
        }
        return(
            <div>
                <Navbar/>
                <ImageUpload/>
                <div style={{"margin":"20px"}}>
                    <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                    <button onClick={uploadDescription} disabled={!validateForm(description)}>Save Description</button>
                </div>
                <div style={{"margin":"20px"}}>
                    <input type="text" name="interest" onChange={e => setInterest(e.target.value)}/>
                    <button onClick={uploadInterest} disabled={!validateForm(interest)}>Save Interest</button>
                </div>
                <Card className={"card"}>
                    <Card.Body>
                        <Card.Img src={`/images/${user._id}.png`} width="auto" height="auto" alt="Profile photo"/>
                        {arr}
                    </Card.Body>
                </Card>          
            </div>
        )
    } else if(status === 401) {
        sessionStorage.setuser("isAuthenticated",false)
        return <Redirect to='/login' />
    } else {
        const message = `Status ${status} : ${errors.statusText}`
        return <Redirect to={{
            pathname:"/error",
            state:{message}
        }} />      
    }

}