import React from 'react'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'

import userAuth from '../helperfunctions/userAuth'

import Heading from '../common-comp/Heading'
import ListItem from './ListItem'

const Account = (props) => {
    const userData = useSelector((state) => {
        return state.user.data
    })

    return (
        <div className="account">
            { userAuth() ? (
                <Redirect to="/login" />
            ): (
                <>
                    { Object.keys(userData).length > 0 && (
                        <>
                            <Heading headingType="h4" title="Account Details →" className="account-heading" />
                            <ul>
                                { Object.keys(userData).map((ele,i) => {
                                    return (
                                        <ListItem key={i} prop={ele} title={userData[ele]} />
                                    )
                                }) }
                            </ul>
                        </>
                    ) }
                </>
            ) }
        </div>
    )
}

export default Account