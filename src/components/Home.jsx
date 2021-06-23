import React from 'react';

const Home = () => {

   const saludo = 'Probando texto con Variable, este debería ser el muro donde van los posts'
   

    return ( 
        <div className='mt-5'>
           <h2> {saludo} </h2>
        </div>
     );
}
 
export default Home;


