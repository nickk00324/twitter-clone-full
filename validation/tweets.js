const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTweetInput(data){
    let errors = {}
    let text = data.text;

    text = validText(text) ? text : "";

    if(!Validator.isLength( text, {min: 5, max: 140 })){
        errors.text = "tweet must be between 5 and 140 characters"
    }

    if(Validator.isEmpty(text)){
        errors.text = "text field is required";
    }

    return{
        errors,
        isValid: Object.keys(errors).length === 0
    }
}