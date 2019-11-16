import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const NavBar = props => {

    const getLinks = () => {
        if(props.loggedIn){
            return (
                <Fragment>
                    <Link to={'/tweets'}>all tweets</Link>
                    <Link to={'/profile'}>profile</Link>
                    <Link to={'/compose'}>compose</Link>
                    <button onClick={props.logout}>sign out</button>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <Link to={'/signup'}>sign up</Link>
                    <Link to={'/login'}>login</Link>
                </Fragment>
            )
        }
    }


    return(
        <Fragment>
            <h1>something</h1>
            { getLinks() }
        </Fragment>
    )
}

export default NavBar;