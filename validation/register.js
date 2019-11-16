const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data){
    let { handle, email, password, password2 } = data;
    let errors = {}

    handle = validText(handle) ? handle : "";
    email = validText(email) ? email : "";
    password = validText(password) ? password : "" ;
    password2 = validText(password2) ? password2 : "";

    if(!Validator.isLength(handle, {min: 2, max: 30})){
        errors.handle = "handle must be between 2 and 30 characters";
    }

    if(Validator.isEmpty(handle)){
        errors.handle = "handle field is required";
    }

    if(Validator.isEmpty(email)){
        errors.email = "email field is required";
    }

    if(!Validator.isEmail(email)){
        errors.email = "invalid email";
    }

    if(Validator.isEmpty(password)){
        errors.password = "password field is required";
    }

    if(!Validator.isLength(password, {min: 6, max: 30})){
        errors.password = "password must be at least 6 characters";
    }

    if(Validator.isEmpty(password2)){
        errors.password2 = "confirm password field is required";
    }

    if(!Validator.equals(password, password2)){
        errors.password2 = "passwords must match";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
};