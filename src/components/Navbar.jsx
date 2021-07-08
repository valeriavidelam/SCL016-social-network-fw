import React from 'react';
import {NavLink} from 'react-router-dom';
import firebase from 'firebase/app';
import {withRouter} from 'react-router-dom';
import {MdHome, MdPerson} from 'react-icons/md';
import logonav from '../assets/Images/logos/logonavbar.png';

const Navbar = (props) => {
  const SignOff = () => {
    firebase
        .auth()
        .signOut()
        .then(() => {
          console.log('successfully complete');
          props.history.push('/');
        });
  };

  return (
    <div className="navbar navbar-success bg-success">
      <img src={logonav} alt="logopage" to="/" exact></img>
      <div className="d-flex">
        {/* <NavLink className="btn btn-dark mr-2" to="/" exact>Logout</NavLink> */}
        <NavLink className="btn btn-success mr-2" to="/profile" exact>
          {''}
          <MdPerson />
        </NavLink>
        {props.firebase !== null ? (
          <NavLink className="btn btn-success mr-2" to="/home" exact>
            <MdHome />
          </NavLink>
        ) : null}
        {props.firebase !== null ? (
          <button className="btn btn-success" onClick={() => SignOff()}>
            Logout{''}
          </button>
        ) : (
          <NavLink className="btn btn-success mr-2" to="/" exact>
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navbar);
