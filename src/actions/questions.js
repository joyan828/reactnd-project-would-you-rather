export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_COMMENT_TO_QUESTION = 'ADD_COMMENT_TO_QUESTION'

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

export function addCommentToQuestion(questionId, commentId) {
    return {
        type: ADD_COMMENT_TO_QUESTION,
        questionId, 
        commentId
    }
}