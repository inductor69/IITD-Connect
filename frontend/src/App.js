import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Profile from "./components/Profile/Profile"
import Home from "./components/Home/Home"
import Logout from "./components/Logout/Logout"
import Login from "./components/Login/Login"
import Test from "./components/Test/Test"
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ErrorPage from './components/Errors/ErrorPage';


export default function App() {

  return (
    <Router>
      <div className='container-fluid justify-content-center'>
        <Switch>
          <PrivateRoute exact={true} path="/">
            <Home/>
          </PrivateRoute>
          <Route path="/login">
              <Login />
          </Route>
          <PrivateRoute path="/profile">
            <Profile/>
          </PrivateRoute>
          <Route path="/logout">
            <Logout/>
          </Route>
          <Route path='/test'>
            <Test/>
          </Route> 
          <Route path="/error" render={routeProps => (<ErrorPage {...routeProps}/>)}/>
        </Switch>
      </div>
    </Router>
  );
};




