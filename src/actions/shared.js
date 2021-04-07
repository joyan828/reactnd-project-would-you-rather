import { 
    getInitialData, 
    saveQuestionAnswer, 
    saveQuestion,
    saveComment,
} from '../utils/api'
import { 
    saveAnswerToQuestion, 
    addQuestion, 
    addCommentToQuestion 
} from './questions'
import { saveAnswerToUser, saveQuestionToUser } from './users'
import { addComment } from './comments'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())

        return getInitialData()
            .then(({questions, users}) => {
                dispatch(receiveData(questions, users))
                dispatch(hideLoading())
            })
    }
}

export function handleAddQuestion ({optionOneText, optionTwoText}) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())

        return saveQuestion({author: authedUser, optionOneText, optionTwoText})
            .then((question)=> {
                dispatch(addQuestion(question))
                dispatch(saveQuestionToUser(question.id, authedUser))
                dispatch(hideLoading())

                return true
            })
            .catch((e)=> {
                console.warn(`Error in handleAddQuestion `, e)
                alert('There was an error adding the answer. Try again.')
            })
    }
}

export function handleSaveAnswer(info) {
    return (dispatch) => {
        dispatch(showLoading())

        return saveQuestionAnswer(info)
            .then(({questions, users}) => {
                dispatch(saveAnswerToQuestion(questions))
                dispatch(saveAnswerToUser(users))
                dispatch(hideLoading())
            })
            .catch((e)=> {
                console.warn(`Error in handleSaveAnswer: `, e)
                alert('There was an error submiting the answer. Try again.') 
            })
        }   
} 

export function handleAddComment(info) {
    return (dispatch) => {
        dispatch(showLoading())

        return saveComment(info)
            .then((comment) => {
                const { id, commentingTo } = comment
                
                dispatch(addComment(comment))
                dispatch(addCommentToQuestion(commentingTo, id))
                dispatch(hideLoading())
            })
            .catch((e)=> {
                console.warn(`Error in handleAddComment: `, e)
                alert('There was an error submiting the comment. Try again.') 
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
