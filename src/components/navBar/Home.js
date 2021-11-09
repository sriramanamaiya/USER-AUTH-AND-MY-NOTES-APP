import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginAuth } from '../../actions/userAction'

import Heading from '../common-comp/Heading'

const Home = (props) => {
    const { history } = props

    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) =>{
        return state.user.isLoggedIn
    })

    const handleClick = () => {
        localStorage.removeItem('token')
        alert('Sucessfully Logged Out')
        dispatch(loginAuth())
        //handleAuth()
        history.push('/')
    }
    
    return (
        <div className="nav-bar">
            <Heading headingType="h1" title="User-Auth & Notes 🗒️" className={"main-heading"}/>
            <nav className="navigation">
                <Link to="/" >Home</Link>
                { isLoggedIn ? (
                    <>
                        <Link to="/account" >Account</Link>
                        <Link to="/mynotes">My Notes</Link>
                        <Link to="#" onClick={handleClick} >LogOut</Link>
                    </>
                ) : (
                    <>
                        <Link to="/register" >Register</Link>
                        <Link to="/login" >Login</Link>
                    </>
                ) }
            </nav>
        </div>
    )
}

export default Home