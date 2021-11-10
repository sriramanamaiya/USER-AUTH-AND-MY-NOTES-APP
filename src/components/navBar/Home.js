import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { Link } from 'react-router-dom'

import { accountDetails } from '../../actions/userAction'

import Heading from '../common-comp/Heading'

const Home = (props) => {
    const { history } = props

    const dispatch = useDispatch()

    const userData = useSelector((state) =>{
        return state.user
    })

    const { isLoading, data } = userData

    const handleClick = () => {
        localStorage.removeItem('token')
        alert('Sucessfully Logged Out')
        dispatch(accountDetails({}))
        history.push('/')
    }
    
    return (
        <>
            { isLoading ? (
                <div className="spinner-home">
                    <CircularProgress />
                </div>
            ) : (
                <div className="nav-bar">
                    <Heading headingType="h1" title="User-Auth & Notes 🗒️" className={"main-heading"}/>
                    <nav className="navigation">
                        <Link to="/" >Home</Link>
                        { Object.keys(data).length > 0 ? (
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
            )}
        </>
    )
}

export default Home