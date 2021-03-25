import { RECEIVE_DATA } from '../actions/shared'
import { SAVE_ANSWER_TO_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
    switch( action.type ) {
        case RECEIVE_DATA : 
            return action.questions
        case SAVE_ANSWER_TO_QUESTION : 
            return action.questions
        default :  
            return state
    }
}