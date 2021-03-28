function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return d.toLocaleDateString() + ' ' + time.substr(0, 5) + time.slice(-2)
}

export function formatQuestion ({ question, author }) {
    const { id, timestamp, optionOne, optionTwo} = question
    return {
        author,
        id,
        timestamp, 
        optionOne,
        optionTwo,
    }
}
  