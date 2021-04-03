import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { saveUser } from '../utils/api'

export const ADD_USER = 'ADD_USER'
export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER'

function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function handleAddUser({id, name, password}) {
    return (dispatch) => {
        dispatch(showLoading())

        return saveUser({id, name, password})
            .then(({ user }) => {
                dispatch(addUser(user))
                dispatch(hideLoading())
                
                return true
            })
            .catch((e)=> {
                console.warn(`Error in handleAddUser `, e)
                alert('There was an error adding the user. Try again.')
            })
    }
}

export function saveAnswerToUser (users) {
    return {
        type: SAVE_ANSWER_TO_USER,
        users
    }
}

export function saveQuestionToUser (qid, authedUser) {
    return {
        type: SAVE_QUESTION_TO_USER,
        qid,
        authedUser
    }
}
