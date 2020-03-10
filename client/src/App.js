import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pantry from './Pages/Pantry';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import NoMatch from './Pages/NoMatch';
import {Navbar, NavDropdown, NavLink} from 'react-bootstrap'
import './App.css'

function App() {
  return (
  <Router>
      <Navbar className="mb-3">
        <Navbar.Brand className="mr-auto"><img alt="colored pantry" src="https://image.flaticon.com/icons/svg/1606/1606731.svg" height="25px"></img> Pantry</Navbar.Brand>
        {/* <Navbar.Text>Logged in as: </Navbar.Text> <NavLink href="/profile"> Lakshdeep Bajwa</NavLink> */}
        <NavDropdown title="Navigation" id="basic-nav-dropdown">
            <NavDropdown.Item href="/signup">Create an Account</NavDropdown.Item>
            <NavDropdown.Item href="/login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/pantry">My Pantry</NavDropdown.Item>
            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
        </NavDropdown>
      </Navbar>
      <Switch>
        <Route exact path='/pantry'>
          <Pantry />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
      <Navbar fixed="bottom">
        Pantry is a React app created by Ben Candy and Lakshdeep Bajwa
      </Navbar>
  </Router>
  )
}

export default App;
