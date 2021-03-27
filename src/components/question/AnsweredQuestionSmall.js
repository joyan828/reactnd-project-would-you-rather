import React, { Component } from 'react'
import '../../styles/App.css'
import { connect } from 'react-redux'
import { formatQuestion } from '../../utils/formatter'
 
function AnsweredQuestionSmall(props) {
    // Todo: move to question detail page
    const isOptionOneSelected = () => {
        const { optionOne } = props.question
        return optionOne.votes.includes(props.authedUser) 
    }
    const { 
        id, author, optionOne, optionTwo
    } = props.question
    const totalVote = optionOne.votes.length + optionTwo.votes.length

    return (
      <div className="answer-card-small">
        <div className='questioner'>
            <img 
                src= { author.avatarURL() }
                alt= {`avatar of ${author.name}`}
                className='avatar-img'
            />
            <p>
                Asked by&nbsp;
                <span className='strong'>{author.name}</span> 
            </p>
        </div>
        <div className='point'>
            Would you <br />rather
        </div>
        <div className='text-feild'>
            <p className='answer'>
                {isOptionOneSelected()? optionOne.text : optionTwo.text} 
            </p>
        </div>
        <p className='secondary'>{totalVote} Voted</p>
      </div>
    );
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

export default connect(mapStateToProps)(AnsweredQuestionSmall);
