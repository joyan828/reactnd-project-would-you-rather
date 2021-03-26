import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { saveAnswerToQuestion } from './questions'
import { saveAnswerToUser } from './users'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const AUTHED_ID = 'sarahedo'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())

        getInitialData()
            .then(({questions, users}) => {
                dispatch(receiveData(questions, users))
                dispatch(dispatch(setAuthedUser(AUTHED_ID)))
                dispatch(hideLoading())
            })
    }
}

export function handleSaveAnswer(info) {
    return (dispatch) => {
        return saveQuestionAnswer(info)
            .then(({questions, users}) => {
                dispatch(saveAnswerToQuestion(questions))
                dispatch(saveAnswerToUser(users))
            })
            .catch((e)=> {
                console.warn(`Error in handleSaveAnswer: `, e)
                alert('There was an error submiting the answer. Try again.') 
            })
        }   
} 

function receiveData (questions, users) {
    return {
        type: RECEIVE_DATA,
        questions,
        users,
    }
}
