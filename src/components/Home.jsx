import React from 'react';
//import { auth } from 'reactfire';
import Posts from './Posts';
import { withRouter, } from 'react-router';



const Home = () => {

   const saludo = 'Probando texto con Variable, este es el muro'

    return ( 
        <div className='mt-5'>
           <h2> {saludo} </h2>
           <Posts />
        </div>
     );
}
 
export default withRouter (Home);


