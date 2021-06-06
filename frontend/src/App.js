
import {BrowserRouter as Router, Route, Switch, Link, useRouteMatch} from 'react-router-dom';

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
      
          
              <Link to="/B.Tech.">{` B.Tech, `}</Link>
          
          
              <Link to="/M.Tech.">{` M.Tech }`}</Link>
            </small>
          </h3>
        </div>
        <Switch>
          <Route exact={true} path="/">
            <Home/>
          </Route>
          <Route path="/B.Tech.">
            <BTech/>
          </Route>
          <Route path="/M.Tech.">
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
        <Route path={`${match.url}/2019`}>
          <TwentyNienghteen/>
        </Route>
        <Route path={`${match.url}/2020`}>
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

const TwentyNienghteen = () => (
<div>
  <h2>2019</h2>
  <CardTrey/>
</div>)
const TwentyTwenty = () => (<h2>2020</h2>) 

