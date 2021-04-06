import { 
    RECEIVE_COMMENTS, 
    TOGGLE_LIKE 
} from '../actions/comments'

export default function comments (state = {}, action) {
    switch( action.type ) {
        case RECEIVE_COMMENTS : 
            return action.comments
        case TOGGLE_LIKE : 
            return {
                ...state, 
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid)=> uid !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            }
        default :  
            return state
    }
}