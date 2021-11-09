import axios from 'axios'

const startRegisterUser = (userData, history) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/register', userData) 
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(errorsRegister(result.errors))
                }else{
                    alert('Sucessfully registered')
                    dispatch(errorsRegister({}))
                    history.push('/login')
                }
            })
    }
}

const errorsRegister = (error) => {
    return {
        type : 'ERRORS-REGISTER',
        payload : error
    }
}

const startLoginUser = (userData, history) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/login', userData)
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(errorsLogin(result))
                }else{
                    alert('Sucessfully logged In')
                    localStorage.setItem('token',result.token)
                    dispatch(loginAuth())
                    // handleAuth()
                    history.push('/')
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const errorsLogin = (error) => {
    return {
        type : 'ERRORS-LOGIN',
        payload : error
    }
}

const loginAuth = () => {
    return {
        type : 'LOGIN-AUTH'
    }
}

const startAccountDetails = (token) => {
    return (dispatch) => {
        axios.get('https://dct-user-auth.herokuapp.com/users/account',{
            headers : {
                'x-auth' : token 
            }
        })
            .then((response) =>{
                const result = response.data
                dispatch(loading())
                dispatch(accountDetails(result))
            })
            .catch((err) => {
               alert(err.message)
            })
    }
}

const accountDetails = (userData) => {
    return {
        type : 'ACCOUNT-DETAILS',
        payload : userData
    }
}

const loading = () => {
    return {
        type : 'LOADING'
    }
}

export { startRegisterUser, startLoginUser, startAccountDetails, loginAuth, loading, errorsRegister }