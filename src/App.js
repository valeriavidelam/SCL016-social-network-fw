import React from 'react';
import Wall from './components/Wall'
import Login from './components/Login'
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const App = () => {
  return ( 
    <Router>
      <div className= "container mt-3">

        <Navbar/>

        <Switch>
          <Route component={Wall} path="/" exact/>
          <Route component={Login} path="/login" exact/>
        </Switch>
      </div>
    </Router>
   );
}
 
export default App;

