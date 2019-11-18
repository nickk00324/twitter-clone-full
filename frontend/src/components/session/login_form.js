import React, { useState, Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// class LoginForm extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             email: '',
//             password: '',
//             errors: {}
//         }
//         this.submit = this.submit.bind(this);
//         this.renderErrors = this.renderErrors.bind(this);
//     }

//     componentWillReceiveProps(nextProps){
//         if(nextProps.currentUser === true){
//             this.props.history.push('/tweets')
//         }

//         this.setState({ errors: nextProps.errors})
//     }

//     update(field){
//         return e => this.setState({
//             [field]: e.currentTarget.value
//         })
//     }

//     submit(e){
//         e.preventDefault();
//         const { email, password }= this.state;
//         let user = {
//             email,
//             password
//         }

//         this.props.login(user)
//     }

//     renderErrors(){
//         return (
//           <ul>
//             {Object.keys(this.state.errors).map((error, i) => (
//               <li key={`error-${i}`}>{this.state.errors[error]}</li>
//             ))}
//           </ul>
//         );
//     }

//     render() {
//         return(
//             <Fragment>
//                 <input type="email" value={this.state.email} placeholder="email" onChange={this.update('email')}/>
//                 <input type="password" value={this.state.password} placeholder="password" onChange={this.update('password')} />
//                 <button onClick={this.submit}>submit</button>
//                 {this.renderErrors()}
//             </Fragment>
//         )
//     }

// }

// hooks :(

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

    useEffect( () => {
        setErrors(props.errors);
    }, [props.errors])

    const renderErrors = () => {
        if(!errors){
            return null;
        } else {
            return (
                <ul>
                    {Object.keys(errors).map((error, i ) => (
                        <li key={`error ${i}`}>{errors[error]}</li>
                    ))}
                </ul>
            )
        }
    }

    return (
        <Fragment>
            <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            <button onClick={submit}>submit</button>
            {renderErrors()}
        </Fragment>
    )

}

export default withRouter(LoginForm);