import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

const NavBar = props => {

    const getLinks = () => {
        if(props.loggedIn){
            return (
                <nav className="nav-bar-links">
                    <Link to={'/tweets'}>all tweets</Link>
                    <Link to={'/profile'}>profile</Link>
                    <Link to={'/compose'}>compose</Link>
                    <button onClick={props.logout}>sign out</button>
                </nav>
            );
        } else {
            return (
                <nav className="nav-bar-links">
                    <Link to={'/signup'}>sign up</Link>
                    <Link to={'/login'}>login</Link>
                </nav>
            )
        }
    }


    return (
      <div className="nav-bar">
        <Link to={"/"}>
          <p className="logo">not real twitter</p>
        </Link>
        {getLinks()}
      </div>
    );
}

export default NavBar;