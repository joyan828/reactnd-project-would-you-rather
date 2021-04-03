import { avatarURL } from "./avatarGenerator"

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return d.toLocaleDateString() + ' ' + time.substr(0, 5) + time.slice(-2)
}

export function generateQuestion ({author, optionOneText, optionTwoText}) {
    return {
        author, 
        id: generateUID(),
        timestamp: Date.now(),
        optionOne: {
            votes: [], 
            text: optionOneText
        },
        optionTwo: {
            votes: [], 
            text: optionTwoText
        },
    }
}

export function generateUser ({ id, name, password }) {
    return {
        id, 
        name,
        password,
        avatarURL: avatarURL(id),
        answers: {},
        questions: []
    }
}

export function formatQuestion ({ question, author }) {
    const { id, timestamp, optionOne, optionTwo} = question
    return {
        author,
        id,
        timestamp: formatDate(timestamp), 
        optionOne,
        optionTwo,
    }
}

export function formatUser ({ user }) {
    const { id, name, avatarURL, questions, answers} = user
    const answer = Object.keys(answers).length
    const question = questions.length

    return {
        id, 
        name, 
        avatarURL, 
        answers, 
        questions,
        scores : {
            answer,
            question,
            total: answer + question 
        }
    }
}
  