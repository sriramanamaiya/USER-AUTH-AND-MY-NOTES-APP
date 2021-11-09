import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { startDeleteNote, startShowSingleNote, isLoading } from '../../actions/myNotesaction'

import Paragraph from '../common-comp/Paragraph'
import Button from './Button'
import NoteForm from './NoteForm'
import ViewNote from './ViewNote'

const NoteItem = (props) => {
    const { _id, title, body } = props
    const [ toggle, setToggle ] = useState(false)
    const [ show, setShow ] = useState(false)

    const  dispatch = useDispatch()

    const handleClick = () => {
        const userConfirmation = window.confirm('Are You Sure')
        if( userConfirmation ){
            dispatch(startDeleteNote(_id))
        }
    }

    const handleToggle =() => {
        setToggle(!toggle)
    }

    const handleShow = () => {
        dispatch(isLoading())
        dispatch(startShowSingleNote(_id))
        setShow(true)
    }

    const handleShowClose = () => {
        setShow(false)
    }

    return (
        <div className="note-item-comp ">  
            { toggle ? (
                <>
                    <NoteForm id={_id} title={title} body={body} handleToggle={handleToggle} />
                    <Button name="Cancel" className="cancel-button" handle={handleToggle} />
                </>
            ) : (
                <>
                    <Paragraph title={title} className="title-note" handleShow={handleShow} />
                    <Button name="X" className="delete-button" handle={handleClick} />
                    <Button name="Edit" className="edit-button" handle={handleToggle} />
                    <ViewNote show={show} handleShowClose={handleShowClose} />
                </>
            )}
        </div>
    )

}

export default NoteItem