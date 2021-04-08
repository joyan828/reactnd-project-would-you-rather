import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestion } from '../../utils/formatter'
import { MineBadge } from '../utils/Badge'

function UnansweredSmall(props) {
    const { id, author, optionOne, optionTwo } = props.question

    return (
        <div className='answer-card-small'>  
           <Link to={`/question/${id}`}>
                { author.id === props.authedUser &&
                    <MineBadge />
                } 
                <div className='questioner'>
                    <img 
                        src= { author.avatarURL }
                        alt= {`avatar of ${author.name}`}
                        className='avatar-img'
                    />
                    <p>
                        <span className='strong'>{author.name}</span> 
                        &nbsp;asks
                    </p>
                </div>
                <div className='point'>
                    Would you rather
                </div>
                <div className='text-field'>
                    <p className='options'>
                        <span className='option'>{optionOne.text} </span>
                        <span className='or'>OR</span>
                        <span className='option'>{optionTwo.text} </span>
                        
                    </p>
                </div>
            </Link>
        </div>
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

export default connect(mapStateToProps)(UnansweredSmall);
