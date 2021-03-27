import React from 'react'
import '../../styles/App.css'
import { connect } from 'react-redux'
import { formatQuestion } from '../../utils/formatter'

function UnansweredQuestionSmall(props) {
    // Todo: move to question detail page

    const { id, author, optionOne } = props.question

    return (
        <li className='answer-card-small'>
            <div className='questioner'>
                <img 
                    src= { author.avatarURL() }
                    alt= {`avatar of ${author.name}`}
                    className='avatar-img'
                />
                <p>
                    <span className='strong'>{author.name}</span> 
                    &nbsp;asks
                </p>
            </div>
            <div className='point'>
                Would you <br />rather
            </div>
            <div className='text-feild'>
                <p className='answer'>{optionOne.text} 
                    <span>&nbsp;OR...</span>
                </p>
            </div>
        </li>
    )
}

function mapStateToProps ({ questions, users, authedUser }, { id }) {
    const question = questions[id]
    return {
        question : question
            ? formatQuestion({
                question, 
                author : users[question.author]
            })
        : null, 
        authedUser,
    }
}

export default connect(mapStateToProps)(UnansweredQuestionSmall);
