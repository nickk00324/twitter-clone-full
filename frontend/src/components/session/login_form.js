import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { isEqual } from 'lodash';

const LoginForm = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(props.errors);

    const submit = () => {
        let user = {
            email,
            password
        }
        props.login(user);
    }

    useEffect( () => {
      if(isEqual(errors, props.errors)){
        setErrors('');
      } else {
        setErrors(props.errors);
      }   
    }, [props.errors])

    const renderErrors = () => {
        if(!errors){
            return null;
        } else {
            return (
                <ul>
                    {Object.keys(errors).map((error, i ) => (
                        <li className="error" key={`error ${i}`}>{errors[error]}</li>
                    ))}
                </ul>
            )
        }
    }

    return (
      <div className="form-container">
        <div className="form">
          <input
            type="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
          <button className="submit" onClick={submit}>submit</button>
          {renderErrors()}
        </div>
      </div>
    );

}

export default withRouter(LoginForm);