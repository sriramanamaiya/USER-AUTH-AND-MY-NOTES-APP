import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'

import Heading from '../common-comp/Heading'
import ListItem from './ListItem'

const Account = (props) => {
    const userDetails = useSelector((state) => {
        return state.user
    })

    const { isLoading, data } = userDetails

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