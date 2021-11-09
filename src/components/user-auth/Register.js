import React,{ useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startRegisterUser, errorsRegister } from '../../actions/userAction'

import runValidations from '../helperfunctions/runValidations'

import Heading from '../common-comp/Heading'
import InputField from '../common-comp/InputField'
import Button from './Button'

const Register = (props) => {
    const { history } = props
    const [ userName, setUserName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ formErrors, setFormErrors ] = useState({})

    const dispatch = useDispatch()

    const error = useSelector((state) => {
        return state.user.errors
    })
    
    useEffect(() => {
        if( Object.keys(error).length > 0 ){
            setFormErrors(error)
        }
        return () => {
            dispatch(errorsRegister({}))
        }
    },[error])

    const handleChange = (e) => {
        if( e.target.name === 'user-name' ){
            setUserName(e.target.value)
        }else if( e.target.name === 'email' ){
            setEmail(e.target.value)
        }else if( e.target.name === 'password' ){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(password)
        const errors = runValidations(userName,email,password)

        if( Object.keys(errors).length === 0 ){
            setFormErrors({})
            const userData = {
                username : userName,
                email : email,
                password : password
            }
            dispatch(startRegisterUser(userData,history))
        }else {
            setFormErrors(errors)
        }
    }

    return (
        <div className="input-field-container">
            <Heading headingType="h2" title="Register With Us →" />
            <form onSubmit={handleSubmit}>
                <InputField 
                    type="text" 
                    value={userName} 
                    name="user-name" 
                    placeholder="Enter Username" 
                    className="input-field" 
                    formErrors={formErrors.username}
                    handleChange={handleChange} 
                /><br />
                <InputField 
                    type="text" 
                    value={email} 
                    name="email" 
                    placeholder="Enter Email" 
                    className="input-field" 
                    formErrors={formErrors.email}
                    handleChange={handleChange} 
                /><br />
                <InputField 
                    type="password" 
                    value={password} 
                    name="password" 
                    placeholder="Enter Password" 
                    className="input-field" 
                    formErrors={formErrors.password}
                    handleChange={handleChange} 
                /><br />
                <InputField 
                    type="submit" 
                    value="Register"
                    className="button"
                />
                <Button />
            </form>
        </div>
    )
}

export default Register