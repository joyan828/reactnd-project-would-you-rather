import { _getQuestions, _getUsers } from '../utils/api'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'sarahedo'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export function handleInitialData() {
    return (dispatch) => {
        Promise.all([ 
            _getQuestions(),
            _getUsers()
        ]).then(({questions, users}) => {
            dispatch(receiveData(questions, users))
            dispatch(dispatch(setAuthedUser(AUTHED_ID)))
        });
    }
}

function receiveData (questions, users) {
    return {
        type: RECEIVE_DATA,
        questions,
        users,
    }
}
