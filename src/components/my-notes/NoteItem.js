import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { startDeleteNote, startShowSingleNote } from '../../actions/notesAction'

import Paragraph from '../common-comp/Paragraph'
import Button from '../common-comp/Button'
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
                    <Button name="Cancel" className="cancel-button" handleClick={handleToggle} />
                </>
            ) : (
                <>
                    <Paragraph title={title} className="title-note" handleShow={handleShow} />
                    <Button name="X" className="delete-button" handleClick={handleClick} />
                    <Button name="Edit" className="edit-button" handleClick={handleToggle} />
                    { show && <ViewNote show={show} handleShowClose={handleShowClose} /> }
                </>
            )}
        </div>
    )

}

export default NoteItem