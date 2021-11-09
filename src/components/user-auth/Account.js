import { CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startAccountDetails, loading } from '../../actions/userAction'
import Heading from '../common-comp/Heading'
import ListItem from './ListItem'

const Account = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    const userDetails = useSelector((state) => {
        return state.user
    })

    const { isLoading, data } = userDetails
   
    useEffect(() => {
        const token = localStorage.getItem('token')
        if( token ){
            dispatch(loading())
            dispatch(startAccountDetails(token))
        }else{
            console.log('1')
            history.push('/login')
        }
    },[])

    return (
        <div className="account">
            { isLoading ? (
                <CircularProgress className="spinner-account" />
            ) : (
                <>
                    <Heading headingType="h4" title="Account Details →" className={"account-heading"} />
                    <ul>
                        { Object.keys(data).map((ele,i) => {
                            return (
                                <ListItem key={i} prop={ele} title={data[ele]} />
                            )
                        }) }
                    </ul>
                </>
            ) }
        </div>
    )
}

export default Account