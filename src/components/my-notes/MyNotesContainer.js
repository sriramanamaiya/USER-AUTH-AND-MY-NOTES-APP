import React,{ useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router'

import { startGetUserNotes, isLoading } from '../../actions/myNotesaction'
import MyNotesList from './MyNotesList'
import NoteForm from './NoteForm'

const MyNotesContainer = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if( token ){
            dispatch(isLoading())
            dispatch(startGetUserNotes(token))
        }else {
            history.push('/login')
        }
    },[])

    return (
        <div className="notes-container">
            <MyNotesList />
            <NoteForm />
        </div>
    )
}

export default withRouter(MyNotesContainer)