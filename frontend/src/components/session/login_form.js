import React, { useState, Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');

    const submit = () => {
        let user = {
            email,
            password
        }
        props.login(user);
        
    }


   

    return (
        <Fragment>
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={submit}>submit</button>
        </Fragment>
    )

}

export default withRouter(LoginForm);