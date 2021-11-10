import React from 'react'

import NotesList from './NotesList'
import NoteForm from './NoteForm'

const NotesContainer = (props) => {

    return (
        <div className="notes-container">
            <NotesList />
            <NoteForm />
        </div>
    )
}

export default NotesContainer