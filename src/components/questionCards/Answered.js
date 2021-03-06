import React, { Component } from 'react'
import { connect } from 'react-redux'
import CheckMark from '../../images/checking-mark.png'
import CommentSection from '../comments/CommentSection'

class Answered extends Component {
    isOptionOneSelected = () => {
        const { optionOne } = this.props.question
        return optionOne.votes.includes(this.props.authedUser) 
    }
    calculatePercentage = (voted, total) => {
        return Math.round(voted/total * 100)
    }
    render () {
        const { 
            id, author, timestamp, optionOne, optionTwo, comments
        } = this.props.question

        const totalVote = optionOne.votes.length + optionTwo.votes.length
        const optionOneRate = this.calculatePercentage(optionOne.votes.length, totalVote)
        const optionTwoRate = this.calculatePercentage(optionTwo.votes.length, totalVote)

        return (
            <div className='answer-card'>
                <div className='card-header-container'>
                    <div className='questioner'>
                        <img 
                            src= { author.avatarURL }
                            alt= {`avatar of ${author.name}`}
                            className='avatar-img'
                        />
                        <p>
                            <span className='strong'>asked by&nbsp;{author.name}</span> 
                        </p>
                    </div>
                    <div className='point'>
                        Would you rather
                    </div> 
                    <div className='date-created'>{timestamp}</div>
                </div>
                <div className='poll-result'>
                    <div className='options'>
                        <div className={this.isOptionOneSelected()? 'option selected' : 'option'}>
                            <div
                                className='graph-bar' 
                                style={{
                                    height: optionOneRate + '%',
                                    borderTopLeftRadius: optionOneRate === 100 && '7px',
                                    borderTopRightRadius: optionOneRate === 100 && '7px'  
                                }}></div>
                            <div className='poll-info'>
                                <p className='percentage'>{optionOneRate}%</p>
                                <p className='number-of-votes'>{optionOne.votes.length} Voted</p>
                                <img 
                                    className='check-mark' 
                                    src={CheckMark} 
                                    alt={`Your vote is ${optionOne.text}`}
                                />
                                <span className='option-text'>{optionOne.text}</span>
                            </div>
                        </div>
                        <div className={this.isOptionOneSelected()? 'option' : 'option selected'}>
                            <div
                                className='graph-bar' 
                                style={{
                                    height: optionTwoRate + '%',
                                    borderTopLeftRadius: optionTwoRate === 100 && '7px',
                                    borderTopRightRadius: optionTwoRate === 100 && '7px'  
                                }}></div>
                            <div className='poll-info'>
                                <p className='percentage'>{optionTwoRate}%</p>
                                <p className='number-of-votes'>{optionTwo.votes.length} Voted</p>
                                <img 
                                    className='check-mark' 
                                    src={CheckMark} 
                                    alt={`Your vote is ${optionTwo.text}`}
                                />
                                <span className='option-text'>{optionTwo.text}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments */}
                <CommentSection 
                    questionId={id}
                    totalComments={comments.length}
                />   

            </div>
        );
    }
}

export default connect()(Answered)
