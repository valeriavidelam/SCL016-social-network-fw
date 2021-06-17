import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
    return ( 
        <div className= "navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">CHIN CHIN</Link>
            <div className="d-flex">
                <NavLink className="btn btn-dark mr-2" to="/" exact> Home</NavLink>
                <NavLink className="btn btn-dark mr-2" to="/login" exact> Login</NavLink>
                <button className="btn btn-dark mr-2"> Logout</button>
            </div>
        </div>
     );
}
 
export default Navbar;