export const SAVE_ANSWER_TO_USER = 'SAVE_ANSWER_TO_USER'

export function saveAnswerToUser (users) {
    return {
        type: SAVE_ANSWER_TO_USER,
        users
    }
}
