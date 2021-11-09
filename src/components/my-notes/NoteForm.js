import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startAddNote, startEditNote } from '../../actions/myNotesaction'
import Heading from '../common-comp/Heading'

import InputField from '../common-comp/InputField'
import TextArea from './TextArea'

const NoteForm = (props) => {
    const { id, title : noteTitle, body: noteBody, handleToggle } = props

    const [ title, setTitle ] = useState( noteTitle ? noteTitle : '')
    const [ body, setBody ] = useState( noteBody ? noteBody : '')
    const [ formErrors, setFormErrors ] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const notesData = useSelector((state) => {
        return state.notes
    })

    const { data, errors : error } = notesData

    useEffect(() => {
        if( Object.keys(error).length > 0 ){
            setFormErrors(error)
        }
    },[error])

    const handleChange = (e) => {
        if( e.target.name === 'title' ){
            setTitle(e.target.value)
        }else if( e.target.name === 'body' ){
            setBody(e.target.value)
        }
    }

    const runValidations = () => {
        if( title.trim().length === 0 ){
            errors.title = 'Title Cannot be Blank'
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if( Object.keys(errors).length === 0 ){
            setFormErrors({})
            const userNote = {
                title : title,
                body : body
            }

            if( id ){
                dispatch(startEditNote(id, userNote, handleToggle))
            }else{
                dispatch(startAddNote(userNote))
                if( data.length > 0 ){
                    setTitle('')
                    setBody('')
                }
            }
        }else {
            setFormErrors(errors)
        }
    }

    return (
        <div className="note-form">
            <Heading headingType="h5" title="Add Note" className="add-notes-heading" />
            <form onSubmit={handleSubmit}>
                <InputField 
                    type="text"
                    value={title}
                    name="title"
                    placeholder="Title"
                    className="note-field"
                    formErrors={formErrors.title}
                    handleChange={handleChange}
                /><br />
                <TextArea 
                    value={body}
                    name="body"
                    placeholder="Body"
                    className="note-field"
                    handleChange={handleChange}
                />
                <br />
                <InputField 
                    type="submit"
                    value="Save"
                    className="button"
                />
            </form>
        </div>
    )
}

export default NoteForm