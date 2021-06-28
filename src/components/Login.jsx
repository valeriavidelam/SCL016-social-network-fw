import React from 'react';
import AuthGoogle from '../Auth/AuthGoogle';
import AuthEmail from '../Auth/AuthEmail';


const Login = () => {
    return ( 
        <div className="mt-5 text-center">
            
            <h3 className="text-center">LOGO CHINCHIN</h3>
            <hr/>
            <div className="row justify-content-center">
              <div className="d-block gap-2 mt-5">
                <AuthGoogle/> 
                <AuthEmail/>
              </div>
            </div>
        </div>
     );
}
 
export default Login;
