import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pantry from './Pages/Pantry';
import NoMatch from './Pages/NoMatch';

function App() {
  return (<Router>
    <div>
      <Switch>
        <Route exact path='/pantry'>
          <Pantry />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
