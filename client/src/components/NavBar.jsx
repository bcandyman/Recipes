import React from 'react';
import { useHistory } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, NavDropdown, Button } from 'react-bootstrap'
import API from '../utils/API';

function CustomNavbar() {
  const history = useHistory();

  const logout = () => {
    API.logoutUser().then(() => history.push('/login'));
  }

  return (
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
        <LinkContainer to="/recipes/search">
          <NavDropdown.Item>Find Recipes</NavDropdown.Item>
        </LinkContainer>
        {/* <LinkContainer to="/recipedetails"> */}
          {/* <NavDropdown.Item>Recipe Details</NavDropdown.Item> */}
        {/* </LinkContainer> */}
        <NavDropdown.Item>
          <Button onClick={logout}>Log out</Button>
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

export default CustomNavbar;
