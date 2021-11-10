import React from 'react'
import { useSelector } from 'react-redux'

import Heading from '../common-comp/Heading'
import NoteItem from './NoteItem'

const NotesList = (props) => {
    const notesData = useSelector((state) => {
        return state.notes.data
    })

    return (
        <div className="notelist">
            { notesData.length === 0 ? (
                <>
                    <Heading headingType="h6" title="No Notes Found Add Your First Quote" className="no-notes" />
                </>
            ) : (
                <>
                    { notesData.map((note) => {
                        return (
                            <NoteItem key={note._id} {...note} />
                        )
                    })}
                </>
            ) }
        </div>
    )
}

export default NotesList