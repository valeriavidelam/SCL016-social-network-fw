import React from 'react';
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Home from './components/Home';

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
          <Route component={Home} path="/home" exact/>
          <Route component={Profile} path="/profile" exact/>
          <Route component={Login} path="/" exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;