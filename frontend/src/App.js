import {BrowserRouter as Router, Route, Switch, Link, useLocation, NavLink} from 'react-router-dom';
import './App.css';
import Profile from "./components/Profile/Profile"
import Home from "./components/Home/Home"
import Logout from "./components/Logout/Logout"
import Login from "./components/Login/Login"
import Test from "./components/Test/Test"


export default function App() {

  return (
    <Router>
      <div className='container-fluid justify-content-center'>
        <Switch>
          <Route exact={true} path="/">
            <Home/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/logout">
            <Logout/>
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path='/test'>
            <Test/>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
};




