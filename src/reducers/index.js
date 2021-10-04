import loggedReducer from './isLogged'
import emailReducer from './email'
import apiTokenReducer from './apiToken'
import storyReducer from './story'
import nameReducer from './name'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    isLogged: loggedReducer,
    email: emailReducer,
    apiToken: apiTokenReducer,
    story: storyReducer,
    name: nameReducer
})

export default allReducers