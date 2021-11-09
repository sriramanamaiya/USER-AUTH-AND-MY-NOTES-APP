import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { startRegisterUser, errorsRegister } from '../../actions/userAction'

import Heading from '../common-comp/Heading'
import InputField from '../common-comp/InputField'
import Button from './Button'

const Register = (props) => {
    const { history } = props

    const dispatch = useDispatch()

    const error = useSelector((state) => {
        return state.user.errors
    })

    useEffect(() => {
        return () => {
            dispatch(errorsRegister({}))
        }
    },[])
    
    useEffect(() => {
        if( Object.keys(error).length > 0 ){
            setErrors(error)
        }
    },[error])

    const validationSchema = yup.object({
        username: yup.string().required('Cannot be Blank'),
        email : yup.string().email('Email is Invalid').required('Required'),
        password : yup.string().min(6,'Password is short').max(128).required('Required')
    })

    const { handleSubmit, handleChange, handleBlur, touched, errors, setErrors, values } = useFormik({
        initialValues : {
            username : '',
            email : '',
            password : ''
        },
        validationSchema,
        onSubmit : (values) => {
            const redirect = () => {
                history.push('login')
            }
            dispatch(startRegisterUser(values,redirect))
        }
    })

    return (
        <div className="input-field-container">
            <Heading headingType="h2" title="Register With Us →" />
            <form onSubmit={handleSubmit}>
                <InputField 
                    id="username"
                    name="username" 
                    type="text" 
                    value={values.username} 
                    placeholder="Enter Username" 
                    className="input-field" 
                    handleBlur={handleBlur}
                    handleChange={handleChange} 
                    formErrors={ touched.username && errors.username ? errors.username : ''}
                /><br />
                <InputField 
                    id="email"
                    name="email" 
                    type="text" 
                    value={values.email} 
                    placeholder="Enter Email" 
                    className="input-field" 
                    handleBlur={handleBlur}
                    handleChange={handleChange} 
                    formErrors={touched.email && errors.email ? errors.email : '' }
                /><br />
                <InputField 
                    id="password"
                    name="password" 
                    type="password" 
                    value={values.password} 
                    placeholder="Enter Password" 
                    className="input-field"
                    handleBlur={handleBlur} 
                    handleChange={handleChange} 
                    formErrors={ touched.password && errors.password ? errors.password : ''}
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