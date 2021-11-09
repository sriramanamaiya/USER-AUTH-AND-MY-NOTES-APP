import validator from "validator"

const runValidations = (arg1, arg2, arg3) => {
    const errors = {}

    if( arg3 !== undefined ){
        if( arg1.trim().length === 0 ){
            errors.username = 'UserName Cannot Be Blank'
        // }else if( !(arg1.trim().length >= 5) ){
        //     errors.username = 'Username is shorter than the minimum allowed length (5)'
        }else if( arg2.trim().length === 0 ){
            errors.email = 'Email Cannot Be Blank'
        }else if( !validator.isEmail(arg2.trim()) ){
            errors.email = 'Invalid Email ID'
        }else if( arg3.trim().length === 0 ){
            errors.password = 'Password Cannot be Blank'
        }else if( !(arg3.trim().length >= 6 && arg3.trim().length <= 128) ){
            errors.password = "Password length is Short"
        }
    }else {
        if( arg1.trim().length === 0 ){
            errors.email = 'Email Cannot Be Blank'
        }else if( !validator.isEmail(arg1.trim()) ){
            errors.email = 'Invalid Email ID'
        }else if( arg2.trim().length === 0 ){
            errors.password = 'Password Cannot be Blank'
        }//else if( !(arg2.trim().length >= 6 && arg2.trim().length <= 128) ){
        //     errors.password = "Password length is Short"
        // }
    }
    console.log(errors)
    return errors
}

export default runValidations