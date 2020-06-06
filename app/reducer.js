export const SET_USER_DETAILS = "SET_USER_DETAILS";
import { combineReducers } from 'redux';

const initialState = {
    username:'',
    email:'',
    password:''
}

 function reducerFunction(state=initialState, action) {
    switch(action.type) {
        case SET_USER_DETAILS:
           return action.user
        default:
            return state   
    }
}

export default combineReducers({reducerFunction});
