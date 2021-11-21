const userInitialState = {
    isLoading : false,
    data : {},
    errors : {}
}

const userReducer = ( state = userInitialState, action ) => {
    switch( action.type ) {
        case 'LOADING-USER' : {
            return { ...state, isLoading : !state.isLoading }
        }
        case 'ERRORS-REGISTER' : {
            let result
            for( const key in action.payload ){
                result = { ...result,[key] : action.payload[key].message }
            }
            return { ...state, errors : {...result} }
        }
        case 'ERRORS-LOGIN' : {
            return { ...state, errors : { ...action.payload } }
        }
        case 'ACCOUNT-DETAILS' : {
            return { ...state, data : {...action.payload} }
        }
        case 'LOG-OUT' : {
            return {...userInitialState}
        }
        default : {
            return {...state}
        }
    }
}

export default userReducer