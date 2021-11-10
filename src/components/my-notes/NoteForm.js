import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { startAddNote, startEditNote, errorNotes } from '../../actions/notesAction'

import Heading from '../common-comp/Heading'
import InputField from '../common-comp/InputField'
import TextArea from './TextArea'

const NoteForm = (props) => {
    const { id, title : noteTitle, body: noteBody, handleToggle } = props

    const dispatch = useDispatch()

    const notesErrors = useSelector((state) => {
        return state.notes.errors
    })

    useEffect(() => {
        return () => {
            dispatch(errorNotes({}))
        }
    },[])

    useEffect(() => {
        if( Object.keys(notesErrors).length > 0 ){
            setErrors(notesErrors)
        }
    },[notesErrors])

    useEffect(() => {
        if( noteTitle ){
            setValues({
                title : noteTitle,
                body : noteBody
            })
        }
    },[noteTitle,noteBody])

    const validationSchema = yup.object({
        title : yup.string().required('Required')
    })

    const { handleChange, handleSubmit, handleBlur, values, errors, setErrors, setValues  } = useFormik({
        initialValues : {
            title : '',
            body : ''
        },
        validationSchema,
        validateOnChange : false,
        onSubmit : (values, { resetForm }) => {
            if( id ){
                dispatch(startEditNote(id, values, handleToggle))
            }else{
                dispatch(startAddNote(values, resetForm))
            }
        }
    })

    return (
        <div className="note-form">
            <Heading headingType="h5" title="Add Note" className="add-notes-heading" />
            <form onSubmit={handleSubmit}>
                <InputField 
                    id="title"
                    name="title"
                    type="text"
                    value={values.title}
                    placeholder="Title"
                    className="note-field"
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    formErrors={errors.title}
                /><br />
                <TextArea 
                    id="body"
                    name="body"
                    value={values.body}
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