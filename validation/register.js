const Validator = require('validator')
const isEmpty = require('is-empty')

module.exports = function validateRegisterInput(data){
    let errors = {};

    //Convert Empty fields to an empty String to use validator functions
    data.name = !isEmpty(data.name)?data.name: "";
    data.email = !isEmpty(data.email)?data.email: "";
    data.password = !isEmpty(data.password)?data.password: "";
    data.password2 = !isEmpty(data.password2)?data.password2: "";

    //Name Check
    if(Validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }

    //Email Check
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Please Enter Valid Email";
    }

    //Password check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    if(Validator.isEmpty(data.password2)){
        errors.password2 = "Confirm Password is required";
    }

    if(!Validator.isLength(data.password,{min: 6,max: 30})){
        errors.password = "Password must be minimum 6 Characters and Maximum 30 Characters";
    }

    if(!Validator.equals(data.password,data.password2)){
        errors.password2 = "Passwords donot match";
    }

    return {
        errors,
        isValid:isEmpty(errors)
    }
}