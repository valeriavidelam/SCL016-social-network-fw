import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dar">
            <Link className="navbar-brand" to="/">CHIN-CHIN</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-dar mr-2" to="/" exact>
                        Inicio
                    </NavLink>
                    <NavLink className="btn btn-dar mr-2" to="/admin">
                        Admin
                    </NavLink>
                    <NavLink className="btn btn-dar mr-2" to="/AuthEmail">
                        Login
                    </NavLink>
                </div>
            </div>            
        </div>
    )
}

export default Navbar