
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';

import {useState} from 'react'

import axios from 'axios';

import './App.css';

import CardTrey from "./components/CardTrey"

export default function App() {
  return (
    <Router>
      <div className='container-fluid justify-content-center'>
        <div className='row d-flex justify-content-center navbar' >
          <h3>
            <small>
              <Link to="/">{`{ Home, `}</Link>
      
          
              <Link to="/BTech">{` B.Tech, `}</Link>
          
          
              <Link to="/MTech">{` M.Tech }`}</Link>
            </small>
          </h3>
        </div>
        <Switch>
          <Route exact={true} path="/">
            <Home/>
          </Route>
          <Route path="/BTech">
            <BTech/>
          </Route>
          <Route path="/MTech">
            <MTech/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return (
    <div className="row d-flex justify-content-center">
      <h2>
        Home
      </h2>

    </div>
  )
}
const BTech = () => {
  let match = useRouteMatch();
  const degree = "BTech"

  return(
    <div className='container-fluid justify-content-center'>
      <div className="row d-flex justify-content-center navbar">
        <h3>
          <small>
            <Link to={`${match.url}/2019`}>{`{ 2019,   `}</Link>
            <Link to={`${match.url}/2020`}>{` 2020 }`}</Link>
          </small>
        </h3>
      </div>
      <Switch>
        <Route path={`${match.url}/2019`} >
          <TwentyNienghteen degree={degree}/>
        </Route>
        <Route path={`${match.url}/2020`} degree={"BTech"}>
          <TwentyTwenty/>
        </Route>
      </Switch>
    </div>
  )
}
const MTech = () => {
  return (
    <div className="row d-flex justify-content-center">
      <h2>
        M.Tech.
      </h2>

    </div>
  )
}

const TwentyNienghteen = (props) => {
  const [users,setUsers] = useState([])
  const year = 2019
  const degree = props.degree
  axios(`/${degree}/${year}`).then(res => {setUsers(res.data)})
  return (
      <div>
        <h2>2019</h2>
        <CardTrey users={users}/>
      </div>)
}
const TwentyTwenty = (props) => (<h2>2020</h2>) 

