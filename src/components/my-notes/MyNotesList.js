import React from 'react'
import { useSelector } from 'react-redux'

import Heading from '../common-comp/Heading'
import NoteItem from './NoteItem'

const MyNotesList = (props) => {
    const myNotes = useSelector((state) => {
        return state.notes
    })

    const { isLoading, data } = myNotes
    console.log(isLoading)

    return (
        <div className="notelist">
            { data.length === 0 ? (
                <>
                    <Heading headingType="h6" title="No Notes Found Add Your First Quote" className="no-notes" />
                </>
            ) : (
                <>
                    { data.map((note) => {
                        return (
                            <NoteItem key={note._id} {...note} />
                        )
                    })}
                </>
            ) }
        </div>
    )
}

export default MyNotesList