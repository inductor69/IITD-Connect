import axios from "axios";
import { useState , useEffect} from "react";
import  { Redirect } from 'react-router-dom'
import Select from "react-select"
import makeAnimated from "react-select/animated"

import branches from "../Options/branches"
import years from "../Options/years"
import degrees from "../Options/degrees"
import Navbar from "../Navbar/Navbar"
import CardTrey from "../CardTrey/CardTrey";
import resetSessionStorage from "../helpers/resetSessionStorage";


const animatedComponents = makeAnimated();

export default function Home() {
    const[degree,setDegree] = useState(sessionStorage.getItem("degree"))
    const[year,setYear] = useState(sessionStorage.getItem("year"))
    const[branch,setBranch] = useState(["all"])
    const [users,setUsers] = useState([])
    const [status,setStatus] = useState(200)
    const [flag,setFlag] = useState(true)

    const changeStateSingle = (obj,setStateFunction) => {setStateFunction(obj.value)}
    const changeStateMulti = (obj,setStateFunction) => {
        let arr = []
        for(let i in obj){
            arr.push(i.value)
        }
        setStateFunction(arr)
    }

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
                <Select 
                    components={animatedComponents}
                    defaultValue={degree}
                    isMulti={false}
                    options={degrees}
                    isSearchable
                    onChange={(selected) => {changeStateSingle(selected,setDegree)}}
                />
                <Select 
                    components={animatedComponents}
                    defaultValue={year}
                    isMulti={false}
                    options={years}
                    isSearchable
                    onChange={(selected) => {changeStateSingle(selected,setYear)}}
                />
                <Select 
                    closeMenuOnSelect={false}
                    components={animatedComponents}
                    defaultValue={branch}
                    isMulti
                    options={branches}
                    isSearchable
                    onChange={(selected) => {changeStateMulti(selected,setBranch)}}
                />
                <button onClick={setFlag(!flag)}>
                    filter
                </button>
                <CardTrey users={users}/>
            </>
        )
    } else{
        resetSessionStorage();
        return <Redirect to='/login'/>
    }
}