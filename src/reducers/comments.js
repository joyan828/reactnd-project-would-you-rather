import { 
    RECEIVE_COMMENTS, 
    TOGGLE_LIKE,
    ADD_COMMENT 
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
        case ADD_COMMENT :
            const { comment } = action
            let replyingTo = {}
            if( comment.replyingTo !== null ) {
                replyingTo = { 
                    [comment.replyingTo]: {
                        ...state[comment.replyingTo],
                        replies: state[comment.replyingTo].replies.concat([comment.id])          
                    }
                }
            } 

            return {
                ...state,
                [comment.id]: action.comment,
                ...replyingTo,
            }

        default :  
            return state
    }
}