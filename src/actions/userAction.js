import axios from 'axios'
import { userNotes } from './notesAction'

const startRegisterUser = (userData, redirect) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/register', userData) 
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(errorsRegister(result.errors))
                }else{
                    alert('Sucessfully registered')
                    redirect()
                    dispatch(errorsRegister({}))
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

const startLoginUser = (userData, redirect) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/users/login', userData)
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(errorsLogin(result))
                }else{
                    alert('Sucessfully logged In')
                    localStorage.setItem('token',result.token)
                    dispatch(startGetAccountDetailsUserNotes(result.token))
                    redirect()
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

const startGetAccountDetailsUserNotes = (token) => {
    const urlAccount = axios.get('https://dct-user-auth.herokuapp.com/users/account',{
        headers : {
            'x-auth' : token 
        }
    }),
    urlNotes = axios.get('https://dct-user-auth.herokuapp.com/api/notes', {
        headers : {
            'x-auth' : token
        }
    })

    return (dispatch) => {
        dispatch(loadingUser())
        Promise.all([urlAccount,urlNotes])
            .then((response) => {
                const [ account, notes ] = response
                dispatch(loadingUser())
                dispatch( accountDetails(account.data))
                dispatch( userNotes(notes.data.reverse()) )
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

const loadingUser = () => {
    return {
        type : 'LOADING-USER'
    }
}

export { startRegisterUser, startLoginUser, startGetAccountDetailsUserNotes, accountDetails, errorsRegister, errorsLogin }