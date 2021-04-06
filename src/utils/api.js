import {  
    _getUsers,
    _getQuestions,
    _getComments,
    _saveQuestion,
    _saveQuestionAnswer,
    _saveUser,
    _logInUser,
    _logOutUser
} from './_DATA'

export function getInitialData () {
    return Promise.all([ 
        _getQuestions(),
        _getUsers(),
        _getComments()
    ]).then(([questions, users, comments]) => ({
        questions, 
        users,
        comments
    }))
}

export function getComments (quesitonId) {
    return _getComments(quesitonId)
}
export function saveQuestion (question) {
    return _saveQuestion(question)
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info)
}

export function saveUser(info){
    return _saveUser(info)
}

export function logInUser(info){
    return _logInUser(info)
}

export function logOutUser(id){
    return _logOutUser(id)
}
