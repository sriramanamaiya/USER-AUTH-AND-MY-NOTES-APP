import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

import userAuth from '../helperfunctions/userAuth'

import Heading from '../common-comp/Heading'
import NotesContainer from './NotesContainer'

const MyNotes = (props) => {

    const isLoading = useSelector((state) => {
        return state.user.isLoading
    })

    return (
        <>
            { !isLoading && (
                <>
                    { userAuth() ? (
                        <Redirect to="/login" />
                    ) : (
                        <>
                            <Heading headingType="h4" title="My Notes" className="heading-notes" />
                            <NotesContainer />
                        </>
                    ) }
                </>
            ) }
        </>
    )
}

export default MyNotes