import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pantry from './Pages/Pantry';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import NoMatch from './Pages/NoMatch';
import { Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './App.css'
import RecipeList from './Pages/RecipeList';
import Deets from './Pages/Deets'

function App() {
//5e69aad13b2b27de661bf9c6
  const [userId, setUserId] = useState('');
  console.log('app');

  useEffect(() => {
    console.log('from use effect');
    console.log('userId');
    console.log(userId);
  }, [])


  const onHandleUserActivate = (userIdInfo) => {
    console.log('ppppppppppppp');
    console.log(userIdInfo);
    
    setUserId(userIdInfo)
  };


  return (
    <Router>
      <Navbar className="mb-3">
        <Navbar.Brand className="mr-auto"><img alt="colored pantry" src="https://image.flaticon.com/icons/svg/1606/1606731.svg" height="25px"></img> Pantry</Navbar.Brand>
        {/* <Navbar.Text>Logged in as: </Navbar.Text> <NavLink href="/profile"> Lakshdeep Bajwa</NavLink> */}
        <NavDropdown title="Navigation" id="basic-nav-dropdown">
          <LinkContainer to="/signup">
            <NavDropdown.Item>Signup</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavDropdown.Item>Login</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/pantry">
            <NavDropdown.Item>My Pantry</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/profile">
            <NavDropdown.Item>My Profile</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/recipelist">
            <NavDropdown.Item>My Recipes</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/recipedetails">
            <NavDropdown.Item>Recipe Details</NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>
      </Navbar>
      <Switch>
        <Route exact path='/pantry' render={(props) => <Pantry userId={userId} onHandleUserActivate={onHandleUserActivate} />} />
        <Route exact path='/signup' render={(props) => <Signup onHandleUserActivate={onHandleUserActivate} />} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/recipelist' component={RecipeList} />
        <Route exact path='/recipedetails' component={Deets} />
        <Route component={NoMatch} />
      </Switch>
      <Navbar fixed="bottom">
        Pantry is a React app created by Ben Candy and Lakshdeep Bajwa
      </Navbar>
    </Router>
  )
}

export default App;
