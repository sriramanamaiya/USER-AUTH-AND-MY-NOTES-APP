const notesInitialState = {
    isLoading : false,
    data : [],
    note : {},
    errors : {}
}

const notesReducer = ( state = notesInitialState, action ) => {
    switch(action.type) {
        case 'LOADING-NOTES' : {
            return { ...state, isLoading : !state.isLoading }
        }
        case 'ERROR-NOTES' : {
            let result
            for( const key in action.payload ){
                result = { ...result , [key] : action.payload[key].message }
            }
            return { ...state, errors : {...result} }
        }
        case 'USER_NOTES' : {
            return { ...state, data : [...action.payload]}
        }
        case 'ADD_NOTE' : {
            return { ...state, data : [ {...action.payload},...state.data ] }
        }
        case 'DELETE_NOTE' : {
            const result = state.data.filter((note) => {
                return note._id !== action.payload
            })
            return { ...state, data : [...result] }
        }
        case 'EDIT_NOTE' : {
            const result = state.data.map((note) => {
                if( note._id  === action.payload._id ){
                    return { ...note, ...action.payload }
                }else{
                    return {...note}
                }
            })
            return { ...state, data : [...result] }
        }
        case 'SHOW-SINGLE-NOTE' : {
            return { ...state, note : {...action.payload} }
        }
        case 'LOG-OUT' : {
            return {...notesInitialState}
        }
        default : {
            return { ...state }
        }
    }
}

export default notesReducer