import {RECEIVE_DATA} from '../actions/shared'
import {
    ADD_USER,
    SAVE_ANSWER_TO_USER, 
    SAVE_QUESTION_TO_USER
} from '../actions/users'

export default function questions (state = {}, action) {
    switch( action.type ) {
        case RECEIVE_DATA : 
            return action.users
        case ADD_USER : 
            const { user } = action
            return {
                ...state,
                [user.id] : {
                    ...user
                }
            }
        case SAVE_ANSWER_TO_USER : 
            return action.users
        case SAVE_QUESTION_TO_USER : 
            const { qid, authedUser} = action
            return { 
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    questions: state[authedUser].questions.concat([qid])
                }
            }
        default : 
            return state
    }
}