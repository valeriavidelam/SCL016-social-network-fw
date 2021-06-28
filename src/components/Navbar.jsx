import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const Navbar = () => {
    return ( 
        
            <div className= "navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">CHIN·CHIN</Link>
                <div className="d-flex">
                     <NavLink className="btn btn-dark mr-2" to="/home" exact> Home</NavLink>
                     <NavLink className="btn btn-dark mr-2" to="/profile" exact> Profile </NavLink>
                     <NavLink className="btn btn-dark mr-2" to="/" exact> Login</NavLink>
                     <NavLink className="btn btn-dark mr-2" to="/" exact> Logout</NavLink>
                </div>
            </div>
        
    )
}

export default Navbar