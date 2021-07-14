import React from 'react';
import Posts from './Posts';
import { withRouter } from 'react-router';

const Home = () => {

   //const saludo = 'Do you want to say something?'
 
    return ( 
        <div className='mt-5 text-center'>
           {/* <h3 className="text-center">Ruta Protegida</h3> */}
           {/* {
            user && (
               
               <Post user={user.email} />
            )
           } */}
           {/* <h2> {saludo} </h2> */}
           <Posts />
        </div>
     );
}
 
export default withRouter (Home);


