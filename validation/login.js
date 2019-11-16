const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data){
    let {email, password} = data;
    let errors = {};

    email = validText(email) ? email : "";
    password = validText(password) ? password : "";

    if(!Validator.isEmail(email)){
        errors.email = 'email is invalid';
    }

    if(Validator.isEmpty(email)){
        errors.email = 'email field is required';
    }

    if(Validator.isEmpty(password)){
        errors.password = 'password field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}