import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import firebase from 'firebase/app';
import { withRouter } from 'react-router-dom';


const Navbar = (props) => {

    //const history = useHistory ();

    const SignOff = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log('successfully completed')
                props.history.push('/')
            })
    }


    return ( 
        
            <div className= "navbar navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">CHIN·CHIN</Link>
                <div className="d-flex">
                     {/* <NavLink className="btn btn-dark mr-2" to="/" exact>Logout</NavLink> */}
                     {
                       props.firebase !== null ? (
                        <NavLink className="btn btn-dark mr-2" to="/home" exact>Home</NavLink>
                       ) : null
                     }

                     { props.firebase !== null ? (
                        <button className="btn btn-dark" onClick={() => SignOff()}>Logout </button>
                     ) : (
                        <NavLink className="btn btn-dark mr-2" to="/" exact>Login</NavLink>
                     )}
                     <NavLink className="btn btn-dark mr-2" to="/profile" exact> Profile </NavLink>
                </div>
            </div>
        
    )
}

export default withRouter (Navbar)