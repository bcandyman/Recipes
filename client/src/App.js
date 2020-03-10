import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Pantry from './Pages/Pantry';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import NoMatch from './Pages/NoMatch';
import { Navbar, NavDropdown } from 'react-bootstrap'
import './App.css'

function App() {

  return (
    <Router>
      <Navbar className="mb-3">
        <Navbar.Brand className="mr-auto"><img alt="colored pantry" src="https://image.flaticon.com/icons/svg/1606/1606731.svg" height="25px"></img> Pantry</Navbar.Brand>
        {/* <Navbar.Text>Logged in as: </Navbar.Text> <NavLink href="/profile"> Lakshdeep Bajwa</NavLink> */}
        <NavDropdown title="Navigation" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to='/signup'>Create an Account</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to='/login'>Login</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/pantry">My Pantry</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/profile">My Profile</Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Navbar>
      <Switch>
        <Route exact path='/pantry' component={Pantry} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route component={NoMatch} />
      </Switch>
      <Navbar fixed="bottom">
        Pantry is a React app created by Ben Candy and Lakshdeep Bajwa
      </Navbar>
    </Router>
  )
}

export default App;
