import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
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
        <div className='row d-flex justify-content-center navbar' >
          <h3>
            <small>
              <Link to="/">{`{ Home, `}</Link>
              <Link to="/profile">{` Profile, `}</Link>
              <Link to="/logout">{` Logout }`}</Link>
            </small>
          </h3>
        </div>
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
          <Router path='/test'>
            <Test/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
};




