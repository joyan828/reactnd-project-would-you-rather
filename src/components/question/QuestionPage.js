import React from 'react'
import '../../styles/App.css'
import '../../styles/question.css'
import { connect } from 'react-redux'
import { formatQuestion } from '../../utils/formatter'
import AnsweredQuestion from './AnsweredQuestion'
import UnansweredQuestion from './UnansweredQuestion'

function QuestionPage (props) {
    const { question, authedUser, isAnswered, dispatch } = props

    return (
        <div className='container'>
            {
                isAnswered 
                    ? <AnsweredQuestion 
                        dispatch= {dispatch}
                        question= {question} 
                        authedUser= {authedUser}
                    />
                    : <UnansweredQuestion 
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
