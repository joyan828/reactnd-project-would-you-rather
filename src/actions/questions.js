export const SAVE_ANSWER_TO_QUESTION = 'SAVE_ANSWER_TO_QUESTION'

export function saveAnswerToQuestion (questions) {
    return {
        type: SAVE_ANSWER_TO_QUESTION,
        questions
    }
}
