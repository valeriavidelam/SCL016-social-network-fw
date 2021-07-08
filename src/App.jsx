import React from 'react';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Home from './components/Home';
import firebase from 'firebase/app';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


const App = () => {

  const [firebaseUser, setFirebaseUser] = React.useState(false);

  React.useEffect(() => {
    const fetchUser = () => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user);
        if (user) {
          setFirebaseUser(user);
        } else {
          setFirebaseUser(null);
        }
      })
    }
    fetchUser()
  }, [])

  const PrivateRoute = ({component, path, ...rest}) =>{
    if(localStorage.getItem('user')){
      const userStorage = JSON.parse(localStorage.getItem('user'))
      if(userStorage.uid === firebaseUser.uid){
        return <Route component={component} path={path} {...rest} />
      }else{
        return <Redirect to="/" {...rest}/>
      }
    }else{
      return <Redirect to="/" {...rest}/>
    }
  }


  return firebaseUser !== false ? (
    <Router>
      <div className= "container mt-3">
        <Navbar firebaseUser={firebaseUser} />
        <Switch>
          <PrivateRoute component={Home} path="/home" exact/>
          <PrivateRoute component={Profile} path="/profile" exact/>
          <Route component={Login} path="/" exact/>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Loading ChinChin...</p>
  );
};

export default App;
