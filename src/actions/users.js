export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER'

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