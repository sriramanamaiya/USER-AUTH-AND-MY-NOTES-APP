import axios from 'axios'

const startGetUserNotes = (token) => {
    return (dispatch) => {
        axios.get('https://dct-user-auth.herokuapp.com/api/notes', {
            headers : {
                'x-auth' : token
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(isLoading())
                dispatch(userNotes(result.reverse()))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const userNotes = (notes) => {
    return {
        type : 'USER_NOTES',
        payload : notes
    }
}

const isLoading = () => {
    return {
        type : 'LOADING'
    }
}

const startAddNote = (userNote) => {
    return (dispatch) => {
        axios.post('https://dct-user-auth.herokuapp.com/api/notes',userNote,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(errorNotes(result.errors))
                }else {
                    dispatch(addNote(result))
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const errorNotes = (errors) => {
    return {
        type : 'ERROR_NOTES',
        payload : errors
    }
}

const addNote = (note) => {
    return {
        type : 'ADD_NOTE',
        payload : note
    }
}

const startDeleteNote = (id) => {
    return (dispatch) => {
        axios.delete(`https://dct-user-auth.herokuapp.com/api/notes/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(deleteNote(result._id))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const deleteNote = (id) => {
    return {
        type : 'DELETE_NOTE',
        payload : id
    }
}

const startEditNote = (id, editedData, handleToggle) => {
    return (dispatch) => {
        axios.put(`https://dct-user-auth.herokuapp.com/api/notes/${id}`, editedData, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(editNote(result))
                handleToggle()
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const editNote = (note) => {
    return {
        type : 'EDIT_NOTE',
        payload : note
    }
}

const startShowSingleNote = (id) => {
    return (dispatch) => {
        axios.get(`https://dct-user-auth.herokuapp.com/api/notes/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(isLoading())
                dispatch(showSingleNote(result))
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const showSingleNote = (note) => {
    return {
        type : 'SHOW-SINGLE-NOTE',
        payload : note
    }
}

export { startGetUserNotes, startAddNote, startDeleteNote, startEditNote, startShowSingleNote, isLoading }