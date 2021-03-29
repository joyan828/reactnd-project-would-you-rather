import React from 'react'
import '../../styles/App.css'
import { formatDate } from '../../utils/formatter'

export default function AnsweredQuestion(props) {
    const isOptionOneSelected = () => {
        const { optionOne } = props.question
        return optionOne.votes.includes(props.authedUser) 
    }

    const calculatePercentage = (voted, total) => {
        return Math.round(voted/total * 100)
    }

    const { 
        author, timestamp, optionOne, optionTwo
    } = props.question

    const totalVote = optionOne.votes.length + optionTwo.votes.length
    const optionOneRate = calculatePercentage(optionOne.votes.length, totalVote)
    const optionTwoRate = calculatePercentage(optionTwo.votes.length, totalVote)
    return (
      <div className='answer-card'>
         <div className='card-info-container'>
            <div className='questioner'>
                <img 
                    src= { author.avatarURL() }
                    alt= {`avatar of ${author.name}`}
                    className='avatar-img'
                />
                <p>
                    <span className='strong'>asked by&nbsp;{author.name}</span> 
                </p>
            </div>
            <div className='date-created'>{formatDate(timestamp)}</div>
        </div>
        <div className='point'>
            Result: Would you rather
        </div> 
        <div className='poll-result'>
            <div className='options'>
                <div className={isOptionOneSelected()? 'option selected' : 'option'}>
                    <p className='option-text'>{optionOne.text}</p>
                    <div className='graph-bar'>
                        <span 
                            className='bar-section' 
                            style={{width: optionOneRate + '%'}}
                        ></span>
                        <span 
                            className='percentage'
                            style={{left: optionOneRate === 0 ? '1%' : optionOneRate -8 + '%'}}
                        >{optionOneRate}%</span>
                    </div>
                    <p className='number-of-votes'>{optionOne.votes.length} out of {totalVote}</p>
                </div>
                <div className={isOptionOneSelected()? 'option' : 'option selected'}>
                <p className='option-text'>{optionTwo.text}</p>
                    <div className='graph-bar'>
                        <span 
                            className='bar-section' 
                            style={{width: optionTwoRate + '%'}}
                        ></span>
                        <span 
                            className='percentage'
                            style={{left: optionTwoRate === 0 ? '1%' : optionTwoRate -8 + '%'}}
                        >{optionTwoRate}%</span>
                    </div>
                    <p className='number-of-votes'>{optionTwo.votes.length} out of {totalVote}</p>
                </div>
            </div>
            <div>

            </div>
        </div>
      </div>
    );
}


{/* <div className={isOptionOneSelected()? 'option selected' : 'option'}>
    <p>{optionOne.text}</p>
    <span>{optionOne.votes.length} out of {totalVote}</span>
</div>
<div className={isOptionOneSelected()? 'option' : 'option selected'}>
    <p>{optionTwo.text}</p>
    <span>{optionTwo.votes.length} out of {totalVote}</span>
</div> */}