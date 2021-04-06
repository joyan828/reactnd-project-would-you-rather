import { getComments } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

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