import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startLoginUser } from '../../actions/userAction'

import runValidations from '../helperfunctions/runValidations'

import Heading from '../common-comp/Heading'
import InputField from '../common-comp/InputField'
import Button from './Button'
import Paragraph from '../common-comp/Paragraph'

const Login = (props) => {
    const { history } = props
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ formErrors, setFormErrors ] = useState('')

    const dispatch = useDispatch()

    const error = useSelector((state) => {
        return state.user.errors
    })

    useEffect(() => {
        if( Object.keys(error).length > 0){
            setFormErrors(error)
        }
    },[error])

    const handleChange = (e) => {
        if( e.target.name === 'email' ){
            setEmail(e.target.value)
        }else if( e.target.name === 'password' ){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = runValidations(email, password)
        
        if( Object.keys(errors).length === 0 ){
            setFormErrors({})
            const loginData = {
                email : email,
                password : password
            }
            dispatch(startLoginUser(loginData,history))
        }else {
            setFormErrors(errors)
        }
    }

    return (
        <div className="input-field-container">
            <Heading headingType="h2" title="Login to your account" />
            { formErrors.errors && <Paragraph title={formErrors.errors} className={"login-errors"} />}
            <form onSubmit={handleSubmit}>
                <InputField 
                    type="text" 
                    value={email} 
                    name="email" 
                    placeholder="Enter Email"
                    className="input-field" 
                    formErrors={formErrors.email}
                    handleChange={handleChange} 
                />< br />
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
                    value="LogIn" 
                    className="button"
                />
                <Button />
            </form>
        </div>
    )
}

export default Login