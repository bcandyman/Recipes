import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pantry from './Pages/Pantry';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import NoMatch from './Pages/NoMatch';
import { Navbar } from 'react-bootstrap'
import './App.css'
import Recipes from './Pages/Recipes';
import Deets from './Pages/Deets'
import CustomNavbar from './components/NavBar'

function App() {

  const [userId, setUserId] = useState('');

  const onHandleUserActivate = (userIdInfo) => {
    setUserId(userIdInfo)
  };

  return (
    <Router>
      <CustomNavbar />
      <Switch>
        <Route exact path='/pantry' render={(props) => <Pantry userId={userId} onHandleUserActivate={onHandleUserActivate} />} />
        <Route exact path='/signup' render={(props) => <Signup onHandleUserActivate={onHandleUserActivate} />} />
        <Route exact path='/login' userId={userId} component={Login} />
        <Route exact path='/profile' component={Profile} />
        {/* <Route exact path='/Recipes' component={Recipes} /> */}
        <Route exact path='/recipes/search' render={(props) => <Recipes />} />
        <Route exact path='/recipes/search/ingredients/:ingredients?' render={(props) => <Recipes searchBy='ingredient' />} />
        <Route exact path='/recipes/search/name/:name?' render={(props) => <Recipes searchBy='name' />} />
        <Route exact path='/recipe/details/:recipeId' component={Deets} />
        <Route component={NoMatch} />
      </Switch>
      <Navbar fixed="bottom">
        Pantry is a React app created by Ben Candy and Lakshdeep Bajwa
      </Navbar>
    </Router>
  )
}

export default App;
