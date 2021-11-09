import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { loginAuth } from '../../actions/userAction'

import Home from './Home'
import Register from '../user-auth/Register'
import Login from '../user-auth/Login'
import Account from '../user-auth/Account'
import MyNotes from '../my-notes/MyNotes'

const RouteComp = (props) => {
    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => {
        return state.user.isLoggedIn
    })

    useEffect(() => {
        if( localStorage.getItem('token') ){
            dispatch(loginAuth())
        }
    },[])

    return (
        <>
            <Route path="/" component={Home}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login}/>
            <Route path="/account" >{isLoggedIn ? <Account/> : <Redirect to="/login" />}</Route>
            <Route path="/mynotes" component={MyNotes} />
        </>
    )
}

export default RouteComp