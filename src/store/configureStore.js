import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk' 

import userReducer from '../reducers/userReducer'
import myNotesReducer from '../reducers/myNotesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        user : userReducer,
        notes : myNotesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore