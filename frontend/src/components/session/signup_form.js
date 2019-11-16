import React, { useState, Fragment, useEffect } from "react";
import { withRouter } from 'react-router-dom';

const SignUpForm = props => {
  const [email, setEmail] = useState("");
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState('');
  const [errors, setErrors] = useState({});

  const submit = () => {
    let user = {
      email,
      handle,
      password,
      password2
    };
    props.signup(user);
  };

  return (
    <Fragment>
      <input
        type="email"
        placeholder="email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="handle"
        onChange={e => setHandle(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="confirm password"
        onChange={e => setPassword2(e.target.value)}
      />
      <button onClick={submit}>submit</button>
    </Fragment>
  );
};

export default withRouter(SignUpForm);
