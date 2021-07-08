import React from 'react';
import AuthGoogle from '../Auth/AuthGoogle';
import AuthEmail from '../Auth/AuthEmail';
import logo from '../assets/images/logos/logo.png';
import '../styles/index.css';

const Login = () => {
  return (
    <div className="mt-5 text-center">
      <img src={logo} alt="logo-chinchin" />
      <div className="row justify-content-center">
        <div className="d-block gap-2">
          <AuthGoogle />
          <h5>OR</h5>
          <AuthEmail />
        </div>
      </div>
    </div>
  );
};
export default Login;
