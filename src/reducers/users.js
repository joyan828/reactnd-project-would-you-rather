import {RECEIVE_DATA} from '../actions/shared'
import {SAVE_ANSWER_TO_USER} from '../actions/users'

export default function questions (state = {}, action) {
    switch( action.type ) {
        case RECEIVE_DATA : 
            return action.users
        case SAVE_ANSWER_TO_USER : 
            return action.users
        default : 
            return state
    }
}