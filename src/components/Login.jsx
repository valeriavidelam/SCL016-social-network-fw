import React from 'react';



const Login = () => {
    return ( 
        <div className="mt-5 text-center">
            <h3 className="text-center">LOGO CHINCHIN</h3>
            <hr/>
            <div className="row justify-content-center">
              <div className="d-grid gap-2 mt-5">
                <button
                  className="btn btn-lg btn-light btn-block"
                  onClick={() => { console.log('Google button clicked') }}
                  >
                  Sign in with Google  
                  </button> 
                <button 
                className="btn btn-lg btn-danger btn-block"
                onClick={()=> {console.log('Mail button clicked')} }>
                 Sign in with mail
                </button>
              </div>
            </div>
              
            
        </div>
     );
}
 
export default Login;

