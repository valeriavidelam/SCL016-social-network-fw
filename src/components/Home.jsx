import React from 'react';
import Posts from './Posts';

const Home = () => {

   const saludo = 'Probando texto con Variable, este es el muro'
   

    return ( 
        <div className='mt-5'>
           <h2> {saludo} </h2>
           <Posts />
        </div>
     );
}
 
export default Home;


