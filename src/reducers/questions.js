import { RECEIVE_DATA } from '../actions/shared'
import { 
    SAVE_ANSWER_TO_QUESTION, 
    ADD_QUESTION,
    ADD_COMMENT_TO_QUESTION 
} from '../actions/questions'

export default function questions (state = {}, action) {
    switch( action.type ) {
        case RECEIVE_DATA : 
            return action.questions
        case SAVE_ANSWER_TO_QUESTION : 
            return action.questions
        case ADD_QUESTION : 
            const { question } = action
            return {
                ...state,
                [question.id]: { 
                    ...question
                }
            }
        case ADD_COMMENT_TO_QUESTION : 
            const { questionId, commentId } = action
        
            return {
                ...state,
                [questionId]: {
                    ...state[questionId],
                    comments : state[questionId].comments.concat([commentId])
                }
            }  
        default :  
            return state
    }
}