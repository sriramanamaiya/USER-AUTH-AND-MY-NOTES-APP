import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route } from 'react-router-dom'

import { startGetAccountDetailsUserNotes } from '../../actions/userAction'

import Home from './Home'
import Register from '../user-auth/Register'
import Login from '../user-auth/Login'
import Account from '../user-auth/Account'
import MyNotes from '../my-notes/MyNotes'

const RouteComp = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if( token ){
            dispatch(startGetAccountDetailsUserNotes(token))
        }
    },[])

    return (
        <>
            <Route path="/" component={Home}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login}/>
            <Route path="/account" component={Account} />
            <Route path="/mynotes" component={MyNotes} />
        </>
    )
}

export default RouteComp