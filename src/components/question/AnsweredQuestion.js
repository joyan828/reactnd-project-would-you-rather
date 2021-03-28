import React from 'react'
import '../../styles/App.css'
import { formatDate } from '../../utils/formatter'

export default function AnsweredQuestion(props) {
    const isOptionOneSelected = () => {
        const { optionOne } = props.question
        return optionOne.votes.includes(props.authedUser) 
    }

    const { 
        author, timestamp, optionOne, optionTwo
    } = props.question
    const totalVote = optionOne.votes.length + optionTwo.votes.length
        
    return (
      <div className="answer-card unanswered">
        <img 
            src= { author.avatarURL() }
            alt= {`avatar of ${author.name}`}
            className='avatar-img'
        />
        <p>asked by {author.name} </p>
        <span>{formatDate(timestamp)}</span>
        <p>Result: Would you rather...</p>
        <div className={isOptionOneSelected()? 'option selected' : 'option'}>
            <p>{optionOne.text}</p>
            <span>{optionOne.votes.length} out of {totalVote}</span>
        </div>
        <div className={isOptionOneSelected()? 'option' : 'option selected'}>
            <p>{optionTwo.text}</p>
            <span>{optionTwo.votes.length} out of {totalVote}</span>
        </div>
      </div>
    );
}