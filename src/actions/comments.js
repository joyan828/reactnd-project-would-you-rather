import { 
    getComments,
    saveLikeToggle,
} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ADD_COMMENT = 'ADD_COMMENT'

export function handleReceiveData(questionId) {
    return (dispatch) => {
        dispatch(showLoading())
        dispatch(receiveData({}))

        return getComments(questionId)
            .then(({comments}) => {
                dispatch(receiveData(comments))
                dispatch(hideLoading())
            })
    }
}

function receiveData(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

export function handleToggleComment (info) {
    return (dispatch) => {
        dispatch(toggleComment(info))
    
        return saveLikeToggle(info)
            .catch((e) =>{
                console.warn(`Error in handleToggleComment: `, e)
                dispatch(toggleComment(info))
                alert('There was an error liking the comment. Try again.')
            })
    }
}

function toggleComment({ id, authedUser, hasLiked }) {
    return {
        type: TOGGLE_LIKE,
        id,
        authedUser,
        hasLiked
    }
}

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}