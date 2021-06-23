import axios from "axios";
import { useState , useEffect} from "react";
import  { Redirect } from 'react-router-dom'
import Select from "react-select"
import Select2 from "react-dropdown-select"
import makeAnimated from "react-select/animated"

import "./Home.css"
import branches from "../Options/branches"
import years from "../Options/years"
import degrees from "../Options/degrees"
import Navbar from "../Navbar/Navbar"
import CardTrey from "../CardTrey/CardTrey";
import resetSessionStorage from "../helpers/resetSessionStorage";


const animatedComponents = makeAnimated();

export default function Home() {
    const[degree,setDegree] = useState(() => {
        const k = sessionStorage.getItem("degree")
        for(let i in degrees){
            if(degrees[i].value === k){
                return degrees[i];
            }
        }
    })
    const[year,setYear] = useState(() => {
        const k = sessionStorage.getItem("year")
        return {value:k,label:k}
    })
    const[branch,setBranch] = useState([{value:"all",label:"all"}])
    const [users,setUsers] = useState([])
    const [status,setStatus] = useState(200)
    const [message,setMessage] = useState("message")
    const [flag,setFlag] = useState(true)


    useEffect(() => {
        const arr =[]
        for(let k in branch){
            arr.push(branch[k].value)
        }
        axios.get(`/${degree.value}/${year.value}/${arr}`).then(res => {
            setStatus(res.status)
            if(status === 200){
                setUsers(res.data)
            }
        }).catch(err => {
            setStatus(err.response.status);
            if(err.response.status === 404){
                setMessage(err.response.statusText)
            }
        })
    },[flag])

    

    const Header = () => {
        return (
            <div className={"Header"}>
                    <Select id={"degree"}
                        placeholder={"Select the Degree"}
                        components={animatedComponents}
                        defaultValue={degree}
                        isMulti={false}
                        options={degrees}
                        isSearchable
                        onChange={setDegree}
                    />
                    <Select id={"year"}
                        placeholder={"Select the Year"}
                        components={animatedComponents}
                        defaultValue={year}
                        isMulti={false}
                        options={years}
                        isSearchable
                        onChange={setYear}
                    />
                    <Select id={"branch"}
                        placeholder={"Select the Branches"}
                        closeMenuOnSelect={false}
                        onChange={setBranch}
                        components={animatedComponents}
                        defaultValue={branches[0]}
                        value={branch}
                        isMulti
                        options={branches}
                        isSearchable  
                    />
                <button id={"filterButton"} onClick={() => {setFlag(!flag)}}>
                    filter
                </button>
            </div>
        )
    }

    const Header2 = () => {
        return(
            <div>
                <Select2
                    placeholder={"Select the Degree"}
                    defaultValue={degree}
                    isMulti={false}
                    options={degrees}
                    isSearchable
                    onChange={setDegree}
                />
                <Select2
                    placeholder={"Select the Year"}
                    components={animatedComponents}
                    defaultValue={year}
                    isMulti={false}
                    options={years}
                    isSearchable
                    onChange={setYear}
                />
                <Select2 
                    placeholder={"Select the Branches"}
                    closeMenuOnSelect={false}
                    onChange={setBranch}
                    components={animatedComponents}
                    defaultValue={branches[0]}
                    value={branch}
                    isMulti
                    options={branches}
                    isSearchable
                    
                />
                <button onClick={() => {setFlag(!flag)}}>
                    filter
                </button>
            </div>
        )
    }
    
    if(status === 200){
        return(
            <>
                <Navbar/>
                <Header/>
                <CardTrey users={users}/>
            </>
        )
    } else if (status === 401 ){
        resetSessionStorage();
        return <Redirect to='/login'/>
    } else {
        return(
            <>
                <Navbar/>
                <Header/>
                <h2>{message}</h2>
            </>
        )
    }
}