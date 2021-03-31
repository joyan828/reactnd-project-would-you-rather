export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function saveAnswerToQuestion (questions) {
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        questions
    }
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

