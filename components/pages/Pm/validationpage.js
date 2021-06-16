export default function validateinfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = "username required"
    }

    //Email
    if(!values.email){
        errors.email = "Email required"
    }
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/){
        errors.email = "Email address is invalid"
    }


    //Password
    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 6){
        errors.password = "Password need to be atleast 6 characters"
    }

    //Confpassword
    if(!values.confpassword){
        errors.confpassword = "Password is required"
    }
    else if(values.confpassword !== values.password){
        errors.confpassword = "Password do not match"
    }

    return errors
}