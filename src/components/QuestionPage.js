import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { formatQuestion } from '../utils/formatter'
import Answered from './questionCards/Answered'
import Unanswered from './questionCards/Unanswered'

function QuestionPage (props) {
    const { question, authedUser, isAnswered, dispatch } = props
    
    if (question === null) {
        return <Redirect to='/notfound'></Redirect>
    }
    return (
        <div className='container'>
            {
                isAnswered 
                    ? <Answered 
                        dispatch= {dispatch}
                        question= {question} 
                        authedUser= {authedUser}
                    />
                    : <Unanswered 
                        dispatch= {dispatch}
                        question= {question} 
                        authedUser= {authedUser}
                    />
            }
        </div>
    )
}

function mapStateToProps ({ questions, users, authedUser }, props) {
    const { id } = props.match.params
    const answerQidArray = Object.keys(users[authedUser].answers)
    let isAnswered = answerQidArray.includes(id)

    const question = questions[id]
    return {
        question : question
            ? formatQuestion({
                question, 
                author : users[question.author]
            })
        : null, 
        authedUser,
        isAnswered
    }
}

export default connect(mapStateToProps)(QuestionPage);
