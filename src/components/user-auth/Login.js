import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { startLoginUser, errorsLogin } from '../../actions/userAction'

import Heading from '../common-comp/Heading'
import InputField from '../common-comp/InputField'
import Button from '../common-comp/Button'
import Paragraph from '../common-comp/Paragraph'

const Login = (props) => {
    const { history } = props

    const dispatch = useDispatch()

    const error = useSelector((state) => {
        return state.user.errors
    })

    useEffect(() => {
        return () => {
            dispatch(errorsLogin({}))
        }
    },[])

    useEffect(() => {
        if( Object.keys(error).length > 0){
            setErrors(error)
        }
    },[error])

    const redirect = () => {
        history.push('/')
    }

    const validationSchema = yup.object({
        email : yup.string().email('Email is Invalid').required('Required'),
        password : yup.string().required('Required')
    })

    const { handleChange, handleBlur, handleSubmit, values, touched, errors, setErrors  } = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validationSchema,
        onSubmit : (values) => {
            dispatch(startLoginUser(values,redirect))
        }
    })

    return (
        <div className="input-field-container">
            <Heading headingType="h2" title="Login to your account" />
            { errors.errors && <Paragraph title={errors.errors} className={"login-errors"} />}
            <form onSubmit={handleSubmit}>
                <InputField 
                    id="email"
                    name="email" 
                    type="text" 
                    value={values.email} 
                    placeholder="Enter Email"
                    className="input-field" 
                    handleBlur={handleBlur}
                    handleChange={handleChange} 
                    formErrors={ touched.email && errors.email ? errors.email : ''}
                />< br />
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
                    value="LogIn" 
                    className="button"
                />
                <Button type="button" className="cancel-button" handleClick={redirect} name="Cancel" />
            </form>
        </div>
    )
}

export default Login