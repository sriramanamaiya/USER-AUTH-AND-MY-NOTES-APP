import React from 'react'

import Heading from '../common-comp/Heading'
import MyNotesContainer from './MyNotesContainer'

const MyNotes = (props) => {

    return (
        <>
            <Heading headingType="h4" title="My Notes" className="heading-notes" />
            <MyNotesContainer />
        </>
    )
}

export default MyNotes