import React from 'react';
import AuthGoogle from '../Auth/AuthGoogle';
import AuthEmail from '../Auth/AuthEmail';
import logo from '../assets/images/logos/logo.png';
import '../styles/Login.css';


const Login = () => {
  return (
    <div className="Container">
      <div className="divLogin">
      <img src={logo} alt="logo"/>
      <div className="row justify-content-center">
        <div className="d-block gap-2">
          <AuthGoogle />
          <h5>OR</h5>
          <AuthEmail />
        </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
